const subtitle = document.getElementById("search-subtitle");
const loader = document.getElementById("search-movie-loader");
const searchBtn = document.getElementById("search-btn");
const searchContent = document.getElementById("search-input");
const searchMoviesContainer = document.getElementById(
  "search-results-container"
);
const noResultFoundText = document.getElementById("no-result-found-text");

// search when load page

window.addEventListener("popstate", () => {
  if (searchContent.value.trim() !== "") {
    searchMovie();
  }
});

window.addEventListener("pageshow", () => {
  if (searchContent.value.trim() !== "") {
    searchMovie();
  }
});

searchBtn.addEventListener("click", searchMovie);

searchContent.addEventListener("input", () => {
  searchMovieDebounced();
});

// search when i write
function debounce(searchMovie, timeout) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchMovie();
    }, timeout);
  };
}

const searchMovieDebounced = debounce(searchMovie, 2000);

searchContent.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchMovie();
  }
});

async function searchMovie() {
  if (searchContent.value.trim() !== "") {
    // remove last search movies
    const lastSearch = Array.from(searchMoviesContainer.childNodes);
    lastSearch.forEach((lmovie) => searchMoviesContainer.removeChild(lmovie));

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWY4MzY4YmM5YTY3ZWE0MjZhNjc2NGY4MGRkN2NmZCIsInN1YiI6IjY2M2RmMGE0Yzk3YWIwMDQ1YzUxMjg5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H8TmTPplzL0OAfubMKw4zINbWH3VK4Tn4fC5WXRcV9c",
      },
    };
    const baseUrl = "https://api.themoviedb.org/3";
    const apiKey = "6ef8368bc9a67ea426a6764f80dd7cfd";

    try {
      loader.style.display = "block";
      noResultFoundText.style.display = "none";

      const res = await fetch(
        `${baseUrl}/search/movie?${apiKey}&query=${searchContent.value}`,
        options
      );
      const data = await res.json();

      const searchedMovies = data.results;

      if (searchedMovies.length > 0) {
        noResultFoundText.style.display = "none";
      } else {
        noResultFoundText.style.display = "block";
      }

      searchedMovies.forEach((movie) => {
        //   create all card element
        const singleMovieCard = document.createElement("div");
        const border = document.createElement("div");
        const imgLink = document.createElement("a");
        const imgDiv = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const readMoreLink = document.createElement("a");
        const readMoreBtn = document.createElement("div");
        const readMoreText = document.createElement("p");
        const readMoreIcon = document.createElement("i");
        const imgbackUrl = "https://image.tmdb.org/t/p/w500";

        //   assign class to all element
        singleMovieCard.className = "single-movie-card";
        border.className = "border";
        imgLink.href = "/assets/page/movie-details.html";
        imgDiv.className = "img-div-border";
        img.className = "single-card-img";
        title.className = "single-card-title";
        readMoreLink.href = "/assets/page/movie-details.html";
        (readMoreBtn.className = "read-more-btn"),
          (readMoreText.innerHTML = "Read More");
        readMoreIcon.className = "bx bx-right-arrow-alt";

        // assign value to all element

        title.innerHTML = `${movie.original_title}`;
        if (movie.poster_path === null) {
          img.src = "/assets/img/imgnotfound.jpg";
        } else {
          img.src = `${imgbackUrl}${movie.poster_path}`;
        }

        // append all element

        // append img
        imgDiv.appendChild(img);
        imgLink.appendChild(imgDiv);

        //  read more div
        readMoreBtn.appendChild(readMoreText);
        readMoreBtn.appendChild(readMoreIcon);
        readMoreLink.appendChild(readMoreBtn);

        //   border

        border.appendChild(imgLink);
        border.appendChild(title);
        border.appendChild(readMoreLink);

        // single movie card

        singleMovieCard.appendChild(border);

        // upcoming container
        searchMoviesContainer.appendChild(singleMovieCard);

        // add event on imgDiv and read more
        imgDiv.addEventListener("click", movieDetails);
        readMoreLink.addEventListener("click", movieDetails);

        function movieDetails() {
          localStorage.setItem("movieId", movie.id);
        }
      });
    } catch {
    } finally {
      loader.style.display = "none";
      subtitle.style.display = "none";
    }
  } else {
    searchContent.placeholder = "MUST WRITE SOMETHING TO SEARCH";
  }
}
