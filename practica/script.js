let todosLosPokemon = [];
let listaFiltrada = [];
let paginaActual = 0;
const porPagina = 20;

// ACTUALIZADO: Todas las generaciones hasta la 9 (Paldea)
const regiones = {
    all: { min: 1, max: 1025, theme: '' }, // Nacional por defecto
    kanto: { min: 1, max: 151, theme: '' },
    johto: { min: 152, max: 251, theme: 'theme-johto' },
    hoenn: { min: 252, max: 386, theme: 'theme-hoenn' },
    sinnoh: { min: 387, max: 493, theme: 'theme-sinnoh' },
    unova: { min: 494, max: 649, theme: 'theme-unova' },
    kalos: { min: 650, max: 721, theme: 'theme-kalos' }, // Gen 6
    alola: { min: 722, max: 809, theme: 'theme-alola' }, // Gen 7
    galar: { min: 810, max: 905, theme: 'theme-galar' }, // Gen 8
    paldea: { min: 906, max: 1025, theme: 'theme-paldea' } // Gen 9
};

const grid = document.getElementById('grid-pokemon');
const input = document.getElementById('pokeInput');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const spanPagina = document.getElementById('paginaActual');
const regionSelect = document.getElementById('regionSelect');
const container = document.getElementById('pokedexContainer');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Pedimos hasta el 1025 (Final de la Gen 9 actual)
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
        const data = await res.json();
        todosLosPokemon = data.results;
        
        // CAMBIO: Iniciamos con 'all' (Nacional)
        filtrarPorRegion('all');
        
    } catch (error) { console.error(error); }
});

regionSelect.addEventListener('change', (e) => {
    filtrarPorRegion(e.target.value);
});

function filtrarPorRegion(regionKey) {
    const rango = regiones[regionKey];
    
    // Cambiar tema si existe, si no, quita las clases extra
    container.className = 'main-container ' + (rango.theme || '');

    // Filtrar por ID
    listaFiltrada = todosLosPokemon.filter(pk => {
        const urlParts = pk.url.split('/');
        const id = parseInt(urlParts[6]); 
        return id >= rango.min && id <= rango.max;
    });

    // Resetear vista
    input.value = '';
    paginaActual = 0;
    renderizarPagina(0);
}

// El buscador ahora respeta la región seleccionada (o la nacional)
input.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    const regionKey = regionSelect.value;
    const rango = regiones[regionKey];

    listaFiltrada = todosLosPokemon.filter(pk => {
        const urlParts = pk.url.split('/');
        const id = parseInt(urlParts[6]);
        // Verificar rango y nombre
        const enRango = id >= rango.min && id <= rango.max;
        const nombreCoincide = pk.name.includes(termino);
        return enRango && nombreCoincide;
    });

    paginaActual = 0;
    renderizarPagina(0);
});

async function renderizarPagina(pagina) {
    grid.innerHTML = '';
    const inicio = pagina * porPagina;
    const fin = inicio + porPagina;
    const pokemonsParaMostrar = listaFiltrada.slice(inicio, fin);

    spanPagina.innerText = pagina + 1;
    btnPrev.disabled = pagina === 0;
    btnNext.disabled = fin >= listaFiltrada.length;

    if(pokemonsParaMostrar.length === 0) {
        grid.innerHTML = '<p>No se encontraron Pokémon.</p>';
        return;
    }

    const promesas = pokemonsParaMostrar.map(async (pokemon) => {
        // Optimización: Si ya tenemos la URL, no hace falta fetch para lista simple
        // Pero para la foto oficial necesitamos fetch o construir la URL manualmente.
        // Hacemos fetch para asegurar datos correctos.
        const res = await fetch(pokemon.url);
        const detalles = await res.json();
        return crearTarjetaHTML(detalles);
    });

    const tarjetas = await Promise.all(promesas);
    tarjetas.forEach(t => grid.appendChild(t));
}

function crearTarjetaHTML(detalles) {
    const card = document.createElement('div');
    card.classList.add('poke-card');
    
    // Obtener imagen (prioridad: oficial > default > null)
    const img = detalles.sprites.other['official-artwork'].front_default || detalles.sprites.front_default || 'https://via.placeholder.com/150';

    card.innerHTML = `
        <img src="${img}" loading="lazy" alt="${detalles.name}">
        <h3>${detalles.name}</h3>
        <small>#${detalles.id}</small>
        <div style="margin-top:10px;">
             ${detalles.types.map(t => `<span class="type-badge" style="background:#555; font-size:0.7rem;">${t.type.name}</span>`).join('')}
        </div>
    `;

    card.addEventListener('click', () => {
        window.location.href = `detalle.html?id=${detalles.id}`;
    });

    return card;
}

btnNext.addEventListener('click', () => { paginaActual++; renderizarPagina(paginaActual); });
btnPrev.addEventListener('click', () => { if(paginaActual > 0) paginaActual--; renderizarPagina(paginaActual); });