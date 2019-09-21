// Use D3 to select the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Define function to populate data table
function buildTable(data) {

// Clear previous data in table
tbody.selectAll("tr").remove();

  // Build table from individual entries
  data.forEach((ufoLog) => {
    // Append table rows
    var row = tbody.append("tr");
    // Convert ufoLog entries to key value pairs
    Object.entries(ufoLog).forEach(function([key, value]) {
      // Append a cell to the row for each value pair
      var cell = row.append("td");
      // Fill cell with value
      cell.text(value);
    });
  });
};

// Call buildTable to display all data
buildTable(tableData);

// Use a date form in your HTML document and write JavaScript code that will 
// listen for events and search through the date/time column to find rows that 
// match user input.

// Select the button
var filterClick = d3.select("#filter-btn");

// Set up event listener
filterClick.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Select rows that match the date inputted
  var filteredData = tableData.filter(row => row.datetime === inputValue);

  // Call buildTable on filtered rows
  buildTable(filteredData);
});