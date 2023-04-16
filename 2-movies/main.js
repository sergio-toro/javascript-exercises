import './style.css'

async function main() {
  const movieList$ = document.querySelector('#app');

  movieList$.innerHTML = `
    <h2>Movies</h2>
    <div id="movies-container"></div>
  `;
}

main();
