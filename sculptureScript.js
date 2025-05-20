const sculptureList = require('./data.js'); // import data.js

// Create an empty object to store the results
const sculptureListLengths = {};

// Iterate through each object in sculptureList
sculptureList.forEach((sculpture, index) => {
    // Create a new object for each sculpture
    sculptureListLengths[index] = {};
    
    // Iterate through each key in the sculpture object
    for (const key in sculpture) {
        // Store the length of each string value
        sculptureListLengths[index][key] = sculpture[key].length;
    }
});

// Log the first element to verify it matches the expected format
console.log(sculptureListLengths[0]);


