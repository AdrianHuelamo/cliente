let todosLosPokemon = [];
let listaFiltrada = [];
let paginaActual = 0;
const porPagina = 20;

// Configuración de Regiones
const regiones = {
    all: { min: 1, max: 1025, theme: '' },
    kanto: { min: 1, max: 151, theme: '' },
    johto: { min: 152, max: 251, theme: 'theme-johto' },
    hoenn: { min: 252, max: 386, theme: 'theme-hoenn' },
    sinnoh: { min: 387, max: 493, theme: 'theme-sinnoh' },
    unova: { min: 494, max: 649, theme: 'theme-unova' },
    kalos: { min: 650, max: 721, theme: 'theme-kalos' },
    alola: { min: 722, max: 809, theme: 'theme-alola' },
    galar: { min: 810, max: 905, theme: 'theme-galar' },
    paldea: { min: 906, max: 1025, theme: 'theme-paldea' }
};

const grid = document.getElementById('grid-pokemon');
const input = document.getElementById('pokeInput');
const btnNext = document.getElementById('btnNext');
const btnPrev = document.getElementById('btnPrev');
const spanPagina = document.getElementById('paginaActual');
const regionSelect = document.getElementById('regionSelect');
const container = document.getElementById('pokedexContainer');

// 1. Carga Inicial
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Pedimos la lista completa de una vez
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
        const data = await res.json();
        todosLosPokemon = data.results;
        
        // Iniciamos en modo Nacional
        filtrarPorRegion('all');
        
    } catch (error) {
        console.error(error);
        grid.innerHTML = '<p class="error">Error al conectar con la PokeAPI.</p>';
    }
});

// 2. Cambio de Región
regionSelect.addEventListener('change', (e) => {
    filtrarPorRegion(e.target.value);
});

function filtrarPorRegion(regionKey) {
    const rango = regiones[regionKey];
    
    // Cambiar clases CSS para el color
    container.className = 'main-container ' + (rango.theme || '');

    // Filtrar array por ID
    listaFiltrada = todosLosPokemon.filter(pk => {
        const id = obtenerIdDesdeUrl(pk.url);
        return id >= rango.min && id <= rango.max;
    });

    input.value = '';
    paginaActual = 0;
    renderizarPagina(0);
}

// 3. Buscador
input.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    const regionKey = regionSelect.value;
    const rango = regiones[regionKey];

    listaFiltrada = todosLosPokemon.filter(pk => {
        const id = obtenerIdDesdeUrl(pk.url);
        const enRango = id >= rango.min && id <= rango.max;
        const coincideNombre = pk.name.includes(termino);
        // También permitimos buscar por número
        const coincideId = id.toString() === termino;
        
        return enRango && (coincideNombre || coincideId);
    });

    paginaActual = 0;
    renderizarPagina(0);
});

// 4. Renderizado
async function renderizarPagina(pagina) {
    grid.innerHTML = '';
    const inicio = pagina * porPagina;
    const fin = inicio + porPagina;
    const items = listaFiltrada.slice(inicio, fin);

    spanPagina.innerText = pagina + 1;
    btnPrev.disabled = pagina === 0;
    btnNext.disabled = fin >= listaFiltrada.length;

    if (items.length === 0) {
        grid.innerHTML = '<div class="loading-msg">No se encontraron Pokémon.</div>';
        return;
    }

    // Renderizamos las tarjetas
    // Nota: Usamos la imagen oficial artwork directamente por ID para evitar fetchs masivos innecesarios en la lista
    items.forEach(pokemon => {
        const id = obtenerIdDesdeUrl(pokemon.url);
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
        const card = document.createElement('div');
        card.className = 'poke-card';
        card.innerHTML = `
            <img src="${img}" loading="lazy" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <small>#${id}</small>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = `detalle.html?id=${id}`;
        });
        
        grid.appendChild(card);
    });
}

// Utilidad
function obtenerIdDesdeUrl(url) {
    // La url es tipo "https://.../pokemon/25/"
    const partes = url.split('/');
    return parseInt(partes[6]);
}

// Paginación
btnNext.addEventListener('click', () => { paginaActual++; renderizarPagina(paginaActual); });
btnPrev.addEventListener('click', () => { if (paginaActual > 0) paginaActual--; renderizarPagina(paginaActual); });