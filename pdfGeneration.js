function generatePDF() {
  const pdfFileName =
    document.getElementById("pdfName").value || "echo_report.pdf";
  const docDefinition = {
    content: [
      { text: `Height: ${document.getElementById("height").value}` },
      { text: `Weight: ${document.getElementById("weight").value}` },
      { text: `BSA: ${document.getElementById("bsatext").textContent}` },
      { text: "Left ventricle", style: "header" },
      {
        text: `${document.getElementById("lvventricle").value}${document.getElementById("lvmeasurement").value}`,
        style: "body",
      },
      { text: "Right ventricle", style: "header" },
      {
        text: `${document.getElementById("rvventricle").value}${document.getElementById("rvmeasurement").value}`,
        style: "body",
      },
      { text: "Left ventricle", style: "header" },
      {
        text: `${document.getElementById("atrium").value}${document.getElementById("atriummeasurement").value}`,
        style: "body",
      },
      { text: "Right ventricle", style: "header" },
      {
        text: `${document.getElementById("aortic").value}${document.getElementById("aorticmeasurement").value}`,
        style: "body",
      },
      { text: "Left ventricle", style: "header" },
      {
        text: `${document.getElementById("aorta").value}${document.getElementById("aortameasurement").value}`,
        style: "body",
      },
      { text: "Right ventricle", style: "header" },
      {
        text: `${document.getElementById("mitral").value}${document.getElementById("mitralmeasurement").value}`,
        style: "body",
        style: "body",
      },
      { text: "Left ventricle", style: "header" },
      {
        text: `${document.getElementById("tricuspid").value}${document.getElementById("tricuspidmeasurement").value}`,
        style: "body",
      },
      { text: "Right ventricle", style: "header" },
      {
        text: `${document.getElementById("pulmonary").value}${document.getElementById("pulmonarymeasurement").value}`,
        style: "body",
      },
      { text: "Left ventricle", style: "header" },
      {
        text: `${document.getElementById("conclusion").value}`,
        style: "body",
      },
    ],
    styles: {
      header: { fontSize: 12, bold: true, margin: [0, 8, 0, 6, 0] },
      body: { fontSize: 10 },
    },
  };

  pdfMake.createPdf(docDefinition).download(pdfFileName);
}
