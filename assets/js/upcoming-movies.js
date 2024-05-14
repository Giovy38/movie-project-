const apiKey = "6ef8368bc9a67ea426a6764f80dd7cfd";
const upcomingContainer = document.getElementById("upcoming-container");
const upcomingLoader = document.getElementById("upcoming-loader");

// select the current language at the page load
window.addEventListener("DOMContentLoaded", () => {
  let selectedLanguage = localStorage.getItem("language");
  if (selectedLanguage === null) {
    localStorage.setItem("language", "en");
    selectedLanguage = localStorage.getItem("language");
  }
  const language = document.querySelectorAll(".lang-icon");
  const en = document.getElementById("english-lan");
  const it = document.getElementById("italian-lan");
  const fr = document.getElementById("francais-lan");

  language.forEach((lan) => lan.classList.remove("current-lang"));
  language.forEach((lan) => lan.classList.add("no-current"));

  switch (selectedLanguage) {
    case "en":
      en.classList.remove("no-current");
      en.classList.add("current-lang");
      break;
    case "it":
      it.classList.remove("no-current");
      it.classList.add("current-lang");
      break;
    case "fr":
      fr.classList.remove("no-current");
      fr.classList.add("current-lang");
      break;
    default:
      en.classList.remove("no-current");
      en.classList.add("current-lang");
  }
});

// load all movies

window.addEventListener("DOMContentLoaded", upcomingMoviesLoad);

async function upcomingMoviesLoad() {
  const lang = localStorage.getItem("language");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWY4MzY4YmM5YTY3ZWE0MjZhNjc2NGY4MGRkN2NmZCIsInN1YiI6IjY2M2RmMGE0Yzk3YWIwMDQ1YzUxMjg5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H8TmTPplzL0OAfubMKw4zINbWH3VK4Tn4fC5WXRcV9c",
    },
  };

  try {
    upcomingLoader.style.display = "block";
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=${lang}-${lang.toUpperCase()}&page=1`,
      options
    );
    const data = await res.json();

    const upcomingMovies = data.results;

    upcomingMovies.forEach((movie) => {
      //   create all card element
      const singleMovieCard = document.createElement("div");
      const border = document.createElement("div");
      const imgLink = document.createElement("a");
      const imgDiv = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h2");
      const ratingContainer = document.createElement("div");
      const star = document.createElement("i");
      const ratingValue = document.createElement("p");
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
      ratingContainer.className = "rating-container";
      star.className = "bx bxs-star";
      readMoreLink.href = "/assets/page/movie-details.html";
      (readMoreBtn.className = "read-more-btn"),
        (readMoreText.innerHTML = "Read More");
      readMoreIcon.className = "bx bx-right-arrow-alt";

      // assign value to all element

      title.innerHTML = `${movie.title}`;
      ratingValue.innerHTML = `${movie.vote_average.toFixed(1)}/10`;
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
      //   rating div
      ratingContainer.appendChild(star);
      ratingContainer.appendChild(ratingValue);

      //   border

      border.appendChild(imgLink);
      border.appendChild(title);
      border.appendChild(ratingContainer);
      border.appendChild(readMoreLink);

      // single movie card

      singleMovieCard.appendChild(border);

      // upcoming container

      upcomingContainer.appendChild(singleMovieCard);

      // add event on imgDiv and read more
      imgDiv.addEventListener("click", movieDetails);
      readMoreLink.addEventListener("click", movieDetails);

      function movieDetails(e) {
        localStorage.setItem("movieId", movie.id);
      }
    });
  } catch (err) {
    alert(err);
  } finally {
    upcomingLoader.style.display = "none";
  }
}

// ------- LANGUAGE SELECTION -------

const language = document.querySelectorAll(".lang-icon");

language.forEach((lan) => {
  lan.addEventListener("click", changeLanguage);

  function changeLanguage(e) {
    language.forEach((lan) => {
      lan.classList.remove("current-lang");
      lan.classList.add("no-current");
    });
    e.target.classList.add("current-lang");
    e.target.classList.remove("no-current");

    const selectedLanguage = e.target.id;
    switch (selectedLanguage) {
      case "english-lan":
        localStorage.setItem("language", "en");
        break;
      case "italian-lan":
        localStorage.setItem("language", "it");
        break;
      case "francais-lan":
        localStorage.setItem("language", "fr");
        break;
      default:
        localStorage.setItem("language", "en");
    }

    const lastUpcomingMovies = Array.from(upcomingContainer.childNodes);
    lastUpcomingMovies.forEach((movie) => upcomingContainer.removeChild(movie));
    upcomingMoviesLoad();
  }
});
