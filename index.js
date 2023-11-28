// Data kept in separate file
import { finances } from "./finance-data.js";

// Calculates the total number of arrays in the 2d array
const totalMonths = finances.length;

// Calculates the total profit by reducing the profit value in the 2d array
const totalProfit = finances.reduce((a, b) => a + b[1], 0);

// Create an array of the monthly changes
const monthlyChange = finances.map((row, index) => {
  return index < finances.length - 1 ? finances[index + 1][1] - row[1] : 0;
});

// Calculate Total Monthly Change
const totalMonthlyChange = monthlyChange.reduce((a, b) => a + b, 0);

// Calculate Average Change
const averageChange = totalMonthlyChange / (monthlyChange.length - 1);

// Calculate Minimum Change
const minChange = Math.min(...monthlyChange);

// Calculate Month of Minimum Change
const minMonth = monthlyChange.reduce(
  (maxIndex, currentValue, currentIndex, array) =>
    currentValue < array[maxIndex] ? currentIndex : maxIndex,
  0
);

// Calculate Maximum Change
const maxChange = Math.max(...monthlyChange);

// Calculate Month of Maximum Change
const maxMonth = monthlyChange.reduce(
  (maxIndex, currentValue, currentIndex, array) =>
    currentValue > array[maxIndex] ? currentIndex : maxIndex,
  0
);

// Output Results
