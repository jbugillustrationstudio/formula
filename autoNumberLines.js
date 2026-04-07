const othersTextarea = document.querySelector('textarea[data-group="others"]');

othersTextarea.addEventListener("input", () => {
  const lines = othersTextarea.value
    .split("\n")
    .map((line) => line.replace(/^\d+\.\s*/, "")); // remove existing numbers

  // Only number lines that have content
  const newValue = lines
    .map((line, idx) => (line.trim() === "" ? "" : `${idx + 1}. ${line}`))
    .join("\n");

  othersTextarea.value = newValue;
  // Cursor automatically jumps to the end
});
