// Autocomplete configuration and logic
const autocompleteConfig = {
  default: {
    abbreviations: {
      as: [],
    },
    fallback: [],
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
  aortic: {
    abbreviations: {
      0: [
        "Trileaflet aortic valve. No stenosis. No regurgitation.",
        "Bioprosthetic aortic valve replacement appears well seated. No significant stenosis or regurgitation.",
        "Mechanical aortic valve replacement appears well seated. No significant stenosis or regurgitation.",
      ],
      aortic: [
        "Trileaflet aortic valve.",
        "Sclerotic trileaflet aortic valve.",
        "Grossly normal aortic valve.",
        "Bicuspid aortic valve. Commissures appears * o'clock and * o'clock with a raphe at * o'clock.",
        "Bioprosthetic aortic valve replacement appears well seated.",
        "Mechanical aortic valve appears well seated.",
        "Rheumatic aortic valve.",
        "Grossly normal aortic valve, appears trileaflet however difficult to assess due to suboptimal image quality.",
      ],
      stenosis: [
        "No stenosis.",
        "No significant stenosis.",
        "Mild stenosis.",
        "Mild to moderate stenosis.",
        "Moderate stenosis.",
        "Moderate to severe stenosis.",
        "Severe stenosis.",
      ],
      regurgitation: [
        "No regurgitation.",
        "No significant regurgitation.",
        "Trivial regurgitation.",
        "Mild regurgitation.",
        "Mild to moderate regurgitation.",
        "Moderate regurgitation.",
        "Moderate to severe regurgitation.",
        "Severe regurgitation.",
      ],
    },
    fallback: [
      "Trileaflet aortic valve.",
      "Sclerotic trileaflet aortic valve.",
      "Grossly normal aoritc valve.",
      "Bicuspid aortic valve. Commissures appears * o'clock and * o'clock with a raphe at * o'clock.",
      "Bioprosthetic aortic valve replacement appears well seated.",
      "Mechanical aortic valve appears well seated.",
      "Rheumatic aortic valve.",
      "Grossly normal aortic valve, appears trileaflet however difficult to assess due to suboptimal image quality.",
      "No stenosis.",
      "No significant stenosis.",
      "Mild stenosis.",
      "Mild to moderate stenosis.",
      "Moderate stenosis.",
      "Moderate to severe stenosis.",
      "Severe stenosis.",
      "No regurgitation.",
      "No significant regurgitation.",
      "Trivial regurgitation.",
      "Mild regurgitation.",
      "Mild to moderate regurgitation.",
      "Moderate regurgitation.",
      "Moderate to severe regurgitation.",
      "Severe regurgitation.",
    ],
  },
  aorta: {
    abbreviations: {
      0: ["Normal ascending aorta. Normal aortic root."],
      asc: [
        "Normal ascending aorta.",
        "Dilated ascending aorta.",
        "Mildly dilated ascending aorta.",
      ],
      aortic: [
        "Normal ascending aorta.",
        "Dilated ascending aorta.",
        "Mildly dilated ascending aorta.",
      ],
    },
    fallback: [
      "Normal ascending aorta.",
      "Dilated ascending aorta.",
      "Mildly dilated ascending aorta.",
      "Normal ascending aorta.",
      "Dilated ascending aorta.",
      "Mildly dilated ascending aorta.",
    ],
  },
  mitral: {
    abbreviations: {
      0: [
        "Thickened mitral valve leaflet. No stenosis. Trivial regurgitation.",
        "Normal mitral valve. No stenosis. Trivial regurgitation.",
        "Mitral valve repair/annuloplasty appears satisfactory. No significant stenosis or regurgitation.",
        "Mechanical mitral valve replacement appears well seated. No significant stenosis or regurgitation.",
      ],
      mitral: [
        "Thickened mitral valve leaflet.",
        "Normal mitral valve.",
        "Mildly thickened mitral valve. Posterior annular calcification noted.",
        "Mitral valve repair/annuloplasty appears satisfactory.",
        "Mechanical mitral valve replacement appears well seated.",
        "Diastolic doming of the anterior leaflet and restriction of the posterior leaflet consistent with Rheumatic mitral valve.",
        "Grossly normal mitral valve.",
      ],
      stenosis: [
        "No stenosis.",
        "No significant stenosis.",
        "Mild stenosis.",
        "Mild to moderate stenosis.",
        "Moderate stenosis.",
        "Moderate to severe stenosis.",
        "Severe stenosis.",
      ],
      regurgitation: [
        "No regurgitation.",
        "No significant regurgitation.",
        "Trivial regurgitation.",
        "Mild regurgitation.",
        "Mild to moderate regurgitation.",
        "Moderate regurgitation.",
        "Moderate to severe regurgitation.",
        "Severe regurgitation.",
      ],
    },
    fallback: [
      "Thickened mitral valve leaflet. No stenosis. Trivial regurgitation.",
      "Normal mitral valve. No stenosis. Trivial regurgitation.",
      "Mitral valve repair/annuloplasty appears satisfactory. No significant stenosis or regurgitation.",
      "Mechanical mitral valve replacement appears well seated. No significant stenosis or regurgitation.",
      "Thickened mitral valve leaflet.",
      "Normal mitral valve.",
      "Mildly thickened mitral valve. Posterior annular calcification noted.",
      "Mitral valve repair/annuloplasty appears satisfactory.",
      "Mechanical mitral valve replacement appears well seated.",
      "Diastolic doming of the anterior leaflet and restriction of the posterior leaflet consistent with Rheumatic mitral valve.",
      "Grossly normal mitral valve.",
      "No stenosis.",
      "No significant stenosis.",
      "Mild stenosis.",
      "Mild to moderate stenosis.",
      "Moderate stenosis.",
      "Moderate to severe stenosis.",
      "Severe stenosis.",
      "No regurgitation.",
      "No significant regurgitation.",
      "Trivial regurgitation.",
      "Mild regurgitation.",
      "Mild to moderate regurgitation.",
      "Moderate regurgitation.",
      "Moderate to severe regurgitation.",
      "Severe regurgitation.",
    ],
  },
  tricuspid: {
    abbreviations: {
      0: [
        "Normal tricuspid valve. Trivial regurgitation.",
        "Bioprosthetic tricuspid valve replacement appears well seated. No significant stenosis or regurgitation.",
        "Mechanical tricuspid valve replacement appears well seated. No significant stenosis or regurgitation.",
      ],
      tricuspid: [
        "Normal tricuspid valve.",
        "Thickened tricuspid valve leaflet.",
        "Grossly normal tricuspid valve.",
        "Bioprosthetic tricuspid valve replacement appears well seated.",
        "Mechanical tricuspid valve appears well seated.",
        "Tricuspid valve not well visualised.",
      ],
      regurgitation: [
        "No regurgitation.",
        "No significant regurgitation.",
        "Trivial regurgitation.",
        "Mild regurgitation.",
        "Mild to moderate regurgitation.",
        "Moderate regurgitation.",
        "Moderate to severe regurgitation.",
        "Severe regurgitation.",
      ],
    },
    fallback: [
      "Normal tricuspid valve.",
      "Thickened tricuspid valve leaflet.",
      "Grossly normal tricuspid valve.",
      "Bioprosthetic tricuspid valve replacement appears well seated.",
      "Mechanical tricuspid valve appears well seated.",
      "Tricuspid valve not well visualised.",
      "No regurgitation.",
      "No significant regurgitation.",
      "Trivial regurgitation.",
      "Mild regurgitation.",
      "Mild to moderate regurgitation.",
      "Moderate regurgitation.",
      "Moderate to severe regurgitation.",
      "Severe regurgitation.",
    ],
  },
  pulmonary: {
    abbreviations: {
      0: [
        "Normal pulmonary valve. No stenosis. Trivial regurgitaiton.",
        "Bioprosthetic pulmonary valve replacement appears well seated. No significant stenosis or regurgitation.",
        "Mechanical pulmonary valve replacement appears well seated. No significant stenosis or regurgitation.",
      ],
      pulmonary: [
        "Normal pulmonary valve.",
        "Grossly normal pulmonary valve.",
        "Pulmonary valve not well visualised.",
        "Bioprosthetic pulmonary valve replacement appears well seated.",
        "Mechanical pulmonary valve appears well seated.",
      ],
      stenosis: [
        "No stenosis.",
        "No significant stenosis.",
        "Mild stenosis.",
        "Mild to moderate stenosis.",
        "Moderate stenosis.",
        "Moderate to severe stenosis.",
        "Severe stenosis.",
      ],
      reg: [
        "No regurgitation.",
        "No significant regurgitation.",
        "Trivial regurgitation.",
        "Mild regurgitation.",
        "Mild to moderate regurgitation.",
        "Moderate regurgitation.",
        "Moderate to severe regurgitation.",
        "Severe regurgitation.",
      ],
    },
    fallback: [
      "Normal pulmonary valve.",
      "Grossly normal pulmonary valve.",
      "Pulmonary valve not well visualised.",
      "Bioprosthetic pulmonary valve replacement appears well seated.",
      "Mechanical pulmonary valve appears well seated.",
      "No stenosis.",
      "No significant stenosis.",
      "Mild stenosis.",
      "Mild to moderate stenosis.",
      "Moderate stenosis.",
      "Moderate to severe stenosis.",
      "Severe stenosis.",
      "No regurgitation.",
      "No significant regurgitation.",
      "Trivial regurgitation.",
      "Mild regurgitation.",
      "Mild to moderate regurgitation.",
      "Moderate regurgitation.",
      "Moderate to severe regurgitation.",
      "Severe regurgitation.",
    ],
  },
  others: {
    abbreviations: {
      0: [
        "Normal left ventricular size and systolic function. \nNormal right ventricular size and systolic function. \nNo significant valvular abnormalities was noted.",
      ],
      lv: [
        "Normal left ventricular size.",
        "Dilated left ventricular size.",
        "Upper limit of normal left ventricular size.",
        "Mildly dilated left ventricular size.",
        "Moderately dilated left ventricular size.",
        "Severely dilated left ventricualr size.",
      ],
      rv: [
        "Normal right ventricular size.",
        "Dilated right ventricular size.",
        "Upper limit of right left ventricular size.",
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
    // Sort fallback options alphabetically before filtering
    const sortedFallback = [...config.fallback].sort((a, b) =>
      a.localeCompare(b),
    );
    matchingSuggestions = sortedFallback.filter((opt) =>
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

    if (e.ctrlKey && e.key === "1") {
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

