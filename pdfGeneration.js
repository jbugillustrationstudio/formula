function generatePDF() {
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

  pdfMake.createPdf(docDefinition).download("invoice.pdf");
}

// function generatePDF() {
//   const docDefinition = {
//     content: [
//       { text: "Left ventricle", style: "header" },
//       {
//         text: `${document.getElementById("lvventricle").value}${document.getElementById("lvmeasurement").value}`,
//       },
//       { text: `${document.getElementById("lvmeasurement").value}` },
//       {
//         table: {
//           body: [
//             ["Item", "Qty", "Price"],
//             ["Product 1", "2", "$10"],
//             ["Product 2", "1", "$20"],
//             ["Total", "", "$40"],
//           ],
//         },
//       },
//     ],
//     styles: {
//       header: { fontSize: 18, bold: true },
//     },
//   };

//   pdfMake.createPdf(docDefinition).download("invoice.pdf");
// }

// function exportPDF() {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   const headings = document.querySelectorAll("h3");
//   const textareas = document.querySelectorAll("textarea");

//   const marginX = 15;
//   const pageHeight = doc.internal.pageSize.height;
//   const maxWidth = 180;
//   let y = 20;

//   function addPageIfNeeded(extraHeight = 10) {
//     if (y + extraHeight > pageHeight - 15) {
//       doc.addPage();
//       y = 20;
//     }
//   }

//   let taIndex = 0; // track which textarea we’re using

//   headings.forEach((h3) => {
//     // ---- Title ----
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(13);
//     addPageIfNeeded(10);
//     doc.text(h3.innerText, marginX, y);
//     y += 8; // tight spacing below h3

//     // ---- Pair of Textareas ----
//     for (let i = 0; i < 2; i++) {
//       const ta = textareas[taIndex];
//       if (!ta) break;

//       doc.setFont("helvetica", "normal");
//       doc.setFontSize(11);

//       const lines = doc.splitTextToSize(ta.value, maxWidth);
//       lines.forEach((line) => {
//         addPageIfNeeded(8);
//         doc.text(line, marginX, y);
//         y += 7; // line height
//       });

//       y += 2; // small spacing between textareas
//       taIndex++;
//     }

//     y += 5; // spacing before next h3
//   });

//   // Save PDF
//   let fileName =
//     document.getElementById("pdfName")?.value.trim() || "output.pdf";
//   if (!fileName.toLowerCase().endsWith(".pdf")) fileName += ".pdf";
//   doc.save(fileName);
// }
