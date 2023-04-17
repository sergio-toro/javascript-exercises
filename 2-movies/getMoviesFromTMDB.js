export default async function getMoviesFromTMDB() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const resp = await fetch(`
      https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&limit=3&api_key=
      `);
  const jsonData = await resp.json();
  const finalData = [];
  jsonData.results.forEach((movie) => {
    finalData.push({
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    });
  });

  return finalData;
}
