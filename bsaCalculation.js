// -------------------------
// BSA SETUP
// -------------------------
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bsaText = document.getElementById("bsa-text");

let bsaValue = 0;

function calculateBSA() {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight) {
    bsaText.textContent = "—";
    bsaValue = 0;
    return;
  }

  const bsa = Math.sqrt((height * weight) / 3600);
  bsaValue = parseFloat(bsa.toFixed(2));
  bsaText.textContent = `${bsaValue} m²`;
}
