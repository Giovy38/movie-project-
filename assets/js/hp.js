const refreshBtn = document.querySelectorAll(".bx-refresh");
const housesLoadInfo = document.querySelectorAll(".house-load-info");

window.addEventListener("DOMContentLoaded", loadHousesInfo);

async function loadHousesInfo() {
  try {
    housesLoadInfo.forEach((load) => {
      load.style.display = "block";
    });
    refreshBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    const res = await fetch("https://potterapi-fedeperin.vercel.app/en/houses");
    const data = await res.json();

    // set griffindor value
    const griffindorTitle = document.getElementById("griffindor-title");
    const griffindorFounder = document.getElementById("griffindor-founder");

    const griffindor = data[0];

    griffindorTitle.textContent = griffindor.house;
    griffindorFounder.textContent = griffindor.founder;

    // set slytherin value
    const slytherinTitle = document.getElementById("slytherin-title");
    const slytherinFounder = document.getElementById("slytherin-founder");

    const slytherin = data[3];

    slytherinTitle.textContent = slytherin.house;
    slytherinFounder.textContent = slytherin.founder;

    // set hufflepuff value
    const hufflepuffTitle = document.getElementById("hufflepuff-title");
    const hufflepuffFounder = document.getElementById("hufflepuff-founder");

    const hufflepuff = data[1];

    hufflepuffTitle.textContent = hufflepuff.house;
    hufflepuffFounder.textContent = hufflepuff.founder;

    // set ravenclaw value
    const ravenclawTitle = document.getElementById("ravenclaw-title");
    const ravenclawFounder = document.getElementById("ravenclaw-founder");

    const ravenclaw = data[2];

    ravenclawTitle.textContent = ravenclaw.house;
    ravenclawFounder.textContent = ravenclaw.founder;

    housesLoadInfo.forEach((load) => {
      load.style.display = "none";
    });
  } catch {
    const griffindorTitle = document.getElementById("griffindor-title");
    const griffindorFounder = document.getElementById("griffindor-founder");

    const slytherinTitle = document.getElementById("slytherin-title");
    const slytherinFounder = document.getElementById("slytherin-founder");

    const hufflepuffTitle = document.getElementById("hufflepuff-title");
    const hufflepuffFounder = document.getElementById("hufflepuff-founder");

    const ravenclawTitle = document.getElementById("ravenclaw-title");
    const ravenclawFounder = document.getElementById("ravenclaw-founder");

    griffindorTitle.textContent = "API Error";
    griffindorFounder.textContent = "API Error";

    slytherinTitle.textContent = "API Error";
    slytherinFounder.textContent = "API Error";

    hufflepuffTitle.textContent = "API Error";
    hufflepuffFounder.textContent = "API Error";

    ravenclawTitle.textContent = "API Error";
    ravenclawFounder.textContent = "API Error";

    refreshBtn.forEach((btn) => {
      btn.style.display = "block";
      btn.addEventListener("click", loadHousesInfo);
    });

    housesLoadInfo.forEach((load) => {
      load.style.display = "none";
    });
  }
}

const knowSomeoneBtn = document.getElementById("know-someone-btn");
const charLoader = document.getElementById("char-load-icon");
const charBtn = document.getElementById("char-btn");
const filterCharContainer = document.getElementById("filter-char-container");
const apiError = document.getElementById("api-error");

knowSomeoneBtn.addEventListener("click", knowSomeone);
charBtn.addEventListener("click", knowSomeone);

async function knowSomeone() {
  {
    const lastSearch = document.querySelectorAll(".single-char-card");
    lastSearch.forEach((char) => {
      char.remove();
    });

    try {
      charLoader.style.display = "block";
      filterCharContainer.style.opacity = "100%";
      charBtn.style.display = "none";
      apiError.style.display = "none";

      const res = await fetch(
        "https://potterapi-fedeperin.vercel.app/en/characters"
      );
      const data = await res.json();

      data.forEach((char) => {
        // ---------- CHAR SECTION ------------

        // create elements
        const singleCharCard = document.createElement("div");
        const border = document.createElement("div");
        const img = document.createElement("img");
        const charDescription = document.createElement("div");
        const charName = document.createElement("h1");
        const charHouse = document.createElement("h3");
        const charBirthdate = document.createElement("h4");
        const childrenContainer = document.createElement("div");
        const charactersContainer = document.getElementById(
          "character-container"
        );

        // assign class to elements

        singleCharCard.className = "single-char-card";
        border.className = "border";
        charDescription.className = "char-description";
        charName.className = "char-name";
        charHouse.className = `char-house ${char.hogwartsHouse.toLowerCase()}-house`;
        charBirthdate.className = "char-birthdate";
        childrenContainer.className = "children-container";

        // assign value to elements

        img.src = char.image;
        charName.textContent = char.fullName;
        charHouse.textContent = char.hogwartsHouse;
        charBirthdate.textContent = char.birthdate;

        if (char.children.length > 0) {
          childrenContainer.innerHTML = "children:<br>";
        }
        char.children.forEach((children) => {
          const child = document.createElement("p");
          child.textContent = children;
          childrenContainer.appendChild(child);
        });

        charDescription.appendChild(charName);
        charDescription.appendChild(charHouse);
        charDescription.appendChild(charBirthdate);
        charDescription.appendChild(childrenContainer);
        border.appendChild(img);
        singleCharCard.appendChild(border);
        singleCharCard.appendChild(charDescription);
        charactersContainer.appendChild(singleCharCard);
      });
    } catch {
      console.log("err");
      charBtn.style.display = "block";
      apiError.style.display = "block";
    } finally {
      charLoader.style.display = "none";
    }
  }
}

// --------- CHARACTERS FILTER ---------

const allFilter = document.getElementById("all-select");
const griffindorFilter = document.getElementById("griffindor-select");
const slytherinFilter = document.getElementById("slytherin-select");
const hufflepuffFilter = document.getElementById("hufflepuff-select");
const ravenclawFilter = document.getElementById("ravenclaw-select");

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const houseSelected = e.target.textContent;

    filterBtns.forEach((btn) => {
      btn.classList.remove("current");

      switch (houseSelected) {
        case "all":
          allFilter.classList.add("current");
          break;
        case "griffindor":
          griffindorFilter.classList.add("current");
          break;
        case "slytherin":
          slytherinFilter.classList.add("current");
          break;
        case "hufflepuff":
          hufflepuffFilter.classList.add("current");
          break;
        case "ravenclaw":
          ravenclawFilter.classList.add("current");
          break;
      }
    });
  });
});

// all filter

allFilter.addEventListener("click", () => {
  const allChar = document.querySelectorAll(".single-char-card");

  allChar.forEach((char) => {
    char.style.display = "block";
  });
});

// griffindor filter
griffindorFilter.addEventListener("click", () => {
  const allChar = document.querySelectorAll(".single-char-card");

  allChar.forEach((char) => {
    char.style.display = "block";

    if (char.children[1].children[1].textContent !== "Gryffindor") {
      char.style.display = "none";
    }
  });
});

// slytherin filter
slytherinFilter.addEventListener("click", () => {
  const allChar = document.querySelectorAll(".single-char-card");

  allChar.forEach((char) => {
    char.style.display = "block";
    if (char.children[1].children[1].textContent !== "Slytherin") {
      char.style.display = "none";
    }
  });
});

// hufflepuff filter
hufflepuffFilter.addEventListener("click", () => {
  const allChar = document.querySelectorAll(".single-char-card");

  allChar.forEach((char) => {
    char.style.display = "block";

    if (char.children[1].children[1].textContent !== "Hufflepuff") {
      char.style.display = "none";
    }
  });
});

// ravenclaw filter
ravenclawFilter.addEventListener("click", () => {
  const allChar = document.querySelectorAll(".single-char-card");

  allChar.forEach((char) => {
    char.style.display = "block";

    if (char.children[1].children[1].textContent !== "Ravenclaw") {
      char.style.display = "none";
    }
  });
});
