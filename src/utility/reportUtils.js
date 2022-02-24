import jsPDF from "jspdf";
import "jspdf-autotable";

export const exportPDF = ({filename,documentTitle,tableheaders,tableData}) => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);
    doc.setFontSize(14);

    let content = {
      startY: 50,
      head: tableheaders,
      body: tableData
    };

    doc.text(documentTitle, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`${filename}.pdf`)
  }