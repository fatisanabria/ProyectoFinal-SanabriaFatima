const apiKey = '4b7cf8f0e53930ebd86c4576904f2718';
const movieTitle = 'Uncharted';
const movieReleaseDate = '2022'; // only consider movies released in 2022

// API //

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`)
    .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    const results = data.results;
    const unchartedMovie = results.find(movie => {
      return movie.title === movieTitle && movie.release_date.startsWith(movieReleaseDate);
    });
    if (unchartedMovie) {
      console.log(unchartedMovie);
    } else {
      console.log(`Could not find ${movieTitle} (${movieReleaseDate}) in the search results.`);
    }
  })
  .catch(error => {
    console.error(error);
  });



////SECCIONES PELICULAS/////
let currentPage = 1;

// ESTRENOS //

async function showMoviesEstrenos() {
    const movieContainerEstrenos = document.getElementById('movie-container-estrenos');
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${currentPage}`);
  
    if (!response.ok) {
        throw new Error('Error: ' + response.status);
    }
    const data = await response.json();
    for (let i = 0; i < 6; i++) {
        if (data.results[i]) {
            const movie = data.results[i];
            const movieButton = document.createElement('button');
            const movieImg = document.createElement('img');
            movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            movieButton.appendChild(movieImg);
            movieButton.classList.add('imagenesPeliculas'); // agregamos la clase "imagenesPeliculas"
            movieButton.id = movie.id;
            movieContainerEstrenos.appendChild(movieButton);
            console.log(movie)
            movieButton.addEventListener('click', () => {
                abrirModal(movie);
            });
        }
    }

      // if there are no more movies to show, disable the button
    if (data.results.length <= 6) {
        const loadMoreButtonEstrenos = document.getElementById('load-more-button-estrenos');
        loadMoreButtonEstrenos.disabled = true;
    }

    } catch (error) {
        console.error(error);
    }
}
function loadMoreMoviesEstrenos() {
    currentPage++;
    showMoviesEstrenos();
}
showMoviesEstrenos();
const loadMoreButtonEstrenos = document.getElementById('load-more-button-estrenos');
loadMoreButtonEstrenos.addEventListener('click', loadMoreMoviesEstrenos);

//   ACCION   //

async function showMoviesAccion() {
    const movieContainerAccion = document.getElementById('movie-container-accion');

    try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${currentPage}&with_genres=28`);
    if (!response.ok) {
        throw new Error('Error: ' + response.status);
    }

    const data = await response.json();

    for (let i = 0; i < 6; i++) {
        if (data.results[i]) {
            const movie = data.results[i];
            const movieButton = document.createElement('button');
            const movieImg = document.createElement('img');
            movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            movieButton.appendChild(movieImg);
            movieButton.classList.add('imagenesPeliculas');
            movieContainerAccion.appendChild(movieButton);
            movieButton.addEventListener('click', () => {
            abrirModal(movie);
            });
        }
}

    if (data.results.length <= 6) {
        const loadMoreButtonAccion = document.getElementById('load-more-button-accion');
        loadMoreButtonAccion.disabled = true;
    }

    } catch (error) {
        console.error(error);
    }
}
    
    function loadMoreMoviesAccion() {
    currentPage++;
    showMoviesAccion();
}

showMoviesAccion();

  const loadMoreButtonAccion = document.getElementById('load-more-button-accion');
  loadMoreButtonAccion.addEventListener('click', loadMoreMoviesAccion);

//   TERROR   // 

async function showMoviesTerror() {
    const movieContainerTerror = document.getElementById('movie-container-terror');
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${currentPage}&with_genres=27`);
  
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
  
      const data = await response.json();
  
      for (let i = 0; i < 6; i++) {
        if (data.results[i]) {
          const movie = data.results[i];
          const movieButton = document.createElement('button');
          const movieImg = document.createElement('img');
          movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          movieButton.appendChild(movieImg);
          movieButton.classList.add('imagenesPeliculas');
          movieContainerTerror.appendChild(movieButton);
          movieButton.addEventListener('click', () => {
            abrirModal(movie);
          });
        }
      }
  
      if (data.results.length <= 6) {
        const loadMoreButtonTerror = document.getElementById('load-more-button-terror');
        loadMoreButtonTerror.disabled = true;
      }
  
    } catch (error) {
      console.error(error);
    }
  }
  
  function loadMoreMoviesTerror() {
    currentPage++;
    showMoviesTerror();
  }
  
  showMoviesTerror();
  
  const loadMoreButtonTerror = document.getElementById('load-more-button-terror');
  loadMoreButtonTerror.addEventListener('click', loadMoreMoviesTerror);

//   AVENTURA   //

async function showMoviesAventura() {
    const movieContainerAventura = document.getElementById('movie-container-aventura');

    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${currentPage}&with_genres=12`);
  
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
  
      const data = await response.json();
  
      for (let i = 0; i < 6; i++) {
        if (data.results[i]) {
          const movie = data.results[i];
          const movieButton = document.createElement('button');
          const movieImg = document.createElement('img');
          movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          movieButton.appendChild(movieImg);
          movieButton.classList.add('imagenesPeliculas');
          movieContainerAventura.appendChild(movieButton);
          movieButton.addEventListener('click', () => {
            abrirModal(movie);
          });
        }
      }
  
      if (data.results.length <= 6) {
        const loadMoreButtonAventura = document.getElementById('load-more-button-aventura');
        loadMoreButtonAventura.disabled = true;
      }
  
    } catch (error) {
      console.error(error);
    }
  }
    
  function loadMoreMoviesAventura() {
    currentPage++;
    showMoviesAventura();
  }
  
  showMoviesAventura();
  
  const loadMoreButtonAventura = document.getElementById('load-more-button-aventura');
  loadMoreButtonAventura.addEventListener('click', loadMoreMoviesAventura);


//   DOCUMENTAL 


async function showMoviesDocumental() {
    const movieContainerDocumental = document.getElementById('movie-container-documental');
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${currentPage}&with_genres=99`);
      
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
      
        const data = await response.json();
      
        for (let i = 0; i < 6; i++) {
          if (data.results[i]) {
            const movie = data.results[i];
            const movieButton = document.createElement('button');
            const movieImg = document.createElement('img');
            movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            movieButton.appendChild(movieImg);
            movieButton.classList.add('imagenesPeliculas');
            movieContainerDocumental.appendChild(movieButton);
            movieButton.addEventListener('click', () => {
                abrirModal(movie);
              });
            }
          }
      
      
        if (data.results.length <= 6) {
          const loadMoreButtonDocumental = document.getElementById('load-more-button-documental');
          loadMoreButtonDocumental.disabled = true;
        }
      
      } catch (error) {
        console.error(error);
      }
    }

    function loadMoreMoviesDocumental() {
    currentPage++;
    showMoviesDocumental();
    }
    
    showMoviesDocumental();
    
    const loadMoreButtonDocumental = document.getElementById('load-more-button-documental');
    loadMoreButtonDocumental.addEventListener('click', loadMoreMoviesDocumental);



// SERIES //

async function showMoviesSerie() {
    const movieContainerSerie = document.getElementById('movie-container-serie');

    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=${currentPage}&with_genres=16`);

      
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
      
        const data = await response.json();
      
        for (let i = 0; i < 6; i++) {
          if (data.results[i]) {
            const movie = data.results[i];
            const movieButton = document.createElement('button');
            const movieImg = document.createElement('img');
            movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            movieButton.appendChild(movieImg);
            movieButton.classList.add('imagenesPeliculas');
            movieContainerSerie.appendChild(movieButton);
            movieButton.addEventListener('click', () => {
              abrirModal(movie);
            });
          }
        }
      
        if (data.results.length <= 6) {
          const loadMoreButtonSerie = document.getElementById('load-more-button-serie');
          loadMoreButtonSerie.disabled = true;
        }
      
      } catch (error) {
        console.error(error);
      }
      
    }

    function loadMoreMoviesSerie() {
        currentPage++;
        showMoviesSerie();
        }

  showMoviesSerie();
  
  const loadMoreButtonSerie = document.getElementById('load-more-button-serie');
  loadMoreButtonSerie.addEventListener('click', loadMoreMoviesSerie);
  
  

// FUNCION ABRIR INFORMACION MODAL //

    async function abrirModal(movie) {
        url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        tituloOriginal = movie.original_title
        titulo = movie.title
        review = movie.vote_average
        año = movie.release_date
        sinopsis = movie.overview
        movieId = movie.id
        console.log(movieId)
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`);
        const detailsData = await detailsResponse.json();
        const genres = detailsData.genres.map(genre => genre.name).join(', ');
        Swal.fire({
            html:
            '<section class="d-flex align-items-center">' +
            '<div>' +
            `<img class="m-5" src=${url} alt="">` +
            '</div>' +
            '<div class="m-5 p-5">' +
            `<h3 class="fs-1 fw-bold">${tituloOriginal}</h3>` +
            `<h5 class="fw-bold">${titulo}</h5>` +
            `<p>Genero: <strong>${genres}</strong></p>` +
            `<p>Sinopsis: <strong><br>${sinopsis}</strong></p>` +
            `<p>Año: <strong>${año}</strong></p>` +
            `<p>Calificacion: <strong>${review}</strong></p>` +
            '</div>' +
            '</section>',
            showCancelButton: true,
            confirmButtonText: 'Ver Trailer',
            cancelButtonText: 'Salir',
            buttonsStyling: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                });
            },
            allowOutsideClick: () => !Swal.isLoading(),
            footer: `<button id="botonFavoritos" type="button" data-pelicula-id="${movieId}" class="btn bg-warning">Agregar a mi lista</button>`,
        });
        generarFavoritos()
    }

    // FAVORITOS //
    
const storedFavoritos = localStorage.getItem('favoritos');
const favoritos = storedFavoritos ? JSON.parse(storedFavoritos) : [];

function generarFavoritos(){
    const botonFavoritos = document.getElementById('botonFavoritos');
    let id = botonFavoritos.dataset.peliculaId;
  
    botonFavoritos.addEventListener('click', async function(){
      const movie = await fetchMovieDetails(id);
  
      const exists = favoritos.find((fav) => fav.id === movie.id);
      if (exists) {
        alert('La película ya está en la lista de favoritos');
        return;
      }
  
      favoritos.push(movie);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
      location.reload();
  
      console.log(favoritos);
    });
  }

async function fetchMovieDetails(id) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
}

async function showMoviesFavoritos() {
    const movieContainerFavoritos = document.getElementById('movie-container-favoritos');
  
    try {
      for (let i = 0; i < favoritos.length; i++) {
        const movie = favoritos[i];
        console.log("peli" , movie.poster_path)
        const movieButton = document.createElement('button');
        const movieImg = document.createElement('img');
        movieImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        movieButton.appendChild(movieImg);
        movieButton.classList.add('imagenesPeliculas');
        movieContainerFavoritos.appendChild(movieButton);
        movieButton.addEventListener('click', () => {
          abrirModal(movie);
        });
      }
  
    } catch (error) {
      console.error(error);
    }
  
  }
  
  showMoviesFavoritos();
  
