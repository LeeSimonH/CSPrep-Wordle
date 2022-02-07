const game = {
  /* ----- DATA ----- */
  listOfWords: [
    "earth",
    "which",
    "there",
    "their",
    "about",
    "would",
    "these",
    "other",
    "words",
    "could",
    "write",
    "first",
    "water",
    "after",
    "where",
    "right",
    "think",
    "three",
    "years",
    "place",
    "sound",
    "great",
    "again",
    "still",
    "every",
    "small",
    "found",
    "those",
    "never",
    "under",
    "might",
    "while",
    "house",
    "world",
    "below",
    "asked",
    "going",
    "large",
    "until",
    "along",
    "shall",
    "being",
    "often",
    "earth",
    "began",
    "since",
    "study",
    "night",
    "light",
    "above",
    "paper",
    "parts",
    "young",
    "story",
    "point",
    "times",
    "heard",
    "whole",
    "white",
    "given",
    "means",
    "music",
    "miles",
    "thing",
    "today",
    "later",
    "using",
    "money",
    "lines",
    "order",
    "group",
    "among",
    "learn",
    "known",
    "space",
    "table",
    "early",
    "trees",
    "short",
    "hands",
    "state",
    "black",
    "shown",
    "stood",
    "front",
    "voice",
    "kinds",
    "makes",
    "comes",
    "close",
    "power",
    "lived",
    "vowel",
    "taken",
    "built",
    "heart",
    "ready",
    "quite",
    "class",
    "bring",
    "round",
    "horse",
    "shows",
    "piece",
    "green",
    "stand",
    "birds",
    "start",
    "river",
    "tried",
    "least",
    "field",
    "whose",
    "girls",
    "leave",
    "added",
    "color",
    "third",
    "hours",
    "moved",
    "plant",
    "doing",
    "names",
    "forms",
    "heavy",
    "ideas",
    "cried",
    "check",
    "floor",
    "begin",
    "woman",
    "alone",
    "plane",
    "spell",
    "watch",
    "carry",
    "wrote",
    "clear",
    "named",
    "books",
    "child",
    "glass",
    "human",
    "takes",
    "party",
    "build",
    "seems",
    "blood",
    "sides",
    "seven",
    "mouth",
    "solve",
    "north",
    "value",
    "death",
    "maybe",
    "happy",
    "tells",
    "gives",
    "looks",
    "shape",
    "lives",
    "steps",
    "areas",
    "sense",
    "speak",
    "force",
    "ocean",
    "speed",
    "women",
    "metal",
    "south",
    "grass",
    "scale",
    "cells",
    "lower",
    "sleep",
    "wrong",
    "pages",
    "ships",
    "needs",
    "rocks",
    "eight",
    "major",
    "level",
    "total",
    "ahead",
    "reach",
    "stars",
    "store",
    "sight",
    "terms",
    "catch",
    "works",
    "board",
    "cover",
    "songs",
    "equal",
    "stone",
    "waves",
    "guess",
    "dance",
    "spoke",
    "break",
    "cause",
    "radio",
    "weeks",
    "lands",
    "basic",
    "liked",
    "trade",
    "fresh",
    "final",
    "fight",
    "meant",
    "drive",
    "spent",
    "local",
    "waxes",
    "knows",
    "train",
    "bread",
    "homes",
    "teeth",
    "coast",
    "thick",
    "brown",
    "clean",
    "quiet",
    "sugar",
    "facts",
    "steel",
    "forth",
    "rules",
    "notes",
    "units",
    "peace",
    "month",
    "verbs",
    "seeds",
    "helps",
    "sharp",
    "visit",
    "woods",
    "chief",
    "walls",
    "cross",
    "wings",
    "grown",
    "cases",
    "foods",
    "crops",
    "fruit",
    "stick",
    "wants",
    "stage",
    "sheep",
    "nouns",
    "plain",
    "drink",
    "bones",
    "apart",
    "turns",
    "moves",
    "touch",
    "angle",
    "based",
    "range",
    "marks",
    "tired",
    "older",
    "farms",
    "spend",
    "shoes",
    "goods",
    "chair",
    "twice",
    "cents",
    "empty",
    "alike",
    "style",
    "broke",
    "pairs",
    "count",
    "enjoy",
    "score",
    "shore",
    "roots",
    "paint",
    "heads",
    "shook",
    "serve",
    "angry",
    "crowd",
    "wheel",
    "quick",
    "dress",
    "share",
    "alive",
    "noise",
    "solid",
    "cloth",
    "signs",
    "hills",
    "types",
    "drawn",
    "worth",
    "truck",
    "piano",
    "upper",
    "loved",
    "usual",
    "faces",
    "drove",
    "cabin",
    "boats",
    "towns",
    "proud",
    "court",
    "model",
    "prime",
    "fifty",
    "plans",
    "yards",
    "prove",
    "tools",
    "price",
    "sheet",
    "smell",
    "boxes",
    "raise",
    "match",
    "truth",
    "roads",
    "threw",
    "enemy",
    "lunch",
    "chart",
    "scene",
    "graph",
    "doubt",
    "guide",
    "winds",
    "block",
    "grain",
    "smoke",
    "mixed",
    "games",
    "wagon",
    "sweet",
    "topic",
    "extra",
    "plate",
    "title",
    "knife",
    "fence",
    "falls",
    "cloud",
    "wheat",
    "plays",
    "enter",
    "broad",
    "steam",
    "atoms",
    "press",
    "lying",
    "basis",
    "clock",
    "taste",
    "grows",
    "thank",
    "storm",
    "agree",
    "brain",
    "track",
    "smile",
    "funny",
    "beach",
    "stock",
    "hurry",
    "saved",
    "sorry",
    "giant",
    "trail",
    "offer",
    "ought",
    "rough",
    "daily",
    "avoid",
    "keeps",
    "throw",
    "allow",
    "cream",
    "laugh",
    "edges",
    "teach",
    "frame",
    "bells",
    "dream",
    "magic",
  ],
  masterWordString: "",
  currentGuess: "",
  attemptCounter: 0,
  statistics: {
    played: 0,
    wins: 0,
    streak: 0,
    maxStreak: 0,
    guessDistribution: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    },
  },
  status: "in progress",

  /* ----- FUNCTIONALITY ----- */

  selectMasterWord: () => {
    let masterWordString =
      game.listOfWords[Math.floor(Math.random() * game.listOfWords.length)];
    game.masterWordString = masterWordString;
  },

  reset: () => {
    game.currentGuess = "";
    game.attemptCounter = 0;
    game.status = "in progress";
    game.selectMasterWord();
    // reset all tiles, set 1st tile to active
    let allTiles = Array.from(document.querySelectorAll(".tile"));
    allTiles.forEach((tile) => {
      tile.textContent = "";
      tile.classList.remove(
        "active",
        "guessed",
        "correct",
        "almost",
        "incorrect"
      );
    });
    allTiles[0].classList.toggle("active");
    // reset all rows, set first row to active
    let allRows = Array.from(document.querySelectorAll(".row"));
    allRows.forEach((row) => row.classList.remove("active"));
    allRows[0].classList.toggle("active");
    // reset all keys
    let allKeys = Array.from(document.querySelectorAll(".key"));
    allKeys.forEach((key) => key.classList.remove("correct", "incorrect"));
    resetBtn.style.cssText = "cursor: default; background: #3a3a3c";
    resetBtn.removeEventListener("click", () => game.reset());
  },

  evaluate: () => {
    if (game.currentGuess === game.masterWordString) {
      game.statistics.played++;
      game.statistics.wins++;
      game.statistics.streak++;
      if (game.statistics.streak >= game.statistics.maxStreak)
        game.statistics.maxStreak = game.statistics.streak;
      game.statistics.guessDistribution[game.attemptCounter]++;
      game.status = "win";
    }
    if (game.status === "in progress" && game.attemptCounter === 6) {
      game.statistics.played++;
      game.statistics.streak = 0;
      game.status = "lose";
    }
  },

  showStats: () => {
    let message = `
    Games Played: ${game.statistics.played} \n
    Win %: ${game.statistics.wins / game.statistics.played} \n
    Current Streak: ${game.statistics.streak} \n
    Max Streak: ${game.statistics.maxStreak}
    `;
    alert(message);
  },
};

const UI = {
  board: {
    rows: {},
  },
};

// populating UI object to access DOM elements
const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
  const tiles = Array.from(row.children);
  let currentRowID = row.id;
  UI.board.rows[currentRowID] = tiles.reduce((obj, tile) => {
    obj[tile.id] = tile;
    return obj;
  }, {});
});

function keyListener(key) {
  if (game.masterWordString === "") game.selectMasterWord(); // select masterword

  let rowID = tileFuncs.checkCurrentID("row");
  let currentRow = document.getElementById(rowID);
  let tileID = tileFuncs.checkCurrentID("tile");
  let currentTile = document.getElementById(tileID);

  // must be ENTER, BACKSPACE, or [A-Z]
  // if ENTER
  if (key === "Enter") {
    // only does something if current tile is last AND is not empty
    if (tileID[1] === "5" && currentTile.textContent !== "") {
      tileFuncs.updateTiles(); // update colors of current row
      // check if current guess is correct
      if (currentRow.nextElementSibling) {
        // if next row exists
        let nextRow = currentRow.nextElementSibling;
        // deactivate current row&[x5]tile, activate next row/[x1] tile
        nextTile = Array.from(nextRow.children)[0];
        tileFuncs.toggle("active", currentTile, currentRow, nextRow, nextTile);
      }
      game.attemptCounter++;
      game.evaluate();
      if (game.status === "win" || game.status == "lose") {
        // deactivate current row and tile
        tileFuncs.toggle("active", currentRow, currentTile);
        // activate reset button
        resetBtn.style.cssText = "cursor: pointer; background: #7a7a7a";
        resetBtn.addEventListener("click", () => game.reset());
      } else game.currentGuess = "";
    }
  }

  // if BACKSPACE
  if (key === "Backspace") {
    if (tileID[1] === "5" && currentTile.textContent !== "") {
      tileFuncs.clear(currentTile);
      game.currentGuess = game.currentGuess.slice(
        0,
        game.currentGuess.length - 1
      ); // remove last char of current guess
    } else if (currentTile.previousElementSibling) {
      let previousTile = currentTile.previousElementSibling;
      game.currentGuess = game.currentGuess.slice(
        0,
        game.currentGuess.length - 1
      ); // remove last char of current guess
      if (previousTile.textContent !== "") {
        // if previous tile is not empty
        tileFuncs.clear(previousTile);
        // deactivate current tile, activate previous tile
        tileFuncs.toggle("active", currentTile, previousTile);
      }
    }
  }

  // if A-Z
  if (/[a-zA-Z]/.test(key) && key.length === 1) {
    if (currentTile.textContent === "") {
      // only does something if tile is empty
      game.currentGuess += key; // add char to current guess
      tileFuncs.fill(currentTile, key); // add char to current tile
    }
    // if not last tile, deactivate current tile, activate next tile;
    if (tileID[1] !== "5")
      tileFuncs.toggle("active", currentTile, currentTile.nextElementSibling);
  }
}

const tileFuncs = {
  checkCurrentID: (domElType) =>
    document.querySelector(`.active.${domElType}`).id,
  toggle: (state, ...domEls) =>
    domEls.forEach((domEl) => domEl.classList.toggle(state)),
  fill: (domEl, char) => (domEl.textContent = `${char.toUpperCase()}`),
  clear: (domEl) => (domEl.textContent = ""),
  updateTiles: () => {
    let currentRowTiles = Array.from(
      document.querySelector(".active.row").children
    );
    // check if any letters are correct first
    let guessLtrArr = game.currentGuess.split("");
    let masterLtrsArr = game.masterWordString.split(""); // array
    for (let i = 0; i < 5; i++) {
      // iterate through letters using index
      if (masterLtrsArr[i] === guessLtrArr[i]) {
        // if right index
        tileFuncs.toggle("correct", currentRowTiles[i]); // toggle tiles green
        let ltrKey = document.getElementById(guessLtrArr[i]);
        ltrKey.classList.add("correct"); // toggle keyboard key green
        // mutate chars at index in both array and guess, should not be same char
        masterLtrsArr[i] = "_";
        guessLtrArr[i] = "-";
      }
    }

    // count remaining chars
    let masterLtrCache = masterLtrsArr.reduce((obj, ltr) => {
      ltr in obj ? obj[ltr]++ : (obj[ltr] = 1);
      return obj;
    }, {});

    // iterate chars of through mutated guess - only 'almost' or 'incorrect'
    for (let i = 0; i < 5; i++) {
      let currentTile = currentRowTiles[i];
      let currentLtr = guessLtrArr[i];
      if (currentLtr !== "-") {
        if (masterLtrCache[currentLtr] > 0) {
          // if value is greater than zero
          tileFuncs.toggle("almost", currentTile);
          masterLtrCache[currentLtr]--;
        } else {
          let ltrKey = document.getElementById(currentLtr);
          if (!ltrKey.classList.contains("correct"))
            ltrKey.classList.add("incorrect"); // toggle keyboard key grey
          tileFuncs.toggle("incorrect", currentTile);
        }
      }
    }
  },
};

document.addEventListener("keydown", (e) => keyListener(e.key));

const allKeys = document.querySelectorAll(".key");
allKeys.forEach((key) => {
  key.addEventListener("click", () => keyListener(key.id));
});

const statsBtn = document.getElementById("stats");
statsBtn.addEventListener("click", () => game.showStats());

const resetBtn = document.getElementById("reset");
