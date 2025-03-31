// Code your solution in this file!

// Step 1: Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Step 2: Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Step 3: Array containing both driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Step 4: Higher-order function to create a fare multiplier
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// Step 5: Function to double the fare
const fareDoubler = createFareMultiplier(2);

// Step 6: Function to triple the fare
const fareTripler = createFareMultiplier(3);

// Step 7: Function to select different drivers
const selectDifferentDrivers = function(drivers, driverFunction) {
  return driverFunction(drivers);
};

// Export functions for testing
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};

