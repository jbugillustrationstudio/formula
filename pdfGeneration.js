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
