const main = document.querySelector(".main")
const searchForm = document.getElementById("form")
const searchEl = searchForm.querySelector(".search")

const apiKey = '2b8123ab79bbd5aae0f99dd8c2776161'
const DISCOVER_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="`
const IMG_API = "https://image.tmdb.org/t/p/w1280"


searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchQuery = searchEl.value

    if (searchQuery && searchQuery !== " ") {
        const SEARCH_URL = SEARCH_API + searchQuery
        searchMovies(SEARCH_URL)
        searchEl.value = ""
    }
    else {
        window.location.reload()
    }

    //Seraching the movies
    searchMovies(SEARCH_URL)
})

document.addEventListener("DOMContentLoaded", () => {
    getMovies()
})


const getMovies = async () => {
    const response = await fetch(DISCOVER_URL)
    const data = await response.json()

    // Updating the page with results
    updatePage(data.results)
}


const searchMovies = async (SEARCH_URL) => {
    const response = await fetch(SEARCH_URL)
    const data = await response.json()

    // Updating the page with results
    updatePage(data.results)
}


const updatePage = (results) => {
    main.innerHTML = ""

    results.forEach(result => {
        //Creating the movie
        const movie = document.createElement("div")
        movie.classList.add("movie")

        //Creating the image
        const img = document.createElement("img")
        img.src = IMG_API + result.poster_path
        img.alt = result.title

        //Creating the movie info
        const movie_info = document.createElement("div")
        movie_info.classList.add("movie-info")
        const title = document.createElement("h3")
        title.textContent = result.title
        const rating = document.createElement("span")
        rating.classList.add(getClassByRate(result.vote_average))  //geting the color class of vote/rating
        rating.textContent = result.vote_average
        movie_info.appendChild(title)
        movie_info.appendChild(rating)

        //Creating the overview
        const overview = document.createElement("div")
        overview.classList.add("overview")
        const h3 = document.createElement("h3")
        h3.textContent = "Overview"
        overview.appendChild(h3)
        const overviewText = document.createTextNode(result.overview)
        overview.appendChild(overviewText)

        //Appending the image, movie info and overview to the movie
        movie.appendChild(img)
        movie.appendChild(movie_info)
        movie.appendChild(overview)

        //Appending the movie to the main
        main.appendChild(movie)
    })
}


function getClassByRate(vote) {
    if (vote >= 8) {
        return "green"
    }
    else if (vote >= 5) {
        return "orange"
    }
    else {
        return "red"
    }
}