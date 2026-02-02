document.addEventListener('DOMContentLoaded', async () => {
    // 1. OBTENER ID DE LA URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    // Si no hay ID, volvemos al inicio
    if (!id) window.location.href = 'index.html';

    // Referencia al contenedor principal para errores
    const container = document.getElementById('detailContainer');

    try {
        // ---------------------------------------------------------
        // 2. PETICIONES PRINCIPALES (POKEMON + ESPECIE)
        // ---------------------------------------------------------
        const [pkRes, spRes] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        ]);
        
        const pk = await pkRes.json();
        const sp = await spRes.json();

        // ---------------------------------------------------------
        // 3. DATOS BÁSICOS (Nombre, ID, Altura, Peso, Descripción)
        // ---------------------------------------------------------
        document.getElementById('nombre-pk').innerText = pk.name;
        document.getElementById('id-pk').innerText = `#${pk.id}`;
        document.getElementById('altura-pk').innerText = (pk.height / 10) + ' m';
        document.getElementById('peso-pk').innerText = (pk.weight / 10) + ' kg';

        // Buscar descripción en español
        const entry = sp.flavor_text_entries.find(e => e.language.name === 'es');
        document.getElementById('desc-text').innerText = entry 
            ? entry.flavor_text.replace(/\f/g, ' ') // Limpiar saltos de línea raros
            : "No hay descripción disponible en español.";

        // Audio (Grito)
        const audio = document.getElementById('audio-pk');
        if (pk.cries && pk.cries.latest) {
            audio.src = pk.cries.latest;
            audio.volume = 0.2;
        } else {
            document.querySelector('.audio-box').style.display = 'none';
        }

        // ---------------------------------------------------------
        // 4. TIPOS Y COLORES
        // ---------------------------------------------------------
        const typeColors = {
            fire: '#F57D31', water: '#6493EB', grass: '#74CB48', electric: '#F9CF30',
            ice: '#9AD6DF', fighting: '#C12239', poison: '#A43E9E', ground: '#DEC16B',
            flying: '#A98FF3', psychic: '#FB5584', bug: '#A7B723', rock: '#B69E31',
            ghost: '#70559B', dragon: '#7037FF', steel: '#B8B8D0', fairy: '#E69EAC',
            normal: '#AAA67F', dark: '#705746'
        };

        const divTipos = document.getElementById('tipos-pk');
        pk.types.forEach(t => {
            const color = typeColors[t.type.name] || '#777';
            divTipos.innerHTML += `<span class="type-badge" style="background:${color}">${t.type.name}</span>`;
            
            // Detalle visual: Pintar el borde de la descripción del color del tipo principal
            if (t === pk.types[0]) {
                document.querySelector('.desc-box').style.borderLeftColor = color;
            }
        });

        // ---------------------------------------------------------
        // 5. IMÁGENES Y MODO SHINY
        // ---------------------------------------------------------
        const imgBox = document.getElementById('img-pk');
        const btnShiny = document.getElementById('btn-shiny');
        
        // Prioridad: Arte Oficial -> Sprite Default -> Placeholder
        const imgNormal = pk.sprites.other['official-artwork'].front_default || pk.sprites.front_default;
        const imgShiny = pk.sprites.other['official-artwork'].front_shiny || pk.sprites.front_shiny;
        
        let isShiny = false;

        // Cargar imagen inicial
        imgBox.src = imgNormal;
        imgBox.onload = () => imgBox.style.opacity = 1; // Efecto Fade-in

        // Si no existe versión shiny, ocultamos el botón
        if (!imgShiny) btnShiny.style.display = 'none';

        // Lógica del botón
        btnShiny.onclick = () => {
            isShiny = !isShiny;
            imgBox.style.opacity = 0; // Desvanecer
            
            setTimeout(() => {
                imgBox.src = isShiny ? imgShiny : imgNormal;
                imgBox.style.opacity = 1; // Aparecer
                btnShiny.innerText = isShiny ? "↩ Ver Normal" : "✨ Ver Versión Shiny";
                
                // Cambiar estilo del botón
                if(isShiny) {
                    btnShiny.style.background = "#555";
                    btnShiny.style.color = "white";
                    btnShiny.style.border = "1px solid #555";
                } else {
                    btnShiny.style.background = "linear-gradient(45deg, #FFD700, #ffec8b)";
                    btnShiny.style.color = "#333";
                    btnShiny.style.border = "1px solid #e6c200";
                }
            }, 200);
        };

        // ---------------------------------------------------------
        // 6. ESTADÍSTICAS (Barras de progreso)
        // ---------------------------------------------------------
        const divStats = document.getElementById('stats-pk');
        pk.stats.forEach(s => {
            // Calculamos porcentaje (Top visual 150)
            const porcentaje = Math.min(s.base_stat, 150) / 150 * 100;
            
            divStats.innerHTML += `
                <div class="stat-row">
                    <span class="stat-name">${s.stat.name}</span>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: ${porcentaje}%"></div>
                    </div>
                    <strong class="stat-num">${s.base_stat}</strong>
                </div>
            `;
        });

        // ---------------------------------------------------------
        // 7. DEBILIDADES (Requiere fetch extra al Tipo)
        // ---------------------------------------------------------
        const typeUrl = pk.types[0].type.url; // URL del tipo principal
        const typeRes = await fetch(typeUrl);
        const typeData = await typeRes.json();
        
        const debilidades = typeData.damage_relations.double_damage_from;
        const divWeak = document.getElementById('weakness-pk');

        if (debilidades.length === 0) {
            divWeak.innerHTML = '<small>Sin debilidades destacables.</small>';
        } else {
            debilidades.forEach(d => {
                const color = typeColors[d.name] || '#777';
                divWeak.innerHTML += `<span class="type-badge" style="background:${color}; font-size:0.8rem;">${d.name}</span>`;
            });
        }

        // ---------------------------------------------------------
        // 8. CADENA EVOLUTIVA (Con Requisitos: Nivel, Piedra...)
        // ---------------------------------------------------------
        const evoUrl = sp.evolution_chain.url;
        const evoRes = await fetch(evoUrl);
        const evoData = await evoRes.json();
        
        const evoContainer = document.getElementById('evolution-container');
        evoContainer.innerHTML = ''; // Limpiar "Cargando..."

        let current = evoData.chain;
        let chain = [];

        // --- Helper para traducir requisitos ---
        function obtenerRequisito(detalles) {
            if (!detalles || detalles.length === 0) return "";
            const d = detalles[0];
            
            if (d.min_level) return `Nvl ${d.min_level}`;
            if (d.item) return d.item.name.replace(/-/g, " "); // Ej: thunder-stone -> thunder stone
            if (d.min_happiness) return "Amistad";
            if (d.trigger.name === "trade") return "Intercambio";
            if (d.known_move) return `Mov: ${d.known_move.name}`;
            if (d.location) return "En zona esp.";
            
            return "?"; 
        }

        // Recorrer el árbol evolutivo (versión lineal simplificada)
        do {
            const speciesId = current.species.url.split('/')[6];
            let requisito = "";
            
            // Si hay detalles de evolución, intentamos traducir el primero
            if (current.evolution_details && current.evolution_details.length > 0) {
                requisito = obtenerRequisito(current.evolution_details);
            }

            chain.push({ 
                name: current.species.name, 
                id: speciesId,
                req: requisito 
            });

            // Pasar al siguiente
            current = current.evolves_to[0]; 
        } while (current && current.hasOwnProperty('species'));

        // Renderizar la cadena
        for (let i = 0; i < chain.length; i++) {
            const miembro = chain[i];
            
            // Si no es el primero, dibujamos la flecha y el requisito
            if (i > 0) {
                evoContainer.innerHTML += `
                    <div class="evo-arrow-container">
                        <span class="evo-req">${miembro.req}</span>
                        <span class="evo-arrow">→</span>
                    </div>
                `;
            }

            // Pedimos la foto de cada miembro de la evolución
            const resMiembro = await fetch(`https://pokeapi.co/api/v2/pokemon/${miembro.id}`);
            const dataMiembro = await resMiembro.json();
            const imgMiembro = dataMiembro.sprites.front_default;
            
            // Ver si es el pokemon actual para resaltarlo
            const esActual = miembro.id == pk.id;

            evoContainer.innerHTML += `
                <div class="evo-item" onclick="window.location.href='detalle.html?id=${miembro.id}'" style="opacity: ${esActual ? 1 : 0.6}">
                    <img src="${imgMiembro}" alt="${miembro.name}">
                    <div><small>${miembro.name}</small></div>
                </div>
            `;
        }

    } catch (error) {
        console.error(error);
        container.innerHTML = `
            <div style="text-align:center; padding: 50px; color: white;">
                <h1>Error al cargar datos</h1>
                <p>Es posible que la API esté lenta o el Pokémon no tenga datos completos.</p>
                <button onclick='window.history.back()' style="padding:10px; cursor:pointer;">Volver</button>
            </div>
        `;
    }
});