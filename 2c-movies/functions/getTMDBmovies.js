export async function getTMDBmovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&limit=3&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const jsonData = await response.json();

  const finalData = [];
  jsonData.results.forEach((film) => {
    finalData.push({
      title: film.title,
      release_date: film.release_date,
      poster_path: film.poster_path,
      vote_average: film.vote_average,
    });
  });
  return finalData;
}
getTMDBmovies();
