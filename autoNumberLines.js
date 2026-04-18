// const othersTextarea = document.querySelector('textarea[data-group="others"]');

// othersTextarea.addEventListener("input", () => {
//   const lines = othersTextarea.value
//     .split("\n")
//     .map((line) => line.replace(/^\d+\.\s*/, "")); // remove existing numbers

//   // Only number lines that have content
//   const newValue = lines
//     .map((line, idx) => (line.trim() === "" ? "" : `${idx + 1}. ${line}`))
//     .join("\n");

//   othersTextarea.value = newValue;
//   // Cursor automatically jumps to the end
// });
const othersTextarea = document.querySelector('textarea[data-group="others"]');

othersTextarea.addEventListener("input", () => {
  const cursorPos = othersTextarea.selectionStart;

  const lines = othersTextarea.value.split("\n");

  let charCount = 0;
  let newCursorPos = cursorPos;

  const newLines = lines.map((line, idx) => {
    const cleanLine = line.replace(/^\d+\.\s*/, "");

    if (cleanLine.trim() === "") return "";

    const numbered = `${idx + 1}. ${cleanLine}`;

    // Adjust cursor position if we're before/inside this line
    if (charCount < cursorPos) {
      const diff = numbered.length - line.length;
      newCursorPos += diff;
    }

    charCount += line.length + 1; // +1 for newline
    return numbered;
  });

  othersTextarea.value = newLines.join("\n");

  // Restore cursor position instead of jumping
  othersTextarea.setSelectionRange(newCursorPos, newCursorPos);
});

othersTextarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const value = othersTextarea.value;
    const start = othersTextarea.selectionStart;
    const end = othersTextarea.selectionEnd;

    // Find current line
    const lineStart = value.lastIndexOf("\n", start - 1) + 1;
    const lineEnd = value.indexOf("\n", start);
    const currentLine = value.slice(
      lineStart,
      lineEnd === -1 ? value.length : lineEnd,
    );

    // Extract current number
    const match = currentLine.match(/^(\d+)\.\s*/);

    let nextNumber = 1;
    if (match) {
      nextNumber = parseInt(match[1], 10) + 1;
    }

    const prefix = `${nextNumber}. `;

    // Insert new numbered line
    const newValue = value.slice(0, start) + "\n" + prefix + value.slice(end);

    othersTextarea.value = newValue;

    // Move cursor AFTER the number
    const newCursorPos = start + 1 + prefix.length;
    othersTextarea.setSelectionRange(newCursorPos, newCursorPos);
  }
});
