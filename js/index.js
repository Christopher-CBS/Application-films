const form = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const result = document.getElementById('result');

let search = "start";
let movie = [];

const fetchMovies = async () => {
    movies = await fetch (
        `https://api.themoviedb.org/3/search/movie?api_key=11be2f9caeae986e343ef2ec4bdb1f44&query=${search}`
        ).then ((res) => res.json());
    console.log(movies);
};

const moviesDisplay = async () => {
    await fetchMovies ();

    movies.results.length = 12;
    result.innerHTML = movies.results
        .map(
        (movie) => 
        `<li>
        <h2>${movie.original_title}</h2>
        <img class="card-content">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
            <div class="infos">
                <p>${movie.overview}</p>
                <p>Popularité : ${movie.Popularity} ⭐️ </p>
            </div>
        </div>
        </li>
    `
    )
    .join("");
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    search = searchInput.value;
    moviesDisplay();
});