/* =====================================================
   DECORATE MY TEXT
   VERSION 2
===================================================== */


/* =====================================================
   SYMBOL LIBRARY
===================================================== */

const SYMBOLS = [

  /* HEART */
  ["♡", "heart"],
  ["♥", "heart"],
  ["♥︎", "heart"],
  ["❤", "heart"],
  ["ღ", "heart"],
  ["ෆ", "heart"],
  ["❥", "heart"],
  ["❣", "heart"],
  ["𓆩♡𓆪", "heart"],
  ["♡₊˚", "heart"],
  ["♡⃝", "heart"],

  /* CUTE */
  ["୨୧", "cute"],
  ["𐙚", "cute"],
  ["꒰ა", "cute"],
  ["໒꒱", "cute"],
  ["ʚɞ", "cute"],
  ["૮₍˶ᵔ ᵕ ᵔ˶₎ა", "cute"],
  ["૮꒰ ˶• ༝ •˶꒱ა", "cute"],

  /* STAR */
  ["☆", "star"],
  ["★", "star"],
  ["✦", "star"],
  ["✧", "star"],
  ["✩", "star"],
  ["✪", "star"],
  ["✫", "star"],
  ["✬", "star"],
  ["✭", "star"],
  ["⋆", "star"],
  ["⟡", "star"],

  /* SPARKLE */
  ["˚", "sparkle"],
  ["₊", "sparkle"],
  ["‧", "sparkle"],
  ["⊹", "sparkle"],
  ["❋", "sparkle"],
  ["❈", "sparkle"],
  ["✧", "sparkle"],
  ["⋆｡°✩", "sparkle"],
  ["˚₊‧", "sparkle"],
  ["₊˚⊹", "sparkle"],

  /* FLOWER */
  ["❀", "flower"],
  ["✿", "flower"],
  ["❁", "flower"],
  ["ꕤ", "flower"],
  ["⚘", "flower"],
  ["𖧷", "flower"],
  ["❃", "flower"],
  ["❊", "flower"],

  /* SKY */
  ["☾", "moon"],
  ["☽", "moon"],
  ["☼", "sky"],
  ["☀︎", "sky"],
  ["☁︎", "sky"],
  ["☄︎", "sky"],
  ["☁️", "sky"],

  /* MUSIC */
  ["♫", "music"],
  ["♪", "music"],
  ["♬", "music"],
  ["♩", "music"],
  ["♭", "music"],
  ["𝄞", "music"],

  /* ARROWS */
  ["→", "arrow"],
  ["←", "arrow"],
  ["↗", "arrow"],
  ["↘", "arrow"],
  ["➜", "arrow"],
  ["➳", "arrow"],
  ["⟶", "arrow"],

  /* SHAPES */
  ["∞", "shape"],
  ["◇", "shape"],
  ["◆", "shape"],
  ["○", "shape"],
  ["●", "shape"],
  ["△", "shape"],
  ["▽", "shape"],
  ["□", "shape"],
  ["■", "shape"],

  /* DECORATIVE */
  ["⚜", "decorative"],
  ["❦", "decorative"],
  ["❧", "decorative"],
  ["꧁", "decorative"],
  ["꧂", "decorative"],
  ["༺", "decorative"],
  ["༻", "decorative"],
  ["ᶻ 𝗓 𐰁", "decorative"],

  /* ANCIENT */
  ["𓂀", "ancient"],
  ["𓆩", "ancient"],
  ["𓆪", "ancient"],
  ["𓂃", "ancient"],
  ["𓇼", "ancient"],

  /* EMOJI */
  ["☕", "emoji"],
  ["🍰", "emoji"],
  ["🧁", "emoji"],
  ["🍓", "emoji"],
  ["🎀", "emoji"],
  ["🧸", "emoji"],
  ["🥹", "emoji"],
  ["😭", "emoji"],
  ["✨", "emoji"],
  ["💗", "emoji"],
  ["💌", "emoji"],
  ["🌷", "emoji"],
  ["☁️", "emoji"],
  ["🌙", "emoji"],
  ["🎂", "emoji"],
  ["🎉", "emoji"],
  ["🎁", "emoji"],
  ["📸", "emoji"],
  ["🎧", "emoji"],
  ["🌸", "emoji"],
  ["🍒", "emoji"],
  ["🍪", "emoji"],
  ["🫶🏻", "emoji"],
  ["🪽", "emoji"],

  /* KAOMOJI */
  ["(˶ᵔ ᵕ ᵔ˶)", "kaomoji"],
  ["(˶˃ ᵕ ˂˶)", "kaomoji"],
  ["(╥﹏╥)", "kaomoji"],
  ["(｡•́‿•̀｡)", "kaomoji"],
  ["(≧▽≦)", "kaomoji"],
  ["(˵ •̀ ᴗ - ˵ ) ✧", "kaomoji"]

];


/* =====================================================
   VIBE CONFIG
===================================================== */

const VIBES = {

  cute: [

    text =>
      `${text} ${pick([
        "♡₊˚",
        "୨୧",
        "𐙚",
        "ෆ"
      ])} ${pick([
        "🎀",
        "🧸",
        "🍓",
        "🪽"
      ])}`,

    text =>
      `୨୧ ${text} ${pick([
        "♡",
        "ෆ",
        "𐙚"
      ])}`,

    text =>
      `꒰ა ${text} ${pick([
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


/* =====================================================
   CONTEXT DETECTOR
===================================================== */

const CONTEXTS = {

  birthday: {
    words: [
      "birthday",
      "bday",
      "born",
      "birth"
    ],

    decorations: [
      "🎂",
      "🎀",
      "🎁",
      "🎉",
      "♡",
      "୨୧",
      "✨"
    ]
  },


  love: {
    words: [
      "love",
      "lover",
      "loving",
      "boyfriend",
      "girlfriend",
      "husband",
      "wife",
      "favorite person",
      "my person"
    ],

    decorations: [
      "♡",
      "𐙚",
      "୨୧",
      "ෆ",
      "💗",
      "❦",
      "𓆩♡𓆪"
    ]
  },


  miss: {
    words: [
      "miss",
      "missing",
      "miss you",
      "i miss",
      "wish you were"
    ],

    decorations: [
      "☾",
      "♡",
      "🥹",
      "𐙚",
      "☁︎",
      "⋆｡°✩",
      "ෆ"
    ]
  },


  birthday: {
    words: [
      "birthday",
      "bday",
      "born"
    ],

    decorations: [
      "🎂",
      "🎀",
      "🎁",
      "🎉",
      "✨",
      "♡"
    ]
  },


  coffee: {
    words: [
      "coffee",
      "cafe",
      "café",
      "latte",
      "espresso",
      "matcha",
      "tea"
    ],

    decorations: [
      "☕",
      "🍰",
      "☁︎",
      "⋆",
      "♡",
      "🍓"
    ]
  },


  sunday: {
    words: [
      "sunday",
      "weekend",
      "slow morning",
      "lazy day"
    ],

    decorations: [
      "☁︎",
      "☕",
      "☀︎",
      "˚₊‧",
      "⋆｡°✩",
      "🌷"
    ]
  },


  concert: {
    words: [
      "concert",
      "stage",
      "idol",
      "fanmeeting",
      "festival",
      "show",
      "performance"
    ],

    decorations: [
      "🎧",
      "♫",
      "✦",
      "✨",
      "🎀",
      "😭",
      "🫶🏻"
    ]
  },


  sad: {
    words: [
      "sad",
      "cry",
      "crying",
      "hurt",
      "broken",
      "lonely",
      "alone",
      "pain",
      "tears"
    ],

    decorations: [
      "☾",
      "☁︎",
      "🥹",
      "😭",
      "♡",
      "⋆｡°✩"
    ]
  },


  happy: {
    words: [
      "happy",
      "happiest",
      "excited",
      "yay",
      "finally",
      "fun",
      "amazing"
    ],

    decorations: [
      "♡",
      "✦",
      "✨",
      "🎀",
      "🫶🏻",
      "🌷"
    ]
  },


  food: {
    words: [
      "food",
      "eat",
      "eating",
      "dinner",
      "lunch",
      "breakfast",
      "dessert",
      "cake",
      "cookie"
    ],

    decorations: [
      "🍰",
      "🧁",
      "🍓",
      "🍪",
      "☕",
      "♡"
    ]
  },


  music: {
    words: [
      "song",
      "music",
      "playlist",
      "listen",
      "lyrics",
      "album"
    ],

    decorations: [
      "♫",
      "♪",
      "♬",
      "☾",
      "✦",
      "⋆"
    ]
  }

};


/* =====================================================
   STATE
===================================================== */

let currentVibe = "cute";
let currentCategory = "all";


/* =====================================================
   HELPERS
===================================================== */

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


/* =====================================================
   DETECT CONTEXT
===================================================== */

function detectContexts(text) {

  const lower =
    text.toLowerCase();

  const matches = [];


  for (
    const [name, data]
    of Object.entries(CONTEXTS)
  ) {

    const found =
      data.words.some(
        word =>
          lower.includes(
            word.toLowerCase()
          )
      );


    if (found) {

      matches.push(name);

    }

  }


  return matches;

}


/* =====================================================
   GET CONTEXT DECORATIONS
===================================================== */

function getContextDecorations(
  text
) {

  const contexts =
    detectContexts(text);


  let decorations = [];


  contexts.forEach(context => {

    decorations.push(
      ...CONTEXTS[
        context
      ].decorations
    );

  });


  return decorations;

}


/* =====================================================
   SMART DECORATION
===================================================== */

function smartDecorate(
  text,
  vibe
) {

  const contexts =
    detectContexts(text);


  const decorations =
    getContextDecorations(text);


  /*
    RANDOM VIBE
  */

  if (vibe === "random") {

    const available =
      Object.keys(VIBES);

    vibe =
      pick(available);

  }


  /*
    Kalau ada konteks,
    kasih sedikit prioritas
    ke dekorasi yang relevan.
  */

  if (
    contexts.length > 0 &&
    Math.random() < 0.65
  ) {

    const d1 =
      pick(decorations);

    const d2 =
      pick(decorations);


    const styles = [

      `${d1} ${text} ${d2}`,

      `${text} ${d1} ${d2}`,

      `${d1} ${text} ♡`,

      `${text} ${d1} ${pick([
        "˚₊‧",
        "✦",
        "୨୧",
        "⋆｡°✩"
      ])}`

    ];


    return pick(styles);

  }


  /*
    DEFAULT VIBE
  */

  return pick(
    VIBES[vibe]
  )(text);

}


/* =====================================================
   GENERATE
===================================================== */

function generate() {

  const input =
    document.querySelector(
      "#textInput"
    );

  const output =
    document.querySelector(
      "#results"
    );


  if (!input || !output) {

    console.error(
      "Required HTML element missing."
    );

    return;

  }


  const text =
    clean(input.value);


  if (!text) {

    output.innerHTML = `
      <p class="empty">
        Write something first yaa ♡
      </p>
    `;

    return;

  }


  const generated = [];


  let safety = 0;


  while (
    generated.length < 6 &&
    safety < 100
  ) {

    const result =
      smartDecorate(
        text,
        currentVibe
      );


    if (
      !generated.includes(
        result
      )
    ) {

      generated.push(result);

    }


    safety++;

  }


  output.innerHTML =
    generated.map(
      (text, index) => `

        <article class="result">

          <div class="result-text">
            ${escapeHTML(text)}
          </div>

          <div class="result-footer">

            <span class="result-tag">
              ${currentVibe.toUpperCase()}
              · ${index + 1}
            </span>

            <button class="copy-btn">
              Copy ♡
            </button>

          </div>

        </article>

      `
    ).join("");


  setupCopyButtons();

}


/* =====================================================
   COPY
===================================================== */

async function copyToClipboard(
  text
) {

  try {

    if (
      navigator.clipboard &&
      window.isSecureContext
    ) {

      await navigator.clipboard
        .writeText(text);

      return true;

    }

  }

  catch (error) {

    console.log(
      "Clipboard API failed."
    );

  }


  try {

    const textarea =
      document.createElement(
        "textarea"
      );


    textarea.value = text;


    textarea.style.position =
      "fixed";

    textarea.style.left =
      "-9999px";


    document.body.appendChild(
      textarea
    );


    textarea.focus();

    textarea.select();


    const success =
      document.execCommand(
        "copy"
      );


    document.body.removeChild(
      textarea
    );


    return success;

  }

  catch (error) {

    console.error(
      "Copy failed:",
      error
    );

    return false;

  }

}


function setupCopyButtons() {

  document
    .querySelectorAll(
      ".copy-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        async () => {

          const text =
            button
              .closest(".result")
              .querySelector(
                ".result-text"
              )
              .textContent;


          const success =
            await copyToClipboard(
              text
            );


          if (success) {

            button.textContent =
              "✓ Copied!";

          }

          else {

            button.textContent =
              "Copy failed";

          }


          setTimeout(() => {

            button.textContent =
              "Copy ♡";

          }, 1100);

        }
      );

    });

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(text) {

  return text.replace(
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


/* =====================================================
   VIBE BUTTONS
===================================================== */

document
  .querySelectorAll(
    ".vibe"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".vibe"
          )
          .forEach(item =>
            item.classList.remove(
              "active"
            )
          );


        button.classList.add(
          "active"
        );


        currentVibe =
          button.dataset.vibe;

      }
    );

  });


/* =====================================================
   GENERATE BUTTON
===================================================== */

document
  .querySelector(
    "#generateBtn"
  )
  .addEventListener(
    "click",
    generate
  );


/* =====================================================
   SURPRISE BUTTON
===================================================== */

document
  .querySelector(
    "#surpriseBtn"
  )
  .addEventListener(
    "click",
    () => {

      const vibes =
        [
          ...document
            .querySelectorAll(
              ".vibe"
            )
        ];


      pick(vibes).click();

      generate();

    }
  );


/* =====================================================
   CLEAR
===================================================== */

document
  .querySelector(
    "#clearBtn"
  )
  .addEventListener(
    "click",
    () => {

      document
        .querySelector(
          "#textInput"
        )
        .value = "";


      document
        .querySelector(
          "#results"
        )
        .innerHTML = `
          <p class="empty">
            Your decorated sentences
            will appear here ♡
          </p>
        `;

    }
  );


/* =====================================================
   CATEGORY
===================================================== */

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


const categories =
  document.querySelector(
    "#categories"
  );


const library =
  document.querySelector(
    "#library"
  );


const searchInput =
  document.querySelector(
    "#searchInput"
  );


if (
  categories &&
  library &&
  searchInput
) {


  categories.innerHTML =
    categoryList
      .map(category => `

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

      `)
      .join("");


  function renderLibrary() {

    const search =
      searchInput.value
        .toLowerCase();


    const filtered =
      SYMBOLS.filter(
        ([symbol, category]) => {

          const matchCategory =
            currentCategory === "all" ||
            category === currentCategory;


          const matchSearch =
            `${symbol} ${category}`
              .toLowerCase()
              .includes(search);


          return (
            matchCategory &&
            matchSearch
          );

        }
      );


    library.innerHTML =
      filtered
        .map(
          ([symbol, category]) => `

            <button
              class="symbol"
              data-symbol="${escapeHTML(symbol)}"
            >

              ${escapeHTML(symbol)}

              <small>
                ${category}
              </small>

            </button>

          `
        )
        .join("");


    library
      .querySelectorAll(
        ".symbol"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          async () => {

            const symbol =
              button.dataset.symbol;


            const success =
              await copyToClipboard(
                symbol
              );


            if (success) {

              const old =
                button.innerHTML;


              button.innerHTML =
                `✓<small>Copied</small>`;


              setTimeout(() => {

                button.innerHTML =
                  old;

              }, 800);

            }

          }
        );

      });

  }


  categories
    .querySelectorAll(
      ".category"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          categories
            .querySelectorAll(
              ".category"
            )
            .forEach(item =>
              item.classList.remove(
                "active"
              )
            );


          button.classList.add(
            "active"
          );


          currentCategory =
            button.dataset.category;


          renderLibrary();

        }
      );

    });


  searchInput.addEventListener(
    "input",
    renderLibrary
  );


  renderLibrary();

}


/* =====================================================
   KEYBOARD SHORTCUT
===================================================== */

document
  .querySelector(
    "#textInput"
  )
  .addEventListener(
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
