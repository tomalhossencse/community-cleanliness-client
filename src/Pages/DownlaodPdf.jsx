import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";

const DownlaodPdf = ({ contributions }) => {
  const downlaodReport = () => {
    const doc = new jsPDF();
    const columns = ["Title", "Category", "Date", "Amount($)", "Location"];
    const rows = contributions.map((contribute) => [
      contribute.title,
      contribute.category,
      contribute.date,
      contribute.amount,
      contribute.address,
    ]);
    autoTable(doc, { head: [columns], body: rows });
    doc.save("Contribution-Report.pdf");
  };
  return (
    <div>
      <button
        onClick={downlaodReport}
        className="btn btn-primary w-full p-6 text-lg"
      >
        Download report
      </button>
    </div>
  );
};

export default DownlaodPdf;
