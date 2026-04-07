// Auto-number lines in "Others" textarea while typing
const othersTextarea = document.querySelector('textarea[data-group="others"]');

othersTextarea.addEventListener("input", () => {
  const lines = othersTextarea.value.split("\n").map((line) => {
    // remove numbering only if line has content
    return line.replace(/^\d+\.\s*/, "");
  });

  othersTextarea.value = lines
    .map((line, idx) => `${idx + 1}. ${line}`)
    .join("\n");
});
