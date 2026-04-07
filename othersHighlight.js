// "Others" list highlight handling
function updateOthersHighlight(visibleItems = othersListItems) {
  visibleItems.forEach((li, idx) => {
    if (idx === othersHighlightedIndex) {
      li.classList.add("bg-blue-200");
      li.scrollIntoView({ block: "nearest" });
    } else {
      li.classList.remove("bg-blue-200");
    }
  });
}

othersSearch.addEventListener("input", () => {
  const q = othersSearch.value.toLowerCase();
  othersListItems.forEach(
    (li) =>
      (li.style.display = li.textContent.toLowerCase().includes(q)
        ? ""
        : "none"),
  );
  othersHighlightedIndex = -1;
  updateOthersHighlight();
});

othersSearch.addEventListener("keydown", (e) => {
  const visibleItems = othersListItems.filter(
    (li) => li.style.display !== "none",
  );
  if (visibleItems.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    othersHighlightedIndex = (othersHighlightedIndex + 1) % visibleItems.length;
    updateOthersHighlight(visibleItems);
  }
  if (e.key === "ArrowUp") {
    e.preventDefault();
    othersHighlightedIndex =
      (othersHighlightedIndex - 1 + visibleItems.length) % visibleItems.length;
    updateOthersHighlight(visibleItems);
  }
  if (e.key === "Enter" && othersHighlightedIndex >= 0) {
    e.preventDefault();
    insertText(visibleItems[othersHighlightedIndex].textContent, false);
    othersSearch.value = "";
    othersHighlightedIndex = -1;
    updateOthersHighlight();
    lastFocusedTextarea.focus();
  }

  // Ctrl + LEFT: back to textarea
  if (e.ctrlKey && e.key === "ArrowLeft") {
    e.preventDefault();
    lastFocusedTextarea.focus();
  }

  // Ctrl + UP/DOWN: cycle through visible items
  if (e.ctrlKey && e.key === "ArrowDown") {
    e.preventDefault();
    othersHighlightedIndex =
      (othersHighlightedIndex + 1 + visibleItems.length) % visibleItems.length;
    updateOthersHighlight(visibleItems);
  }
  if (e.ctrlKey && e.key === "ArrowUp") {
    e.preventDefault();
    othersHighlightedIndex =
      (othersHighlightedIndex - 1 + visibleItems.length) % visibleItems.length;
    updateOthersHighlight(visibleItems);
  }
});

othersList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    insertText(e.target.textContent, false);
    othersSearch.value = "";
    othersHighlightedIndex = -1;
    updateOthersHighlight();
    lastFocusedTextarea.focus();
  }
});
