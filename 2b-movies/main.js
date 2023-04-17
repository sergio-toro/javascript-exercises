import { getMovieTemplate } from "./funcions/getMovieTemplate";
import getMoviesFromTMDB from "./funcions/getMoviesFromTMDB";
import { movie } from "./funcions/getMovieTemplate";
import "./style.css";

async function main() {
  const movieList$ = document.querySelector("#app");
  const movies = await getMoviesFromTMDB();

  let allMovies = "";
  movies.forEach((movie) => {
    const template = getMovieTemplate(movie);
    // allMovies = allMovies + template
    allMovies += template;

    // MAL-> allMovies = template += allMovies;
  });
  movieList$.innerHTML = `
    <h2>Movies</h2>
    <div id="movies-container">
    ${allMovies}
    </div>
   `;
}
main();
