import "./style.css";
import getMovieTemplate from "./functions/getMovieTemplate";
import { getTMDBmovies } from "./functions/getTMDBmovies";

async function main() {
  const movieList$ = document.querySelector("#app");
  const finalMovies = await getTMDBmovies();
  let allMovies = "";
  finalMovies.forEach((movie) => {
    const template = getMovieTemplate(movie);
    allMovies += template;
  });
  movieList$.innerHTML = `
    <h2>Movies</h2>
    <div id="movies-container">
     ${allMovies}
    </div>
   `;
}

main();
