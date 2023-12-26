const pokeContainer = document.getElementById("poke-container")

const API = "https://pokeapi.co/api/v2/pokemon/"

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
}

const mainTypes = Object.keys(colors)

// const colors = {
//     normal: "#D8D8D8",
//     fire: "#FFA07A",
//     water: "#ADD8E6",
//     electric: "#FFD700",
//     grass: "#90EE90",
//     ice: "#B0E0E6",
//     fighting: "#FF6347",
//     poison: "#BA55D3",
//     ground: "#F4A460",
//     flying: "#87CEEB",
//     psychic: "#FFB6C1",
//     bug: "#98FB98",
//     rock: "#D2B48C",
//     ghost: "#9370DB",
//     dragon: "#8A2BE2",
//     dark: "#A9A9A9",
//     steel: "#708090",
//     fairy: "#FFC0CB",
// }

// const colors = {
//     normal: "#A8A77A",
//     fire: "#EE8130",
//     water: "#6390F0",
//     electric: "#F7D02C",
//     grass: "#7AC74C",
//     ice: "#96D9D6",
//     fighting: "#C22E28",
//     poison: "#A33EA1",
//     ground: "#E2BF65",
//     flying: "#A98FF3",
//     psychic: "#F95587",
//     bug: "#A6B91A",
//     rock: "#B6A136",
//     ghost: "#735797",
//     dragon: "#6F35FC",
//     dark: "#705746",
//     steel: "#B7B7CE",
//     fairy: "#D685AD",
// }

// const colors = {
//     normal: "#BDBDBD",
//     fire: "#FFAC5D",
//     water: "#73BFFF",
//     electric: "#FFEE8C",
//     grass: "#9ACD8E",
//     ice: "#B2EBF2",
//     fighting: "#FF8D82",
//     poison: "#D58DD5",
//     ground: "#D4B483",
//     flying: "#C7E7FF",
//     psychic: "#FFC8DD",
//     bug: "#C6D16E",
//     rock: "#D8C287",
//     ghost: "#AFAFCB",
//     dragon: "#9A75FF",
//     dark: "#A09E9E",
//     steel: "#B2B2C8",
//     fairy: "#FFC6E5",
// }

const pokeCount = 150

// Function to fetch the pokemons
const fetchPokemon = async () => {
    for (let i = 1; i <= pokeCount; i++) {
        await getPokemon(i)
    }
}

// Function to get the pkemons
async function getPokemon(id) {
    API_URL = API + id
    const res = await fetch(API_URL)
    const data = await res.json()
    createPokemon(data)
}

// Function to create the pokemon element and add it to the pokemons container
function createPokemon(poke) {
    const pokemonEl = document.createElement("div")
    pokemonEl.classList.add("pokemon")

    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    const id = poke.id.toString().padStart(3, "0")
    const pokeTypes = poke.types.map(type => type.type.name)
    const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
    const color = colors[type]

    pokemonInnerHTML = `
    <div class="img-container">
        <img src="${poke.sprites.front_default}" alt="${poke.name}" />
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `
    pokemonEl.style.backgroundColor = color
    pokemonEl.innerHTML = pokemonInnerHTML
    pokeContainer.appendChild(pokemonEl)
}

fetchPokemon()
