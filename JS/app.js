// Within your javascript file (example: app.js), create separate JS object literals for each 
// shop location that outputs the following to the sales.html file:

// 1. Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 2. Uses a method of that object to generate a random number of customers per hour. 
// Objects/Math/random
// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using 
// average cookies purchased and the random number of customers generated
// 4. Store the results for each location in a separate array… perhaps as a property of the object 
// representing that location
// 5. Display the values of each array as unordered lists in the browser
// 6. Calculating the sum of these hourly totals;




var seattle = {

    // avgCustomers: 0,
    //avgCookiesPerCustomer: 0,
    // averageCategories: ['MinCustomers', 'MaxCustomers', 'AvgCookiesPCustomer'],
    // averageNumbers: [23, 65, 6.5],
    
    randomNumber: Math.floor((Math.random() * 100) + 1),

    
        var maxCustomers = 65;
        var minCustomers = 23;
        console.log("this is the first " + randomNumber);

        if(randomNumber > maxCustomers) {
            randomNumber -= 25;
            console.log(randomNumber);
            
        }
        
        if(randomNumber < minCustomers) {
            randomNumber += 38; //this is a crappy and imperfect fix, however.
            //console.log(randomNumber);
            
        }



}

console.log(randomNumber);
//console.log(avgCustomers);

