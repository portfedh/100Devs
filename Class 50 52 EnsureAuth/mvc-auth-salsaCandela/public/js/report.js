// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to convert a table to CSV format
  function tableToCSV(table) {
    const rows = table.querySelectorAll("tr");
    const csv = [];

    for (const row of rows) {
      const cols = row.querySelectorAll("td, th");
      const rowData = [];

      for (const col of cols) {
        rowData.push(col.textContent);
      }

      csv.push(rowData.join(","));
    }

    return csv.join("\n");
  }

  // Function to download CSV when the button is clicked
  function downloadCSV() {
    const table = document.getElementById("report-table");
    const csvContent = tableToCSV(table);
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // Attach the downloadCSV function to the button click event
  const downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", downloadCSV);
});
