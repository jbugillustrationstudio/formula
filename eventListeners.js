// Event listeners for inputs and other interactions
// Assumes `inputs`, `heightInput`, `weightInput`, and `updateTextareas()` are accessible

inputs.forEach((input) => input.addEventListener("input", updateTextareas));

heightInput.addEventListener("input", () => {
  calculateBSA();
  updateTextareas();
});
weightInput.addEventListener("input", () => {
  calculateBSA();
  updateTextareas();
});
