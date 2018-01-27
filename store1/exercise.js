var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
  return store1['2015-01-08'][0][1]
}


// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
  return store1['2015-01-06'][1][2]
}


// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. 
// After simply outputting the data, try creating an array that contains 
// the candy names.
function loopingData1() {
  var array = [];
  for(i=0; i<store1['2015-01-08'].length; i++){
    var arr = store1['2015-01-08'][i][0];
    array.push(arr);
  }
  return array;
}

// Create a loop to count the total number of candies sold on Jan 10 at store1. 
// Where do you have to initialize the counter variable? Why?
function loopingData2() {
  sum = 0;
  for(i=0; i<store1['2015-01-10'].length; i++){
    var total = store1['2015-01-10'][i][2];
    sum += total;
  }
  return sum
}

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {
  return Object.keys(store1);
}


// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {
  sum = 0;
  for(i=0; i<store1['2015-01-06'].length; i++) {
  var total = store1['2015-01-06'][i][2];
  sum += total
 }
 
 for(j=0; j<store1['2015-01-07'].length; j++) {
 var total = store1['2015-01-07'][j][2];
 sum += total
}

for(k=0; k<store1['2015-01-08'].length; k++) {
var total = store1['2015-01-08'][k][2];
sum += total
}

for(x=0; x<store1['2015-01-09'].length; x++) {
var total = store1['2015-01-09'][x][2];
sum += total
}

for(y=0; y<store1['2015-01-10'].length; y++) {
var total = store1['2015-01-10'][y][2];
sum += total
}
  return sum
}

// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5() {
  return 'At the beginning because it was a gllobal variable equal to zero'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {
  total = 0;
  for( i=0; i<store1['2015-01-10'].length; i++) {
    var candies = store1['2015-01-10'][i][1];
    var price = store1['2015-01-10'][i][2];
  total += (candies*price);
}  
return total.toFixed(2);
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
