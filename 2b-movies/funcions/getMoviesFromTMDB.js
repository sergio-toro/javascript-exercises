// import fetch from "node-fetch-polyfill";

export default async function getMoviesFromTMDB() {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&limit=3&api_key="
  );
  const jsonData = await response.json();

  const finalData = [];
  jsonData.results.forEach((movie) => {
    finalData.push({
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
    });
  });
  console.log(finalData);

  //   const finalData = []
  //   for (let i = 0; i < jsonData.results.length; i++) {
  //       const movie = jsonData.results[i]
  //       finalData.push({
  //         title: movie.title,
  //         release_date: movie.release_date,
  //         poster_path: movie.poster_path,
  //         vote_average: movie.vote_average,
  //       })
  //   }
  //   console.log(finalData)

  //   const finalData = jsonData.results.map(function (movie) {
  //     return {
  //       title: movie.title,
  //       release_date: movie.release_date,
  //       poster_path: movie.poster_path,
  //       vote_average: movie.vote_average,
  //     };
  //   });
  //   console.log(finalData)

  //     const finalData = jsonData.results.map((movie) => ({
  //         title: movie.title,
  //         release_date: movie.release_date,
  //         poster_path: movie.poster_path,
  //         vote_average: movie.vote_average,
  //     }));

  //     const finalData = jsonData.results.map((movie) => {
  //       return {
  //         title: movie.title,
  //         release_date: movie.release_date,
  //         poster_path: movie.poster_path,
  //         vote_average: movie.vote_average,
  //       };
  //     });
}

async function main() {
  console.log(await getMoviesFromTMDB());
}

main();
