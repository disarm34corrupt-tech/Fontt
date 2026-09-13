const SYMBOLS = [

  // HEART
  ["♡","heart"],
  ["♥","heart"],
  ["♥︎","heart"],
  ["❤","heart"],
  ["ღ","heart"],
  ["ෆ","heart"],
  ["❥","heart"],
  ["❣","heart"],
  ["𓆩♡𓆪","heart"],
  ["♡₊˚","heart"],

  // CUTE
  ["୨୧","cute"],
  ["𐙚","cute"],
  ["꒰ა","cute"],
  ["໒꒱","cute"],
  ["૮₍˶ᵔ ᵕ ᵔ˶₎ა","kaomoji"],
  ["૮꒰ ˶• ༝ •˶꒱ა","kaomoji"],

  // STARS
  ["☆","star"],
  ["★","star"],
  ["✦","star"],
  ["✧","star"],
  ["✩","star"],
  ["✪","star"],
  ["✫","star"],
  ["✬","star"],
  ["⋆","star"],
  ["⟡","star"],

  // SPARKLE
  ["˚","sparkle"],
  ["₊","sparkle"],
  ["‧","sparkle"],
  ["⊹","sparkle"],
  ["❋","sparkle"],
  ["❈","sparkle"],
  ["⋆｡°✩","sparkle"],

  // FLOWER
  ["❀","flower"],
  ["✿","flower"],
  ["❁","flower"],
  ["ꕤ","flower"],
  ["⚘","flower"],
  ["𖧷","flower"],
  ["❃","flower"],

  // MOON / SKY
  ["☾","moon"],
  ["☽","moon"],
  ["☼","sky"],
  ["☀︎","sky"],
  ["☁︎","sky"],
  ["☄︎","sky"],

  // MUSIC
  ["♫","music"],
  ["♪","music"],
  ["♬","music"],
  ["♩","music"],
  ["♭","music"],
  ["𝄞","music"],

  // ARROWS
  ["→","arrow"],
  ["←","arrow"],
  ["↗","arrow"],
  ["↘","arrow"],
  ["➜","arrow"],
  ["➳","arrow"],
  ["⟶","arrow"],

  // SHAPES
  ["∞","shape"],
  ["◇","shape"],
  ["◆","shape"],
  ["○","shape"],
  ["●","shape"],
  ["△","shape"],
  ["▽","shape"],
  ["□","shape"],
  ["■","shape"],

  // SYMBOLS
  ["☻","symbol"],
  ["☹","symbol"],
  ["☯","symbol"],
  ["☮","symbol"],
  ["☞","symbol"],
  ["☜","symbol"],

  // DECORATIVE
  ["⚜","decorative"],
  ["❦","decorative"],
  ["❧","decorative"],
  ["꧁","decorative"],
  ["꧂","decorative"],
  ["༺","decorative"],
  ["༻","decorative"],

  // BRACKETS
  ["「","bracket"],
  ["」","bracket"],
  ["『","bracket"],
  ["』","bracket"],
  ["【","bracket"],
  ["】","bracket"],

  // ANCIENT
  ["𓂀","ancient"],
  ["𓆩","ancient"],
  ["𓆪","ancient"],
  ["𓂃","ancient"],
  ["𓇼","ancient"],

  // EMOJI
  ["☕","emoji"],
  ["🍰","emoji"],
  ["🧁","emoji"],
  ["🍓","emoji"],
  ["🎀","emoji"],
  ["🧸","emoji"],
  ["🥹","emoji"],
  ["😭","emoji"],
  ["✨","emoji"],
  ["💗","emoji"],
  ["🌷","emoji"],
  ["☁️","emoji"],
  ["🌙","emoji"],

  // KAOMOJI
  ["(˶ᵔ ᵕ ᵔ˶)","kaomoji"],
  ["(˶˃ ᵕ ˂˶)","kaomoji"],
  ["(╥﹏╥)","kaomoji"],
  ["(｡•́‿•̀｡)","kaomoji"],
  ["(≧▽≦)","kaomoji"]
];


const VIBE_PATTERNS = {

  cute: [

    text =>
      `${text} ${pick([
        "♡₊˚",
        "୨୧",
        "𐙚"
      ])} ${pick([
        "🎀",
        "🧸",
        "🍓"
      ])}`,

    text =>
      `୨୧ ${text} ${pick([
        "♡",
        "ෆ",
        "𐙚"
      ])}`,

    text =>
      `${pick([
        "꒰ა",
        "𐙚"
      ])} ${text} ${pick([
        "໒꒱",
        "୨୧"
      ])}`

  ],


  soft: [

    text =>
      `${text} ୨୧ ˚₊‧☁︎⋆｡°`,

    text =>
      `˚₊‧ ${text} ${pick([
        "❀",
        "ꕤ",
        "୨୧"
      ])} ‧₊˚`,

    text =>
      `☁︎ ${text} ${pick([
        "♡",
        "❀",
        "⚘"
      ])} ˚｡⋆`

  ],


  dreamy: [

    text =>
      `${text} ☾⋆｡°✩`,

    text =>
      `☁︎⋆｡°✩ ${text} ✩°｡⋆`,

    text =>
      `${text} ⋆｡°✩ ☾ ⟡`

  ],


  romantic: [

    text =>
      `${text} ♡ 𐙚₊˚⊹`,

    text =>
      `𐙚 ${text} ♡₊˚`,

    text =>
      `${text} ⋆♡⋆ ${pick([
        "୨୧",
        "❦",
        "𓆩♡𓆪"
      ])}`

  ],


  sparkly: [

    text =>
      `✦ ${text} ✧`,

    text =>
      `${text} ⋆｡°✩ ⟡`,

    text =>
      `✧˚₊‧ ${text} ‧₊˚✦`

  ],


  sweet: [

    text =>
      `${text} 🍰♡₊˚ ${pick([
        "🍓",
        "🧁",
        "🎀"
      ])}`,

    text =>
      `🧁 ${text} ♡ 🍓`,

    text =>
      `${text} ⋆｡°✩ 🍰 ☕`

  ],


  casual: [

    text =>
      `${text} hehe ♡`,

    text =>
      `${text} 😭🫶🏻`,

    text =>
      `${text} lol ⋆｡°✩`

  ],


  chaos: [

    text =>
      `${pick([
        "😭",
        "HELP",
        "PLS"
      ])} ${text} ${pick([
        "😭😭",
        "💀",
        "!!!"
      ])} ${pick([
        "♡",
        "🫵🏻",
        "✦"
      ])}`,

    text =>
      `${text} ${pick([
        "????",
        "!!!!",
        "😭😭😭"
      ])} ♡ ${pick([
        "💀",
        "🧍🏻‍♀️",
        "🫠"
      ])}`,

    text =>
      `𓆩♡𓆪 ${text} 𓆩♡𓆪 ${pick([
        "😭",
        "💀",
        "🫶🏻"
      ])}`

  ]

};


let currentVibe = "cute";
let currentCategory = "all";


const textInput =
  document.querySelector("#textInput");

const results =
  document.querySelector("#results");

const searchInput =
  document.querySelector("#searchInput");

const library =
  document.querySelector("#library");

const categories =
  document.querySelector("#categories");


function pick(array) {

  return array[
    Math.floor(
      Math.random() * array.length
    )
  ];

}


function clean(text) {

  return text
    .trim()
    .replace(/\s+/g, " ");

}


function decorate(text, vibe) {

  if (vibe === "random") {

    vibe = pick(
      Object.keys(VIBE_PATTERNS)
    );

  }

  return pick(
    VIBE_PATTERNS[vibe]
  )(text);

}


function generate() {

  const text =
    clean(textInput.value);


  if (!text) {

    results.innerHTML = `
      <p class="empty">
        Write something first yaa ♡
      </p>
    `;

    return;
  }


  const output = [];


  while (output.length < 6) {

    const result =
      decorate(text, currentVibe);


    if (!output.includes(result)) {

      output.push(result);

    }

  }


  results.innerHTML =
    output.map((text, index) => `

      <article class="result">

        <div class="result-text">
          ${escapeHTML(text)}
        </div>

        <div class="result-footer">

          <span class="result-tag">
            ${currentVibe.toUpperCase()} · ${index + 1}
          </span>

          <button class="copy-btn">
            Copy ♡
          </button>

        </div>

      </article>

    `).join("");


  document
    .querySelectorAll(".copy-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          const value =
            button
              .closest(".result")
              .querySelector(".result-text")
              .textContent;


          await navigator
            .clipboard
            .writeText(value);


          button.textContent =
            "Copied! ♡";


          setTimeout(() => {

            button.textContent =
              "Copy ♡";

          }, 900);

        }
      );

    });

}


function escapeHTML(value) {

  return value.replace(
    /[&<>"']/g,
    char => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"

    }[char])
  );

}


/* -----------------------------
   SYMBOL LIBRARY
----------------------------- */

const categoryList = [

  "all",
  "heart",
  "cute",
  "star",
  "sparkle",
  "flower",
  "moon",
  "music",
  "emoji",
  "kaomoji",
  "decorative",
  "ancient"

];


categories.innerHTML =
  categoryList.map(category => `

    <button
      class="category ${
        category === "all"
          ? "active"
          : ""
      }"
      data-category="${category}"
    >
      ${category}
    </button>

  `).join("");


function renderLibrary() {

  const query =
    searchInput.value.toLowerCase();


  const filtered =
    SYMBOLS.filter(
      ([symbol, category]) => {

        const categoryMatch =
          currentCategory === "all" ||
          category === currentCategory;


        const searchMatch =
          `${symbol} ${category}`
            .toLowerCase()
            .includes(query);


        return (
          categoryMatch &&
          searchMatch
        );

      }
    );


  library.innerHTML =
    filtered.map(
      ([symbol, category]) => `

        <button
          class="symbol"
          title="Copy ${escapeHTML(symbol)}"
        >

          ${escapeHTML(symbol)}

          <small>
            ${category}
          </small>

        </button>

      `
    ).join("");


  library
    .querySelectorAll(".symbol")
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          const symbol =
            button
              .childNodes[0]
              .textContent
              .trim();


          await navigator
            .clipboard
            .writeText(symbol);


          const old =
            button.innerHTML;


          button.innerHTML =
            "Copied!<small>♡</small>";


          setTimeout(() => {

            button.innerHTML =
              old;

          }, 800);

        }
      );

    });

}


/* -----------------------------
   VIBE BUTTONS
----------------------------- */

document
  .querySelectorAll(".vibe")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".vibe")
          .forEach(item =>
            item.classList.remove(
              "active"
            )
          );


        button.classList.add("active");

        currentVibe =
          button.dataset.vibe;

      }
    );

  });


/* -----------------------------
   CATEGORY BUTTONS
----------------------------- */

document
  .querySelectorAll(".category")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".category")
          .forEach(item =>
            item.classList.remove(
              "active"
            )
          );


        button.classList.add("active");


        currentCategory =
          button.dataset.category;


        renderLibrary();

      }
    );

  });


/* -----------------------------
   MAIN BUTTONS
----------------------------- */

document
  .querySelector("#generateBtn")
  .addEventListener(
    "click",
    generate
  );


document
  .querySelector("#surpriseBtn")
  .addEventListener(
    "click",
    () => {

      const vibes =
        [
          ...document
            .querySelectorAll(".vibe")
        ];


      pick(vibes).click();

      generate();

    }
  );


document
  .querySelector("#clearBtn")
  .addEventListener(
    "click",
    () => {

      textInput.value = "";

      results.innerHTML = `
        <p class="empty">
          Your decorated sentences
          will appear here ♡
        </p>
      `;

    }
  );


searchInput.addEventListener(
  "input",
  renderLibrary
);


/* Ctrl/Cmd + Enter */

textInput.addEventListener(
  "keydown",
  event => {

    if (
      (event.ctrlKey ||
       event.metaKey) &&
      event.key === "Enter"
    ) {

      generate();

    }

  }
);


renderLibrary();