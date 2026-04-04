import "./style.css";
window.calculateBmi = function () {
  let weight = Number(document.getElementById("weight2").value);
  let height = Number(document.getElementById("height2").value);
  if (height > 180) {
    document.getElementById("tallness").innerText = "You are tall!";
    document.getElementById("tallness").className =
      "text-green-500 font-semibold";
  } else {
    document.getElementById("tallness").innerText = "You are not so tall!";
    document.getElementById("tallness").className =
      "text-red-500 font-semibold";
  }
  if (!weight || !height || isNaN(weight) || isNaN(height)) {
    document.getElementById("message").innerText =
      "Please enter valid numbers!";
    document.getElementById("message").className = "text-red-500 font-semibold";
    return;
  }

  let bmi = weight / (height / 100) ** 2;

  document.getElementById("heading").innerText = "Your BMI is: ";
  document.getElementById("bmi-output").innerText = bmi.toFixed(2);

  if (bmi < 18.5) {
    document.getElementById("message").innerText = "You are underweight";
    document.getElementById("message").className =
      "text-grey-500 font-semibold";
  } else if (bmi < 25) {
    document.getElementById("message").innerText = "You are normal weight";
    document.getElementById("message").className =
      "text-grey-500 font-semibold";
  } else if (bmi < 30) {
    document.getElementById("message").innerText = "You are overweight";
    document.getElementById("message").className =
      "text-grey-500 font-semibold";
  } else {
    document.getElementById("message").innerText = "You are obese";
    document.getElementById("message").className =
      "text-grey-500 font-semibold";
  }
};

window.reload = function () {
  window.location.reload();
};

document
  .getElementById("submitBtn")
  .addEventListener("click", window.calculateBmi);
document.getElementById("clearBtn").addEventListener("click", window.reload);
