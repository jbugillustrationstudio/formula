// Autocomplete configuration and logic
const autocompleteConfig = {
  default: {
    abbreviations: {
      as: [
        "mild aortic stenosis",
        "moderate aortic stenosis",
        "severe aortic stenosis",
      ],
      ar: [
        "mild aortic regurgitation",
        "moderate aortic regurgitation",
        "severe aortic regurgitation",
      ],
      mv: ["normal mitral valve", "thickened mitral valve"],
    },
    fallback: [
      "mild aortic stenosis",
      "moderate aortic stenosis",
      "severe aortic stenosis",
      "mild aortic regurgitation",
      "moderate aortic regurgitation",
      "severe aortic regurgitation",
      "normal mitral valve",
      "thickened mitral valve",
    ],
  },
  lvventricle: {
    abbreviations: {
      0: [
        "Normal left ventricular size. Normal systolic function. Normal wall thickness. No obvious regional wall motion abnormalities. Normal left sided filling pressure.",
      ],
      size: [
        "Normal left ventricular size.",
        "Dilated left ventricular size.",
        "Upper limit of normal left ventricular size.",
        "Mildly dilated left ventricular size.",
        "Moderately dilated left ventricular size.",
        "Severely dilated left ventricualr size.",
      ],
      function: [
        "Normal systolic function.",
        "Low normal systolic function.",
        "Mildly reduced systolic function",
        "Mild to moderately reduced systolic function.",
        "Moderately reduced systolic function.",
        "Moderate to severely reduced systolic function.",
        "Severely reduced systolic function.",
      ],
      wall: [
        "Normal wall thickness.",
        "Upper limit of normal wall thickness.",
        "Mildly increased wall thickness.",
        "Moderately increased wall thickness.",
        "Seveverly increased wall thickness.",
      ],
      regional: [
        "No regional wall motion abnormalities.",
        "No obvious regional wall motion abnormalities on suboptimal endocardial definition.",
        "Unable to exclude wall motion abnormalities.",
        "*** appears ***.",
      ],
      filling: [
        "Normal left sided filling pressure.",
        "Grade I diastolic with normal left sided filling pressure.",
        "Elevated left sided filling pressure.",
        "Indeterminate left sided filling pressure.",
      ],
    },
    fallback: [
      "Normal left ventricular size.",
      "Dilated left ventricular size.",
      "Low normal left ventricular size.",
      "Mildly dilated left ventricular size.",
      "Moderately dilated left ventricular size.",
      "Severely dilated left ventricualr size.",
      "Normal systolic function.",
      "Low normal systolic function.",
      "Mildly reduced systolic function",
      "Mild to moderately reduced systolic function.",
      "Moderately reduced systolic function.",
      "Moderate to severely reduced systolic function.",
      "Severely reduced systolic function.",
      "Normal wall thickness.",
      "Upper limit of normal wall thickness.",
      "Mildly increased wall thickness.",
      "Moderately increased wall thickness.",
      "Seveverly increased wall thickness.",
      "No regional wall motion abnormalities.",
      "No obvious regional wall motion abnormalities on suboptimal endocardial definition.",
      "Unable to exclude wall motion abnormalities.",
      "*** appears ***.",
      "Normal left sided filling pressure.",
      "Grade I diastolic with normal left sided filling pressure.",
      "Elevated left sided filling pressure.",
      "Indeterminate left sided filling pressure.",
    ],
  },
  rvventricle: {
    abbreviations: {
      0: ["Normal right ventricular size. Normal systolic function."],
      size: [
        "Normal right ventricular size.",
        "Dilated right ventricular size.",
        "Upper limit of normal right ventricular size.",
        "Mildly dilated right ventricular size.",
        "Moderately dilated right ventricular size.",
        "Severely dilated right ventricualr size.",
      ],
      function: [
        "Normal systolic function.",
        "Low normal systolic function.",
        "Mildly reduced systolic function",
        "Mild to moderately reduced systolic function.",
        "Moderately reduced systolic function.",
        "Moderate to severely reduced systolic function.",
        "Severely reduced systolic function.",
      ],
      mcconnell: [
        "Mid RV free wall dilatation and akinesia with hyperdynamic apex, consistent with McConnell's sign.",
      ],
    },
    fallback: [
      "Normal right ventricular size.",
      "Dilated right ventricular size.",
      "Upper limit of normal right ventricular size.",
      "Mildly dilated right ventricular size.",
      "Moderately dilated right ventricular size.",
      "Severely dilated right ventricualr size.",
      "Normal systolic function.",
      "Low normal systolic function.",
      "Mildly reduced systolic function",
      "Mild to moderately reduced systolic function.",
      "Moderately reduced systolic function.",
      "Moderate to severely reduced systolic function.",
      "Severely reduced systolic function.",
      "Mid RV free wall dilatation and akinesia with hyperdynamic apex, consistent with McConnell's sign.",
    ],
  },
  atrium: {
    abbreviations: {
      0: [
        "Normal left atrium size. Normal right atrium size. Interatrial septum appears intact on both 2D and colour Doppler. Inferior vena cava appears normal in size with normal respiratory variation.",
      ],
      la: [
        "Normal left atrium size.",
        "Dilated left atrium size.",
        "Upper limit of normal left atrium size.",
        "Mildly dilated left atrium size.",
        "Moderately dilated left atrium size.",
        "Severely dilated left atrium size.",
      ],
      ra: [
        "Normal right atrium size.",
        "Dilated right atrium size.",
        "Upper limit of normal right atrium size.",
        "Mildly dilated right atrium size.",
        "Moderately dilated right atrium size.",
        "Severely dilated right atrium size.",
      ],
      ias: [
        "Interatrial septum appears intact on both 2D and colour Doppler.",
        "Interatrial septum appears mobile however intact on both 2D and colour Doppler.",
        "PFO noted on colour Doppler.",
        "Interatrial septum appears aneurysmal without evidence of a PFO on this TTE.",
        "Interatrial septum appears aneurysmal with evidence of a PFO shown on colour Doppler.",
        "Lipomatous hypertrophy of the interatrial septum however appears intact on both 2D and colour Doppler.",
        "Mild lipomatous hypertrophy of the interatrial septum however appears intact on both 2D and colour Doppler.",
        "Amplatzer Occluder appears situ and well seated on both 2D and colour Doppler.",
        "Interatrial septum repair noted with no obvious shunt on both 2D and colour Doppler.",
      ],
      ivc: [
        "Inferior vena cava appears normal in size with normal respiratory variation.",
        "Inferior vena cava appears normal in size with reduced respiratory variation.",
        "Inferior vena cava appears dilated in size with normal respiratory variation.",
        "Inferior vena cava appears dilated in size with reduced respiratory variation.",
        "Inferior vena cava was not well visualised.",
        "Inferior vena cava was not visualised.",
      ],
    },
    fallback: [
      "Normal left atrium size.",
      "Dilated left atrium size.",
      "Upper limit of normal left atrium size.",
      "Mildly dilated left atrium size.",
      "Moderately dilated left atrium size.",
      "Severely dilated left atrium size.",
      "Normal right atrium size.",
      "Dilated right atrium size.",
      "Upper limit of normal right atrium size.",
      "Mildly dilated right atrium size.",
      "Moderately dilated right atrium size.",
      "Severely dilated right atrium size.",
      "Interatrial septum appears intact on both 2D and colour Doppler.",
      "Interatrial septum appears mobile however intact on both 2D and colour Doppler.",
      "PFO noted on colour Doppler.",
      "Interatrial septum appears aneurysmal without evidence of a PFO on this TTE.",
      "Interatrial septum appears aneurysmal with evidence of a PFO shown on colour Doppler.",
      "Lipomatous hypertrophy of the interatrial septum however appears intact on both 2D and colour Doppler.",
      "Mild lipomatous hypertrophy of the interatrial septum however appears intact on both 2D and colour Doppler.",
      "Amplatzer Occluder appears situ and well seated on both 2D and colour Doppler.",
      "Interatrial septum repair noted with no obvious shunt on both 2D and colour Doppler.",
      "Inferior vena cava appears normal in size with normal respiratory variation.",
      "Inferior vena cava appears normal in size with reduced respiratory variation.",
      "Inferior vena cava appears dilated in size with normal respiratory variation.",
      "Inferior vena cava appears dilated in size with reduced respiratory variation.",
      "Inferior vena cava was not well visualised.",
      "Inferior vena cava was not visualised.",
    ],
  },
  tricuspid: {
    abbreviations: {
      tr: ["Mild tricuspid regurgitation", "Tricuspid valve normal"],
      ph: ["Severe pulmonary hypertension"],
    },
    fallback: [
      "Mild tricuspid regurgitation",
      "Severe pulmonary hypertension",
      "Tricuspid valve normal",
    ],
  },
  others: {
    abbreviations: {
      lv: ["Normal left ventricular size and systolic function."],
      rv: ["Normal right ventricular size and systolic function."],
    },
    fallback: [
      "Normal left ventricular size and systolic function.",
      "Normal right ventricular size and systolic function.",
      "No significant valvular",
    ],
  },
  // others: { disableAutocomplete: true },
};

let currentTextarea = null;
let lastFocusedTextarea = null;
let matchingSuggestions = [];
let highlightedIndex = -1;

let othersHighlightedIndex = -1;
const othersSearch = document.getElementById("others-search");
const othersList = document.getElementById("others-list");
const othersListItems = Array.from(othersList.querySelectorAll("li"));

const textareas = document.querySelectorAll(".textarea");
const suggestionsBox = document.querySelector(".suggestions");
const textareasArray = Array.from(textareas);
let currentTextareaIndex = 0;

function insertText(text, replaceLastWord = false) {
  if (!lastFocusedTextarea) return;

  text = text.trim();

  if (replaceLastWord) {
    const lines = lastFocusedTextarea.value.split("\n");
    const lastLine = lines[lines.length - 1];
    const words = lastLine.split(/\s+/);
    words[words.length - 1] = text;
    lines[lines.length - 1] = words.join(" ");
    lastFocusedTextarea.value = lines.join("\n") + " ";
  } else {
    const value = lastFocusedTextarea.value;
    lastFocusedTextarea.value =
      value && !value.endsWith(" ") ? value + " " + text : value + text;
    lastFocusedTextarea.value += " ";
  }

  lastFocusedTextarea.focus();
}

function updateSuggestions() {
  if (!currentTextarea) return;
  const group = currentTextarea.dataset.group || "default";
  const config = autocompleteConfig[group] || autocompleteConfig.default;
  if (config.disableAutocomplete) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  const lastWord = currentTextarea.value
    .trim()
    .split(/\s+/)
    .pop()
    .toLowerCase();
  if (!lastWord) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  matchingSuggestions = [];
  if (config.abbreviations) {
    for (const abbr in config.abbreviations) {
      if (abbr.startsWith(lastWord) || lastWord.startsWith(abbr)) {
        matchingSuggestions = config.abbreviations[abbr];
        break;
      }
    }
  }
  if (matchingSuggestions.length === 0 && config.fallback) {
    matchingSuggestions = config.fallback.filter((opt) =>
      opt.toLowerCase().startsWith(lastWord),
    );
  }
  if (matchingSuggestions.length === 0) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  suggestionsBox.innerHTML = matchingSuggestions
    .map(
      (s, i) =>
        `<li class="px-2 py-1 cursor-pointer ${i === highlightedIndex ? "bg-blue-200" : "hover:bg-blue-100"}">${s}</li>`,
    )
    .join("");
  suggestionsBox.classList.remove("hidden");

  const highlightedItem = suggestionsBox.querySelector(".bg-blue-200");
  if (highlightedItem) highlightedItem.scrollIntoView({ block: "nearest" });
}
function focusTextarea(index) {
  currentTextareaIndex = index;
  currentTextarea = textareasArray[currentTextareaIndex];
  lastFocusedTextarea = currentTextarea;
  currentTextarea.focus();
}

textareasArray.forEach((t, idx) => {
  t.addEventListener("focus", () => {
    currentTextareaIndex = idx;
    currentTextarea = t;
    lastFocusedTextarea = t;
  });
  t.addEventListener("input", () => {
    highlightedIndex = -1;
    updateSuggestions();
  });
  t.addEventListener("keydown", (e) => {
    if (!suggestionsBox.classList.contains("hidden")) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        highlightedIndex = (highlightedIndex + 1) % matchingSuggestions.length;
        updateSuggestions();
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        highlightedIndex =
          (highlightedIndex - 1 + matchingSuggestions.length) %
          matchingSuggestions.length;
        updateSuggestions();
      }
      if (e.key === "Enter" && highlightedIndex >= 0) {
        e.preventDefault();
        insertText(matchingSuggestions[highlightedIndex], true);
        suggestionsBox.classList.add("hidden");
      }
    }

    if (e.ctrlKey && e.key === "ArrowRight") {
      e.preventDefault();
      othersSearch.focus();
      othersHighlightedIndex = -1;
      updateOthersHighlight();
    }

    if (e.ctrlKey && e.key === "ArrowDown") {
      e.preventDefault();
      focusTextarea((currentTextareaIndex + 1) % textareasArray.length);
    }
    if (e.ctrlKey && e.key === "ArrowUp") {
      e.preventDefault();
      focusTextarea(
        (currentTextareaIndex - 1 + textareasArray.length) %
          textareasArray.length,
      );
    }
  });
});
