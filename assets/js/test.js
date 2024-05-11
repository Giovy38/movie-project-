// const btn = document.getElementById("btn");
// const img = document.getElementById("img");

// btn.addEventListener("click", fetchSpells);
// img.addEventListener("click", imgFound);

// HARRY POTTER API

// --------------------------------------------------------------------

// all spells
// https://potterapi-fedeperin.vercel.app/it/spells

// houses
// https://potterapi-fedeperin.vercel.app/it/houses

// characters
// https://potterapi-fedeperin.vercel.app/it/characters

// books
// https://potterapi-fedeperin.vercel.app/it/books

// --------------------------------------------------------------------

// MOVIE API

// API key
// 6ef8368bc9a67ea426a6764f80dd7cfd

// base url
// https://api.themoviedb.org/3

// upcoming movies
// https://api.themoviedb.org/3/movie/upcoming?language=it-IT&page=1

// top rated
// https://api.themoviedb.org/3/movie/top_rated?language=it-IT&page=1

// now playing
// https://api.themoviedb.org/3/movie/now_playing?language=it-IT&page=1

// popular
// https://api.themoviedb.org/3/movie/popular?language=it-IT&page=1

// movie details
// `https://api.themoviedb.org/3/movie/${movieID}?language=it-IT&page=1`

// searchURL
// base url + '/search/movie?' + API_KEY + '&query=' + searchTerm

async function fetchSpells() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWY4MzY4YmM5YTY3ZWE0MjZhNjc2NGY4MGRkN2NmZCIsInN1YiI6IjY2M2RmMGE0Yzk3YWIwMDQ1YzUxMjg5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H8TmTPplzL0OAfubMKw4zINbWH3VK4Tn4fC5WXRcV9c",
    },
  };

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/940721?language=it-IT&page=1`,
      options
    );
    const data = await res.json();
    console.log(data);

    const imgback = "https://image.tmdb.org/t/p/w500";

    img.src = `${imgback}${data.results[0].poster_path}`;
  } catch {
    console.log("error");
  }
}
