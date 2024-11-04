// SalesTable.js
import React from 'react';

const SalesTable = ({ filteredData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Model</th>
          <th>Number of Cars Sold</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>{item.company}</td>
            <td>{item.model}</td>
            <td>{item.noOfCars}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
