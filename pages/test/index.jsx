export default function Test() {
  function addRow() {
    var table = document.getElementById("input-table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<input type="text" name="column1[]">';
    cell2.innerHTML = '<input type="text" name="column2[]">';
    cell3.innerHTML = '<input type="text" name="column3[]">';
  }
  return (
    <div>
      {" "}
      <head>
        <title>Input Table with Add Row Button</title>
        {/* <style>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }
      th {
        background-color: lightgray;
      }
    </style> */}
      </head>
      <body>
        <table id='input-table'>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type='text' name='column1[]' />
              </td>
              <td>
                <input type='text' name='column2[]' />
              </td>
              <td>
                <input type='text' name='column3[]' />
              </td>
            </tr>
          </tbody>
        </table>
        <button onclick='addRow()'>Add Row</button>
      </body>
    </div>
  );
}
