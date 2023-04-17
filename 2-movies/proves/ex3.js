import { all } from "core-js/fn/promise";
import fetch from "node-fetch-polyfill";
export { getMoviesFromTMDB };

function getMovieTemplate(item) {
  const movieTemplate = `
    <div class="movie">
    <img 
      class="movie-poster"
      src="https://image.tmdb.org/t/p/w500${item.poster_path}" 
      alt="${item.title}"
    />
    <h2>${item.title}</h2>
    <span>${item.release_date.slice(0, 4)}</span>
    <span>${item.vote_average}</span>
</div>
    `;
  return movieTemplate;
}

const movie = {
  title: "The Super Mario Bros. Movie",
  release_date: "2023-04-05",
  poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  vote_average: 7.6,
};

async function getMoviesFromTMDB() {
  const API_KEY = "";

  const resp = await fetch(`
    https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&limit=3&api_key=${API_KEY}
    `);
  const jsonData = await resp.json();
  //   const finalData = jsonData.results.map((movie) => ({
  //       title: movie.title,
  //       release_date: movie.release_date,
  //       poster_path: movie.poster_path,
  //       vote_average: movie.vote_average,
  //   }));

  //   const finalData = jsonData.results.map((movie) => {
  //     return {
  //       title: movie.title,
  //       release_date: movie.release_date,
  //       poster_path: movie.poster_path,
  //       vote_average: movie.vote_average,
  //     };
  //   });

  // const finalData = jsonData.results.map(function (movie) {
  //   return {
  //     title: movie.title,
  //     release_date: movie.release_date,
  //     poster_path: movie.poster_path,
  //     vote_average: movie.vote_average,
  //   };
  // });

  // const finalData = [];
  // console.log('finalData', finalData.length)
  // console.log('jsonData.results.length', jsonData.results.length)
  // console.log('jsonData.results', jsonData.results[0])
  // for (let i = 0; i < jsonData.results.length; i++) {
  //   let movie = jsonData.results[i];
  //   finalData.push({
  //     title: movie.title,
  //     release_date: movie.release_date,
  //     poster_path: movie.poster_path,
  //     vote_average: movie.vote_average,
  //   });
  // }

  const finalData = [];
  jsonData.results.forEach((movie) => {
    finalData.push({
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    });
  });

  let allMovies = "";
  finalData.forEach((movie) => {
    const template = getMovieTemplate(movie);
    allMovies = allMovies + template;
  });

  console.log(allMovies);

  return finalData;
}

async function main() {
  console.log(await getMoviesFromTMDB());
}

main();
