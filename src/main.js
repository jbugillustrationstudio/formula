import "./style.css";
window.calculateAV = function () {
  let lvotd = Number(document.getElementById("lvot-diameter").value);
  let lvotvti = Number(document.getElementById("lvot-vti").value);
  let avvti = Number(document.getElementById("av-vti").value);
  let avarea = 0;
  let stj = Number(document.getElementById("stj-diameter").value);
  let pr_avarea = 0;
  let attime = Number(document.getElementById("at-time").value);
  let ettime = Number(document.getElementById("et-time").value);
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let bsa = 0;
  // if (!weight || !height || isNaN(weight) || isNaN(height)) {
  //   document.getElementById("message").innerText =
  //     "Please enter valid numbers!";
  //   document.getElementById("message").className =
  //     "text-red-500 font-semibold text-sm";
  //   return;
  // }
  // pressure recover equation pr-avarea-output = (avarea * stjarea) / (stjarea - avarea)

  if (lvotvti > 0 && avvti > 0) {
    let dsi = lvotvti / avvti;
    document.getElementById("dsi-output").innerText = dsi.toFixed(2);

    if (dsi < 0.25) {
      document.getElementById("dsi-grading").innerText = "Severe AS";
    } else if (dsi < 0.5) {
      document.getElementById("dsi-grading").innerText = "Moderate AS";
    } else if (dsi < 0.75) {
      document.getElementById("dsi-grading").innerText = "Mild AS";
    } else {
      document.getElementById("dsi-grading").innerText = "Normal";
    }
  } else {
    document.getElementById("dsi-output").innerText = "";
    document.getElementById("dsi-grading").innerText = "";
  }
  if (lvotd > 0 && lvotvti > 0 && avvti > 0) {
    avarea = (Math.PI * (lvotd / 2) ** 2 * lvotvti) / avvti;
    document.getElementById("av-area-output").innerText =
      avarea.toFixed(2) + " cm²";

    if (avarea < 1) {
      document.getElementById("av-area-grading").innerText = "Severe AS";
    } else if (avarea < 1.5) {
      document.getElementById("av-area-grading").innerText = "Moderate AS";
    } else if (avarea < 2) {
      document.getElementById("av-area-grading").innerText = "Mild AS";
    } else {
      document.getElementById("av-area-grading").innerText = "Normal";
    }
  } else {
    document.getElementById("av-area-output").innerText = "";
    document.getElementById("av-area-grading").innerText = "";
  }

  // pressure recovery equation
  if (stj > 0 && avarea > 0) {
    pr_avarea =
      (avarea * (Math.PI * (stj / 2) ** 2)) /
      (Math.PI * (stj / 2) ** 2 - avarea);
    document.getElementById("pr-av-area-output").innerText =
      pr_avarea.toFixed(2) + " cm²";
    if (pr_avarea < 1) {
      document.getElementById("pr-av-area-grading").innerText = "Severe AS";
    } else if (pr_avarea < 1.5) {
      document.getElementById("pr-av-area-grading").innerText = "Moderate AS";
    } else if (pr_avarea < 2) {
      document.getElementById("pr-av-area-grading").innerText = "Mild AS";
    } else {
      document.getElementById("pr-av-area-grading").innerText = "Normal";
    }
  } else {
    document.getElementById("pr-av-area-output").innerText = "";
    document.getElementById("pr-av-area-grading").innerText = "";
  }

  if (attime && ettime > 0) {
    let atet = attime / ettime;
    document.getElementById("atet-output").innerText = atet.toFixed(2);
  } else {
    document.getElementById("atet-output").innerText = "";
  }

  if (weight && height > 0) {
    bsa = Math.sqrt((height * weight) / 3600);
    let bmi = weight / (height / 100) ** 2;

    document.getElementById("bsa-output").innerText = bsa.toFixed(2) + " m²";
    document.getElementById("bmi-output").innerText = bmi.toFixed(2) + " kg/m²";

    if (bmi < 18.5) {
      document.getElementById("bmi-grading").innerText = "Underweight";
    } else if (bmi < 25) {
      document.getElementById("bmi-grading").innerText = "Normal weight";
    } else if (bmi < 30) {
      document.getElementById("bmi-grading").innerText = "Overweight";
    } else {
      document.getElementById("bmi-grading").innerText = "Obese";
    }
  } else {
    document.getElementById("bsa-output").innerText = "";
    document.getElementById("bmi-output").innerText = "";
    document.getElementById("bmi-grading").innerText = "";
  }
  // indexed AV area
  if (avarea > 0 && bsa > 0) {
    let avarea_indexed = avarea / bsa;
    document.getElementById("av-area-indexed-output").innerText =
      avarea_indexed.toFixed(2) + " cm²/m²";

    if (avarea_indexed < 0.6) {
      document.getElementById("av-area-indexed-grading").innerText =
        "Severe AS";
    } else if (avarea_indexed < 0.85) {
      document.getElementById("av-area-indexed-grading").innerText =
        "Moderate AS";
    } else if (avarea_indexed < 1.0) {
      document.getElementById("av-area-indexed-grading").innerText = "Mild AS";
    } else {
      document.getElementById("av-area-indexed-grading").innerText = "Normal";
    }
  } else {
    document.getElementById("av-area-indexed-output").innerText = "";
    document.getElementById("av-area-indexed-grading").innerText = "";
  }
  // pressure recovery equation indexed
  if (pr_avarea > 0 && bsa > 0) {
    let pr_avarea_indexed = pr_avarea / bsa;
    document.getElementById("pr-av-area-indexed-output").innerText =
      pr_avarea_indexed.toFixed(2) + " cm²/m²";
    if (pr_avarea_indexed < 0.6) {
      document.getElementById("pr-av-area-indexed-grading").innerText =
        "Severe AS";
    } else if (pr_avarea_indexed < 0.85) {
      document.getElementById("pr-av-area-indexed-grading").innerText =
        "Moderate AS";
    } else if (pr_avarea_indexed < 1.0) {
      document.getElementById("pr-av-area-indexed-grading").innerText =
        "Mild AS";
    } else {
      document.getElementById("pr-av-area-indexed-grading").innerText =
        "Normal";
    }
  } else {
    document.getElementById("pr-av-area-indexed-output").innerText = "";
    document.getElementById("pr-av-area-indexed-grading").innerText = "";
  }

  document.getElementById("message").innerText = "";
};

window.reload = function () {
  window.location.reload();
};

document
  .getElementById("submitBtn")
  .addEventListener("click", window.calculateAV);
document.getElementById("clearBtn").addEventListener("click", window.reload);
