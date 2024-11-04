# Sales Data Visualization App
This is a React application that visualizes company sales data using a custom-designed and interactive pie chart. The pie chart displays the number of cars sold by each company and includes animations, hover effects, and custom styling for an engaging user experience.

## Features
Interactive Pie Chart: Each slice of the pie chart "explodes" outward on hover for a unique effect.
Sales Data Aggregation: Automatically aggregates sales data to show the total cars sold by each company.
Custom Styling: Styled with custom colors, hover effects, and smooth transitions to enhance visual appeal.
Responsive Background: The background image and design adapt to fit various screen sizes.
Smooth Transitions: Hover effects on the chart and table elements to make the UI more dynamic.

## Installation

Clone the Repository:

git clone https://github.com/yourusername/sales-data-visualization.git
cd sales-data-visualization

## Install Dependencies:
npm install

## Start the App:
 npm start

# Code Overview
## Main Components
SalesPieChart.js: Contains the main logic for the pie chart, which includes aggregating sales data and handling click events for each chart slice. The chart uses react-chartjs-2 for rendering and is customized with CSS transitions for hover effects.
App.js: Serves as the primary component, containing the pie chart and additional elements such as the background image, data table, and main styling.

## Customization
Colors: Adjust the backgroundColor and hoverBackgroundColor arrays in chartData to customize slice colors.
Chart Size: Modify the dimensions of the .solidpie class in CSS for different chart sizes.
Data: Update the salesData prop in SalesPieChart.js to visualize alternative sales data.

## Future Enhancements
Additional Interactivity: Consider adding more animations or effects when clicking on chart sections.
Advanced Tooltips: Customize tooltips to show detailed information on each slice.
Mobile Optimization: Further optimize the layout for mobile devices and smaller screens.

## License
This project is licensed under the MIT License.

## Acknowledgments
React Chart.js 2 Documentation
Google Font