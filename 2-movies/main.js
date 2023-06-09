import "./style.css";
import getMovieTemplate from "./getMovieTemplate";
import getMoviesFromTMDB from "./getMoviesFromTMDB";
// import { movie } from "./constants";

async function main() {
  const movieList$ = document.querySelector("#app");

  const movies = await getMoviesFromTMDB();

  let allMovies = "";
  movies.forEach((movie) => {
    const template = getMovieTemplate(movie);
    allMovies = allMovies + template;
  });

  movieList$.innerHTML = `
    <h2>Movies</h2>
    <div id="movies-container">
      ${allMovies}
    </div>
   `;
}
console.log("My API_KEY is", import.meta.env.VITE_API_KEY);
console.log("Other var", import.meta.env.VITE_HELLO);

main();
