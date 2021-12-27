// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Loop through each object in Data, create table row and add data to each cell in row
function buildTable(data) {
    // Clear existing data for the function
    tbody.html("");
    // loop through each data object
    data.forEach((dataRow) => {
        // append a row to the table's body
        let row = tbody.append("tr");
        // Loop through each field in the table's row
        Object.values(dataRow).forEach((val) => {
            // add each value as a cell in the table
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// Create function to handle button click
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data with that date
    if (date) {
        // Apply `filter` to the table and keep only the passing rows
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // NOTE: If no date was entered, filteredData will be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);