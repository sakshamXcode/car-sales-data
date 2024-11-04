// App.js
import React, { useState } from 'react';
import SalesTable from './SalesTable';
import SalesPieChart from './SalesPieChart';
import { salesData } from './data';

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Filter data based on selected company
  const filteredData = selectedCompany
    ? salesData.filter((item) => item.company === selectedCompany)
    : salesData;

  return (
    <div className="App">
      <h1>Car Sales Data 2024</h1>
     
      <SalesPieChart
        salesData={salesData}
        onSelectCompany={(company) => setSelectedCompany(company)}
        />
        
        {
          filteredData!==salesData && 
          <button onClick={() => {setSelectedCompany(null); 
          }}>Show All</button>

        }

      <SalesTable filteredData={filteredData} />
        </div>
  );
};

export default App;
