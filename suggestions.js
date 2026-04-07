// Suggestions box event handling
suggestionsBox.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    insertText(e.target.textContent, true);
    suggestionsBox.classList.add("hidden");
  }
});
