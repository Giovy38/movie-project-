window.addEventListener("DOMContentLoaded", filmDetailsShow);

async function filmDetailsShow() {
  const lang = localStorage.getItem("language");
  const loader = document.getElementById("movie-details-loader");
  const img = document.getElementById("film-img");
  const title = document.getElementById("title");
  const duration = document.getElementById("duration");
  const genres = document.getElementById("genres");
  const date = document.getElementById("date");
  const description = document.getElementById("description");
  const ratingStarContainer = document.getElementById("rating-container");
  const imgback = "https://image.tmdb.org/t/p/w500";
  const prodCompanyContainer = document.getElementById(
    "production-companies-container"
  );
  const singlecompanyContainer = document.getElementById(
    "single-company-container"
  );

  movieID = window.localStorage.getItem("movieId");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWY4MzY4YmM5YTY3ZWE0MjZhNjc2NGY4MGRkN2NmZCIsInN1YiI6IjY2M2RmMGE0Yzk3YWIwMDQ1YzUxMjg5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H8TmTPplzL0OAfubMKw4zINbWH3VK4Tn4fC5WXRcV9c",
    },
  };
  try {
    loader.style.display = "block";
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?language=${lang}-${lang.toLocaleUpperCase()}&page=1`,
      options
    );
    const data = await res.json();

    console.log(data);

    // set img src
    if (data.poster_path === null) {
      img.src = "/assets/img/imgnotfound.jpg";
    } else {
      img.src = `${imgback}${data.poster_path}`;
    }
    // SET DETAILS VALUE

    // set title
    title.textContent = data.title;

    // set duration
    duration.textContent = ` ${data.runtime} minutes`;

    // set genres

    const subGenres = data.genres;

    subGenres.forEach((genreType) => {
      const pGenre = document.createElement("p");
      pGenre.innerHTML = `|${genreType.name}`;

      genres.appendChild(pGenre);
    });

    // set date
    date.innerHTML = `${data.release_date}`;

    // set production company

    const totCompany = data.production_companies;

    totCompany.forEach((company) => {
      const singleCompany = document.createElement("div");
      singleCompany.className = "single-company";

      const companyImg = document.createElement("img");
      companyImg.className = "prod-logo";

      const companyName = document.createElement("p");
      companyName.className = "company-name";

      companyImg.src = `${imgback}${company.logo_path}`;
      companyName.textContent = company.name;

      singleCompany.appendChild(companyImg);
      singleCompany.appendChild(companyName);

      singlecompanyContainer.appendChild(singleCompany);
      prodCompanyContainer.appendChild(singlecompanyContainer);
    });

    // set description
    const newDescription = document.createElement("p");
    newDescription.innerHTML = `${data.overview}`;

    description.appendChild(newDescription);

    // set star

    const oneStar = Math.floor(data.vote_average);
    const halfStar = (data.vote_average - oneStar).toFixed(1);

    for (i = 0; i < oneStar; i++) {
      const newStar = document.createElement("i");
      newStar.className = "bx bxs-star";

      ratingStarContainer.appendChild(newStar);
    }

    if (halfStar >= 0.5) {
      const newHalfStar = document.createElement("i");
      newHalfStar.className = "bx bxs-star-half";

      ratingStarContainer.appendChild(newHalfStar);
    }
  } catch {
    alert("error, film not found");
  } finally {
    loader.style.display = "none";
  }
}
