export { getMovieTemplate };

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
const result = getMovieTemplate(movie);
console.log(result);
