// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Function to convert a table to CSV format
  function tableToCSV(table) {
    const rows = table.querySelectorAll("tr");
    const csv = [];

    for (const row of rows) {
      const cols = row.querySelectorAll("td, th");
      const rowData = [];

      // Check if the row has at least one non-empty cell
      let hasNonEmptyCell = false;

      for (const col of cols) {
        const cellData = col.textContent.trim(); // Remove leading/trailing whitespace

        if (col.querySelector("a")) {
          // If the cell contains an anchor element, use the href attribute value
          rowData.push(col.querySelector("a").getAttribute("href"));
          hasNonEmptyCell = true;
        } else if (cellData !== "") {
          // If not an anchor element, use the cell data if it's not empty
          rowData.push(cellData);
          hasNonEmptyCell = true;
        }
      }

      // Only add rows with non-empty cells to the CSV
      if (hasNonEmptyCell) {
        csv.push(rowData.join(","));
      }
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

  // Add an event listener to the Logout button
  document
    .getElementById("logoutButton")
    .addEventListener("click", function () {
      // Send a GET request to the /logout URL
      fetch("/logout", {
        method: "GET",
      }),
        fetch("/", {
          method: "GET",
        }).catch((error) => {
          console.error("An error occurred:", error);
        });
    });
});
