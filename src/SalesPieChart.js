import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required elements for the pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const SalesPieChart = ({ salesData, onSelectCompany }) => {
  // Aggregate sales data by company
  const companySales = salesData.reduce((acc, item) => {
    acc[item.company] = (acc[item.company] || 0) + item.noOfCars;
    return acc;
  }, {});

  // Define chart data
  const chartData = {
    labels: Object.keys(companySales),
    datasets: [
      {
        data: Object.values(companySales),
        backgroundColor: ['#de18e8', '#9410e6', '#16c5e0', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#f100fe', '#9d00ff', '#00d9fb', '#5BD0D0', '#A077FF', '#FFAF50'],
        borderWidth: 2,
        borderColor: '#ffffff',
        hoverOffset: 20, // Increase "exploding" effect on hover
      },
    ],
  };

  // Chart options for interactivity and customization
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const company = context.label;
            const carsSold = context.raw;
            const totalSales = Object.values(companySales).reduce((a, b) => a + b, 0);
            const percentage = ((carsSold / totalSales) * 100).toFixed(2);
            return `${company}: ${carsSold} cars (${percentage}%)`;
          },
        },
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
      },
      legend: {
        position: 'bottom',
        labels: {
          color: '#f6f6f6',
          font: {
            size: 14,
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    onClick: (event, elements) => {
      if (elements.length) {
        const clickedIndex = elements[0].index;
        const selectedCompany = chartData.labels[clickedIndex];
        onSelectCompany(selectedCompany);
      }
    },
    // Custom styling options for interactivity
    elements: {
      arc: {
        hoverBorderWidth: 4, // Emphasize border on hover
        hoverBackgroundColor: '#fffd', // Semi-transparent white overlay
        shadowBlur: 10, // Shadow effect on hover (requires Chart.js shadow plugin or custom CSS)
      },
    },
  };

  return (
    <div className='solidpie'>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default SalesPieChart;
