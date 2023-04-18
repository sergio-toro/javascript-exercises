export { item };
import.meta.env.VITE_API_KEY;

export default function getMovieTemplate(movie) {
  const movieTemplate = `
<div class="movie">
    <img 
      class="movie-poster"
      src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" 
      alt="${movie.title}"
    />
    <h2>${movie.title}</h2>
    <span>${movie.release_date.slice(0, 4)}</span>
    <span>${movie.vote_average}</span>
</div>
`;
  return movieTemplate;
}

const item = {
  title: "The Super Mario Bros. Movie",
  release_date: "2023-04-05",
  poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
  vote_average: 7.6,
};
getMovieTemplate(item);
