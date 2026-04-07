const { jsPDF } = window.jspdf;

document.getElementById("download-pdf").addEventListener("click", () => {
  const doc = new jsPDF();
  let y = 10; // initial y position
  const lineHeight = 7;
  const pageHeight = doc.internal.pageSize.height;

  // --- Add BSA Section ---
  const height = document.getElementById("height").value.trim();
  const weight = document.getElementById("weight").value.trim();
  const bsa = document.getElementById("bsa-text").textContent;

  if (height || weight || bsa) {
    doc.setFontSize(10);
    doc.setFont("arial", "bold");
    doc.text("Body Surface Area (BSA)", 10, y);
    y += lineHeight + 2;

    doc.setFont("arial", "normal");
    if (height) {
      doc.text(`Height: ${height} cm`, 10, y);
      y += lineHeight;
    }
    if (weight) {
      doc.text(`Weight: ${weight} kg`, 10, y);
      y += lineHeight;
    }
    if (bsa && bsa !== "—") {
      doc.text(`BSA: ${bsa} m²`, 10, y);
      y += lineHeight;
    }
    y -= 6;
  }

  // --- Add the rest of the report (existing content) ---
  const container = document.querySelector(".col-span-2"); // left side container
  const children = Array.from(container.children);

  children.forEach((el) => {
    if (el.tagName === "H3") {
      y += 10; //  space before heading
      doc.setFontSize(12);
      doc.setFont("arial", "bold");
      if (y + lineHeight > pageHeight) {
        doc.addPage();
        y = 10;
      }
      doc.text(el.textContent, 10, y);
      y += 6; //  space after heading
    }

    if (el.tagName === "TEXTAREA") {
      const value = el.value.trim();
      if (!value) return;

      doc.setFontSize(10);
      doc.setFont("arial", "normal");

      const lines = doc.splitTextToSize(value, 180);
      lines.forEach((line) => {
        if (y + lineHeight > pageHeight) {
          doc.addPage();
          y = 10;
        }
        doc.text(line, 10, y);
        y += 5;
      });
    }
  });

  // Save PDF
  const inputName = document.getElementById("pdfName").value.trim();
  const pdfName = inputName ? inputName + ".pdf" : "echo_report.pdf";
  doc.save(pdfName);
});
