// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver['revenue'] > revenue)
}

function driverNamesWithRevenueOver() {
  
}

// exactMatch() - This function takes an array of driver objects as the first argument and a JavaScript object that specifies an attribute and corresponding value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.
function exactMatch() {
  
}

function exactMatchToList() {
  
}
// function exactMatch (drivers, matcher) {
//   return drivers.filter(function (driver) {
//     let matches = false;

//     for (const key in matcher) {
//       matches = driver[key] === matcher[key];
//     }

//     return matches;
//   });
// }

// function exactMatchToList (drivers, matcher) {
//   return exactMatch(drivers, matcher)
//     .map(function (driver) {
//       return driver.name;
//     });
// }
// driverNamesWithRevenueOver() - This function works the same way as driversWithRevenueOver(). The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount. For example, driverNamesWithRevenueOver(drivers, 2000) will return ['Sammy'], as Sammy is the name of the matching driver object with a revenue greater than 2000.



// exactMatchToList() - This function works the same way as the exactMatch() function, except that instead of returning an array of driver objects, it returns an array of strings with each element in the array corresponding to the matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 }) will return ['Sammy'], as Sammy is the name of the matching driver object.
