function generatePDF() {
  const pdfFileName =
    document.getElementById("pdfName").value || "echo_report.pdf";
  const docDefinition = {
    content: [
      {
        text: `Details: ${document.getElementById("details").value}`,
        style: "body",
      },
      {
        text: `Image quality: ${document.getElementById("imagequality").value}`,
        style: "body",
      },
      {
        text: `Height: ${document.getElementById("height").value}`,
        style: "body",
      },
      {
        text: `Weight: ${document.getElementById("weight").value}`,
        style: "body",
      },
      {
        text: `BSA: ${document.getElementById("bsatext").textContent}`,
        style: "body",
      },
      { text: "Left ventricle", style: "header" },
      {
        text: `${document.getElementById("lvventricle").value} ${document.getElementById("lvmeasurement").value}`,
        style: "body",
      },
      { text: "Right ventricle", style: "header" },
      {
        text: `${document.getElementById("rvventricle").value} ${document.getElementById("rvmeasurement").value}`,
        style: "body",
      },
      { text: "Left/Right atrium", style: "header" },
      {
        text: `${document.getElementById("atrium").value} ${document.getElementById("atriummeasurement").value}`,
        style: "body",
      },
      { text: "Aortic", style: "header" },
      {
        text: `${document.getElementById("aortic").value} ${document.getElementById("aorticmeasurement").value}`,
        style: "body",
      },
      { text: "Aorta", style: "header" },
      {
        text: `${document.getElementById("aorta").value} ${document.getElementById("aortameasurement").value}`,
        style: "body",
      },
      { text: "Mitral valve", style: "header" },
      {
        text: `${document.getElementById("mitral").value} ${document.getElementById("mitralmeasurement").value}`,
        style: "body",
      },
      { text: "Tricuspid valve", style: "header" },
      {
        text: `${document.getElementById("tricuspid").value} ${document.getElementById("tricuspidmeasurement").value}`,
        style: "body",
      },
      { text: "Pulmonary valve", style: "header" },
      {
        text: `${document.getElementById("pulmonary").value} ${document.getElementById("pulmonarymeasurement").value}`,
        style: "body",
      },
      { text: "Conclusion", style: "header" },
      {
        text: `${document.getElementById("conclusion").value}`,
        style: "body",
      },
    ],
    styles: {
      header: { fontSize: 12, bold: true, margin: [0, 8, 0, 6, 0] },
      body: { fontSize: 10, margin: [0, 2, 0, 2, 0] },
    },
  };

  pdfMake.createPdf(docDefinition).download(pdfFileName);
}
function copyText() {
  // Collect all values
  const details = document.getElementById("details").value;
  const imageQuality = document.getElementById("imagequality").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bsa = document.getElementById("bsatext").textContent;
  const lv = `${document.getElementById("lvventricle").value} ${document.getElementById("lvmeasurement").value}`;
  const rv = `${document.getElementById("rvventricle").value} ${document.getElementById("rvmeasurement").value}`;
  const atrium = `${document.getElementById("atrium").value} ${document.getElementById("atriummeasurement").value}`;
  const aortic = `${document.getElementById("aortic").value} ${document.getElementById("aorticmeasurement").value}`;
  const aorta = `${document.getElementById("aorta").value} ${document.getElementById("aortameasurement").value}`;
  const mitral = `${document.getElementById("mitral").value} ${document.getElementById("mitralmeasurement").value}`;
  const tricuspid = `${document.getElementById("tricuspid").value} ${document.getElementById("tricuspidmeasurement").value}`;
  const pulmonary = `${document.getElementById("pulmonary").value} ${document.getElementById("pulmonarymeasurement").value}`;
  const conclusion = document.getElementById("conclusion").value;

  // Build plain text
  const textOutput = `
Details: ${details}
Image quality: ${imageQuality}
Height: ${height}
Weight: ${weight}
BSA: ${bsa}

Left ventricle:
${lv}

Right ventricle:
${rv}

Left/Right atrium:
${atrium}

Aortic:
${aortic}

Aorta:
${aorta}

Mitral valve:
${mitral}

Tricuspid valve:
${tricuspid}

Pulmonary valve:
${pulmonary}

Conclusion:
${conclusion}
`;

  // Copy to clipboard
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function lvcopyText() {
  const textOutput = `${document.getElementById("lvventricle").value} ${document.getElementById("lvmeasurement").value}`;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function rvcopyText() {
  const textOutput = `${document.getElementById("rvventricle").value} ${document.getElementById("rvmeasurement").value}`;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function atriumcopyText() {
  const textOutput = `${document.getElementById("atrium").value} ${document.getElementById("atriummeasurement").value}`;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function aorticaortiacopyText() {
  const aortic = `${document.getElementById("aortic").value} ${document.getElementById("aorticmeasurement").value}`;
  const aorta = `${document.getElementById("aorta").value} ${document.getElementById("aortameasurement").value}`;
  const textOutput = `${aortic}
${aorta}
`;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function mitralcopyText() {
  const textOutput = `${document.getElementById("mitral").value} ${document.getElementById("mitralmeasurement").value}`;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function tricuspidcopyText() {
  const textOutput = `${document.getElementById("tricuspid").value} ${document.getElementById("tricuspidmeasurement").value}`;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function pulmonarycopyText() {
  const textOutput = `${document.getElementById("pulmonary").value} ${document.getElementById("pulmonarymeasurement").value}`;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
function conclusioncopyText() {
  const textOutput = document.getElementById("conclusion").value;
  navigator.clipboard.writeText(textOutput).then(
    () => alert("Report copied to clipboard!"),
    () => alert("Failed to copy report."),
  );
}
