import React, { useState } from 'react';
import './DataTable.css';

const DataTable = () => {
  // Initialize the table with 1 row and 2 columns
  const [rows, setRows] = useState([['']]); // A 2D array of empty strings
  const [columns, setColumns] = useState(2);
  const [columnNames, setColumnNames] = useState(Array(columns).fill('Column'));

  // Add a new row
  const addRow = () => {
    setRows([...rows, Array(columns).fill('')]);
  };

  // Remove a row
  const removeRow = (rowIndex) => {
    const updatedRows = rows.filter((_, index) => index !== rowIndex);
    setRows(updatedRows);
  };

  // Add a new column
  const addColumn = () => {
    const updatedRows = rows.map(row => [...row, '']);
    setRows(updatedRows);
    setColumns(columns + 1);
    setColumnNames([...columnNames, `Column ${columns + 1}`]);
  };

  // Remove a column
  const removeColumn = (colIndex) => {
    const updatedRows = rows.map(row => row.filter((_, index) => index !== colIndex));
    setRows(updatedRows);
    setColumns(columns - 1);
    setColumnNames(columnNames.filter((_, index) => index !== colIndex));
  };

  // Handle change in cell value
  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedRows = rows.map((row, rIdx) => 
      rIdx === rowIndex ? row.map((cell, cIdx) => cIdx === colIndex ? value : cell) : row
    );
    setRows(updatedRows);
  };

  // Handle column name change
  const handleColumnNameChange = (index, value) => {
    const updatedNames = [...columnNames];
    updatedNames[index] = value;
    setColumnNames(updatedNames);
  };

  return (
    <div className="data-table">
      <div className="controls">
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn}>Add Column</button>
      </div>
      
      <table>
        <thead>
          <tr>
            {columnNames.map((colName, colIndex) => (
              <th key={colIndex}>
                <input
                  type="text"
                  value={colName}
                  onChange={(e) => handleColumnNameChange(colIndex, e.target.value)}
                  className="column-name-input"
                />
                <button onClick={() => removeColumn(colIndex)}>Remove</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    placeholder="Enter value"
                  />
                </td>
              ))}
              <td>
                <button onClick={() => removeRow(rowIndex)}>Remove Row</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
