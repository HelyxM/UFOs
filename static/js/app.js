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
}