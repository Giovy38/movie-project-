const refreshBtn = document.querySelectorAll(".bx-refresh");
const housesLoadInfo = document.querySelectorAll(".house-load-info");
let lang;

window.addEventListener("DOMContentLoaded", () => {
  lang = localStorage.getItem("language");
  if (lang === null) {
    localStorage.setItem("language", "en");
    lang = localStorage.getItem("language");
  }
});
window.addEventListener("DOMContentLoaded", loadHousesInfo);

async function loadHousesInfo() {
  try {
    housesLoadInfo.forEach((load) => {
      load.style.display = "block";
    });
    refreshBtn.forEach((btn) => {
      btn.style.display = "none";
    });
    const res = await fetch(
      `https://potterapi-fedeperin.vercel.app/${lang}/houses`
    );
    const data = await res.json();

    // set griffindor value
    const griffindorTitle = document.getElementById("griffindor-title");
    const griffindorFounder = document.getElementById("griffindor-founder");
    const griffindorDescription = document.getElementById(
      "griffindor-description"
    );

    switch (lang) {
      case "en":
        griffindorDescription.textContent = `Gryffindor instructed the Sorting Hat to choose students
        possessing characteristics he most valued, such as courage,
        chivalry, nerve and determination, to be sorted into his house.
        The emblematic animal was a lion, and its colours were scarlet and
        gold and its house point hourglass was filled with rubies. Sir
        Nicholas de Mimsy-Porpington, also known as "Nearly Headless
        Nick", was the House ghost. Gryffindor corresponded roughly to the
        element of fire, and it was for this reason that the colours
        scarlet and gold were chosen to represent the house. The colour of
        fire corresponded to that of a lion as well, with scarlet
        representing the mane and tail and gold representing the coat. The
        Gryffindor motto was "Forti Animo Estote", which was displayed on
        a stained glass window in the common room.`;
        break;
      case "it":
        griffindorDescription.textContent = `Prende il nome dal suo fondatore, Godric Grifondoro, uno dei quattro fondatori di Hogwarts. Grifondoro ordinò al Cappello parlante di scegliere gli studenti che possedevano le caratteristiche a suo dire più nobili come il coraggio, la gentilezza e la determinazione.

        Il simbolo della casa è un leone e i suoi colori sono l'oro e il rosso. Il fantasma della casa è Sir Nicholas de Mimsy-Porpington, anche noto come "Nick Quasi-Senza-Testa".

        Grifondoro corrisponde grosso modo all'elemento fuoco, ed è per questo motivo che i colori rosso e oro sono stati scelti per rappresentare la casa. Anche il colore del fuoco corrisponde a quello di un leone, con il rosso a rappresentare la criniera e la coda e l'oro a rappresentare il mantello.`;
        break;
      case "fr":
        griffindorDescription.textContent = `Il porte le nom de son fondateur, Godric Gryffondor, l'un des quatre fondateurs de Poudlard. Gryffondor a ordonné au Choixpeau de choisir les étudiants qui possédaient les caractéristiques les plus nobles telles que le courage, la gentillesse et la détermination.

        Le symbole de la maison est un lion et ses couleurs sont l'or et le rouge. Le fantôme de la maison est Sir Nicholas de Mimsy-Porpington, également connu sous le nom de « Nick presque sans tête ».

        Gryffondor correspond à peu près à l'élément feu, c'est pourquoi les couleurs rouge et or ont été choisies pour représenter la maison. La couleur du feu correspond également à celle d'un lion, le rouge représentant la crinière et la queue et l'or représentant le pelage.`;
        break;
    }

    const griffindor = data[0];

    griffindorTitle.textContent = griffindor.house;
    griffindorFounder.textContent = griffindor.founder;

    // set slytherin value
    const slytherinTitle = document.getElementById("slytherin-title");
    const slytherinFounder = document.getElementById("slytherin-founder");
    const slytherinDescription = document.getElementById(
      "slytherin-description"
    );

    switch (lang) {
      case "en":
        slytherinDescription.textContent = `In establishing the house, Salazar instructed the Sorting Hat to
        pick students who had a few particular characteristics he most
        valued. Those characteristics included cunning, resourcefulness,
        leadership, and ambition. Many Slytherin students tended to clique
        together (often acquiring leaders) which further exemplified
        Slytherin's ambitious qualities. Examples of these included Draco
        Malfoy's gang, Merula Snyde's gang, Pansy Parkinson's gang and Tom
        Riddle's gang (which later became the Death Eaters). The founder
        highly valued and favoured pure-blood students and the Sorting Hat
        admitted that it could be a factor when being sorted. Students of
        any blood status could be placed in the house. However, a
        Muggle-born student from that house was considered to be quite
        rare. The emblematic animal of the house was a snake and the
        house's colours were green and silver. There were two notable
        heads of the house; Horace Slughorn took the role twice (first
        leaving in 1981 and then taking the role again from 1997 until
        leaving before 2016), and Severus Snape. The patron ghost of the
        house was the Bloody Baron.Slytherin corresponded roughly with the
        element of water due to serpents being commonly associated with
        the sea and lochs in western European mythology, as well as
        serpents being physically fluid and flexible animals. Similarly,
        in Celtic mythology, water is seen as a portal to another world,
        leading some to believe that the element was chosen to symbolise a
        Slytherin's dream for a world in which their goals and ambitions
        had finally been achieved. Others speculate that it was chosen to
        symbolise many Slytherins' hope for a pureblood-only wizarding
        society.[citation needed] The colours also corresponded with
        waters around lakes and lochs often being green, and silver being
        often associated with grey rainwater.`;
        break;
      case "it":
        slytherinDescription.textContent = `fondata da Salazar Serpeverde. Quando istituì la casa, Salazar ordinò al Cappello Parlante di scegliere gli studenti che avevano alcune caratteristiche particolari che egli teneva più in considerazione. Queste caratteristiche includono: astuzia, intraprendenza e ambizione.

        Serpeverde è una delle due case principali insieme a Grifondoro. In passato ci sono stati dilemmi circa gli ideali del fondatore della casa, Salazar Serpeverde, in cui avrebbe avuto un diverbio con gli altri fondatori viste le sue teorie riguardo la purezza del sangue dei maghi. Egli voleva che unicamente i maghi Purosangue potessero frequentare la scuola, mentre i maghi che provenissero da famiglie babbane o di tipo Mezzosangue fossero indegni di studiare la magia, pertanto questi ultimi vengono spesso scherniti e additati dai Serpeverde.
        
        Il fondatore era molto apprezzato e prediletto dagli studenti purosangue ed il Cappello Parlante ammise che poteva essere un fattore quando veniva ordinato. Gli studenti di qualsiasi stato di sangue possono ora essere collocati nella casa. Tuttavia, è raro ed al momento è sconosciuto se sia mai esistito un Serpeverde nato Babbano.
        
        Serpeverde corrisponde all'incirca all'elemento dell'acqua perché i serpenti sono comunemente associati al mare e ai loch nella mitologia dell'Europa occidentale, così come i serpenti sono animali fisicamente fluidi e flessibili. Allo stesso modo, nella mitologia celtica, l'acqua è vista come un portale verso un altro mondo, portando alcuni a credere che l'elemento sia stato scelto per simboleggiare un sogno dei Serpeverde per un mondo in cui i loro obiettivi e le loro ambizioni erano stati finalmente raggiunti. Altri ipotizzano che sia stato scelto per simboleggiare la speranza di molti Serpeverde per una società di maghi purosangue.
        
        I colori corrispondevano anche al fatto che le acque intorno a laghi e laghi erano spesso verdi e l'argento era spesso associato all'acqua piovana grigia. Perdipiù, la loro stessa sala comune è collocata sotto il lago.`;

        break;
      case "fr":
        slytherinDescription.textContent = `fondée par Salazar Serpentard. Lors de la création de la maison, Salazar a ordonné au Choixpeau choisi de choisir les étudiants qui possédaient certaines caractéristiques particulières qu'il appréciait le plus. Ces caractéristiques incluent : la ruse, l’ingéniosité et l’ambition.

        Serpentard est l'une des deux maisons principales avec Gryffondor. Dans le passé, il y a eu des dilemmes concernant les idéaux du fondateur de la maison, Salazar Serpentard, dans lesquels il se serait brouillé avec les autres fondateurs étant donné ses théories concernant la pureté du sang sorcier. Il voulait que seuls les sorciers de Sang Pur puissent fréquenter l'école, tandis que les sorciers issus de familles Moldues ou Sang-Mêlé étaient indignes d'étudier la magie, ces derniers sont donc souvent ridiculisés et pointés du doigt par les Serpentards.
        
        Le fondateur était très apprécié et favorisé par les étudiants de sang pur et le Choixpeau a admis qu'il pouvait être un facteur lorsqu'il était commandé. Les étudiants de n’importe quel statut sanguin peuvent désormais être placés dans la maison. Cependant, c'est rare et on ne sait actuellement pas s'il y a déjà eu un Serpentard né de Moldus.
        
        Serpentard correspond à peu près à l'élément eau car les serpents sont communément associés à la mer et aux lochs dans la mythologie d'Europe occidentale, tout comme les serpents sont des animaux physiquement fluides et flexibles. De même, dans la mythologie celtique, l'eau est considérée comme un portail vers un autre monde, ce qui amène certains à croire que l'élément a été choisi pour symboliser le rêve des Serpentards d'un monde où leurs objectifs et leurs ambitions auraient finalement été atteints. D'autres pensent qu'il a été choisi pour symboliser l'espoir de nombreux Serpentards d'une société de sorciers de sang pur.
        
        Les couleurs correspondaient également au fait que les eaux autour des lacs et des lacs étaient souvent vertes, et que l'argent était souvent associé aux eaux de pluie grises. De plus, leur salle commune elle-même est située sous le lac.`;

        break;
    }

    const slytherin = data[3];

    slytherinTitle.textContent = slytherin.house;
    slytherinFounder.textContent = slytherin.founder;

    // set hufflepuff value
    const hufflepuffTitle = document.getElementById("hufflepuff-title");
    const hufflepuffFounder = document.getElementById("hufflepuff-founder");
    const hufflepuffDescription = document.getElementById(
      "hufflepuff-description"
    );

    switch (lang) {
      case "en":
        hufflepuffDescription.textContent = `Its founder was the medieval witch Helga Hufflepuff. Hufflepuff
        was the most inclusive among the four houses, valuing hard work,
        dedication, patience, loyalty, and fair play rather than a
        particular aptitude in its members. The emblematic animal was a
        badger, and yellow and black were its house colours. The Head of
        Hufflepuff was Pomona Sprout, and the Fat Friar was the House's
        patron ghost. Hufflepuff corresponded roughly to the element of
        earth, and it was for that reason that the House colours were
        chosen: yellow represented golden wheat, while black was
        emblematic of fertile soil. The Hufflepuff point hourglass
        contained yellow diamonds. Students sorted into Hufflepuff often
        demonstrated strong abilities in Herbology, owing to their
        correspondence to earth.`;
        break;
      case "it":
        hufflepuffDescription.textContent = ` La fondatrice della casa è stata la strega medievale Tosca Tassorosso. Tassorosso è la più inclusiva tra le quattro case, apprezzando il duro lavoro, la dedizione, la pazienza, la lealtà e la correttezza piuttosto che una particolare attitudine nei suoi membri. L'animale emblematico è un tasso e il giallo e il nero sono i colori della casa. Il capo di Tassorosso è Pomona Sprite, e il Frate Grasso è il fantasma patrono della casa. Tassorosso corrisponde grosso modo all'elemento terra ed è in base a questo che sono stati scelti i colori della casa: il giallo rappresentava il grano, mentre il nero è emblematico della terra. La clessidra a punta di Tassorosso contiene diamanti gialli. Gli studenti smistati in Tassorosso hanno spesso dimostrato abilità eccezionali in Erbologia, grazie alla loro corrispondenza con la terra.`;

        break;
      case "fr":
        hufflepuffDescription.textContent = `La fondatrice de la maison était la sorcière médiévale Tosca Poufsouffle. Poufsouffle est la plus inclusive des quatre maisons, valorisant le travail acharné, le dévouement, la patience, la loyauté et l'équité plutôt que les aptitudes particulières de ses membres. L'animal emblématique est un blaireau et le jaune et le noir sont les couleurs de la maison. Le chef de Poufsouffle est Pomona Sprout et le Fat Friar est le fantôme patron de la maison. Poufsouffle correspond à peu près à l'élément terre et c'est sur cette base que les couleurs de la maison ont été choisies : le jaune représente le blé, tandis que le noir est emblématique de la terre. Le sablier pointu de Poufsouffle contient des diamants jaunes. Les étudiants répartis à Poufsouffle ont souvent démontré des compétences exceptionnelles en herbologie, grâce à leur correspondance avec la terre.`;

        break;
    }

    const hufflepuff = data[1];

    hufflepuffTitle.textContent = hufflepuff.house;
    hufflepuffFounder.textContent = hufflepuff.founder;

    // set ravenclaw value
    const ravenclawTitle = document.getElementById("ravenclaw-title");
    const ravenclawFounder = document.getElementById("ravenclaw-founder");
    const ravenclawDescription = document.getElementById(
      "ravenclaw-description"
    );

    switch (lang) {
      case "en":
        ravenclawDescription.textContent = `Its founder was the medieval witch Rowena Ravenclaw. Members of
        this house were characterised by their wit, learning, and wisdom.
        The emblematic animal symbol was an eagle, and blue and bronze
        were its colours. The Head of Ravenclaw was Filius Flitwick, and
        the House ghost was the Grey Lady, real name Helena Ravenclaw,
        daughter of Rowena. Ravenclaw corresponded roughly to the element
        of air, and it was for that reason that the House colours were
        chosen; blue and bronze represented the sky and eagle feathers
        respectively, both having much to do with air. The Ravenclaw
        points hourglass contained blue sapphires.`;
        break;
      case "it":
        ravenclawDescription.textContent = `Fu fondata dalla strega medievale Corinna Corvonero. I membri di questa casa sono caratterizzati dalla propria arguzia, intelligenza e saggezza. L'animale simbolo della casa è un'aquila, e i suoi colori sono il blu e il bronzo. Il Direttore della Casa Corvonero è Filius Vitious, e il fantasma della casa è la Dama Grigia, il cui vero nome è Helena Corvonero, figlia di Corinna.

        La casa Corvonero è associata approssimativamente all'elemento aria, ed è per questa ragione che sono stati scelti i colori della Casa; blu e bronzo infatti rappresentano rispettivamente il cielo e le piume di un'aquila, entrambi legati all'aria. La clessidra dei punti di Corvonero contiene zaffiri blu.`;

        break;
      case "fr":
        ravenclawDescription.textContent = `Elle a été fondée par la sorcière médiévale Corinna Serdaigle. Les membres de cette maison se caractérisent par leur esprit, leur intelligence et leur sagesse. Le symbole animal de la maison est un aigle et ses couleurs sont le bleu et le bronze. Le chef de la maison Serdaigle est Filius Flitwick, et le fantôme de la maison est la Dame Grise, dont le vrai nom est Helena Serdaigle, fille de Corinna.

        La maison Serdaigle est grossièrement associée à l'élément air, et c'est pour cette raison que les couleurs de la Maison ont été choisies ; en effet, le bleu et le bronze représentent respectivement le ciel et les plumes d'un aigle, tous deux liés à l'air. Le sablier de Serdaigle contient des saphirs bleus.`;

        break;
    }

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
        `https://potterapi-fedeperin.vercel.app/en/characters`
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
    } catch (err) {
      console.log(err);
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

// ------------ BOOK SECTION --------------

window.addEventListener("DOMContentLoaded", loadBooks);
const booksLoad = document.getElementById("book-loader");
const libraryRefresh = document.getElementById("library-refresh");
const textError = document.getElementById("library-api-error");

libraryRefresh.addEventListener("click", loadBooks);

async function loadBooks() {
  booksLoad.style.display = "block";
  textError.style.display = "none";

  const libraryContainer = document.getElementById("library-container");

  try {
    const res = await fetch(
      `https://potterapi-fedeperin.vercel.app/${lang}/books`
    );
    const data = await res.json();

    data.forEach((book) => {
      const singleBookDiv = document.createElement("div");
      const singleBookImg = document.createElement("img");
      const bookTitleShowed = document.getElementById("book-title");

      singleBookDiv.className = "single-book";
      singleBookImg.className = "single-book-img";
      singleBookImg.src = "/assets/img/single-book.jpg";

      singleBookDiv.appendChild(singleBookImg);
      libraryContainer.appendChild(singleBookDiv);

      singleBookImg.addEventListener("mouseover", () => {
        bookTitleShowed.textContent = book.title;
      });

      singleBookImg.addEventListener("click", () => {
        const img = document.getElementById("single-book-showed-img");
        const title = document.getElementById("single-book-showed-title");
        const data = document.getElementById("single-book-showed-data");
        const pages = document.getElementById("single-book-showed-pages");
        const description = document.getElementById(
          "single-book-showed-description"
        );

        img.src = book.cover;
        title.textContent = book.title;
        data.innerHTML = `Relase Data: ${book.releaseDate}`;
        pages.innerHTML = `Pages : ${book.pages}`;
        description.innerHTML = `Description : <br> ${book.description}`;
      });
    });
  } catch (err) {
    console.log(err);
    libraryRefresh.style.display = "block";
    textError.style.display = "block";
  } finally {
    booksLoad.style.display = "none";
  }
}

// SPELL TRY

window.addEventListener("DOMContentLoaded", loadSpells);
const spellsRefresh = document.getElementById("spells-refresh");
const spellsLoad = document.getElementById("spells-load");

spellsRefresh.addEventListener("click", loadSpells);

async function loadSpells() {
  spellsRefresh.style.display = "none";
  spellsLoad.style.display = "block";
  try {
    const res = await fetch(
      `https://potterapi-fedeperin.vercel.app/${lang}/spells`
    );
    const data = await res.json();

    data.forEach((spell) => {
      const spellsContainer = document.getElementById("spells-container");
      const singleSpell = document.createElement("div");
      const spellTitle = document.createElement("h3");
      const spellEffect = document.createElement("h4");

      singleSpell.className = "single-spell";
      spellTitle.textContent = spell.spell;
      spellEffect.textContent = spell.use;

      singleSpell.appendChild(spellTitle);
      singleSpell.appendChild(spellEffect);
      spellsContainer.appendChild(singleSpell);
    });

    spellsLoad.style.display = "none";
  } catch (err) {
    spellsRefresh.style.display = "block";
    spellsLoad.style.display = "none";
    console.log(err);
  }
}
