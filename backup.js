'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function CreateStore(name, max, min, avg) {
  this.name = name;
  this.maxCustomers = max;
  this.minCustomers = min;
  this.aveCookiesPerC = avg;
  this.aveCookieSalesPerHr = [];

  this.getRandom = function() {
        var final = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
        return Math.floor(final);
      };

  this.getHourlySales = function() {
                var totalCookiesPerHour = 0;
        
              for (var i=0; i<hours.length; i++) {
                var customersPerHour = this.getRandom();
                console.log(customersPerHour)
                var totalCookiesPerHour = Math.floor((customersPerHour * this.avgCookiesPerC));
                this.aveCookieSalesPerHr.push(totalCookiesPerHour);
        
                console.log(this.aveCookieSalesPerHr);
                }
          };
    
  this.concatArrays = function (){
        for(var i=0; i < hours.length; i++) {
          //console.log('we are here' + i);
          seattleAnswer += `${hours[i]}: ${this.aveCookieSalesPerHr[i]} . `;
          
        }
        return seattleAnswer;
      }
      


  this.render = function(){
    var fishData = document.getElementById('fishData');

    // call an external function and get me a random number
    // var randomNumber = random(hours.length);

    // create for me a p tag and append it onto the the fishData tag
    var thePtagForfish = document.createElement('p');
    thePtagForfish.textContent = this.name;
    fishData.appendChild(thePtagForfish);

    // create for me another p tag and set the value to a specific item in the array
    var output = document.createElement('p');
    output.textContent = hours[this.getRandom];
    fishData.appendChild(output);

    // output all of the toys possible onto the DOM
    var ulID = document.getElementById('ulID');
    for(var i=0; i <hours.length; i++){
      var newTag = document.createElement('li');
      newTag.textContent = hours[i] + ': ' + this.aveCookieSalesPerHr[i];

      ulID.appendChild(newTag);
    }

  }


}


var seattleAnswer = ''; //need to change to seattle.Answer, maybe and attach to constructor, then change the rest of the code to match

// var seattle = {

//   name: 'seattle',
//   maxCustomers: 65,
//   minCustomers: 23,
//   avgCookiesPerC: 6.3, 
//   aveCookieSalesPerHr: [],
  


//   getRandom: function() {
//     var final = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//     return Math.floor(final);
//   },


//   getHourlySales: function() {
//         var totalCookiesPerHour = 0;

//       for (var i=0; i<hours.length; i++) {
//         var customersPerHour = this.getRandom();
//         console.log(customersPerHour)
//         var totalCookiesPerHour = Math.floor((customersPerHour * this.avgCookiesPerC));
//         this.aveCookieSalesPerHr.push(totalCookiesPerHour);

//         console.log(this.aveCookieSalesPerHr);
//         }
//   },

//     concatArrays: function (){
//     for(var i=0; i < hours.length; i++) {
//       //console.log('we are here' + i);
//       seattleAnswer += `${hours[i]}: ${this.aveCookieSalesPerHr[i]} . `;
      
//     }
//     return seattleAnswer;
//   },
  
// render: function(){
//   var fishData = document.getElementById('fishData');

//   // call an external function and get me a random number
//   // var randomNumber = random(hours.length);

//   // create for me a p tag and append it onto the the fishData tag
//   var thePtagForfish = document.createElement('p');
//   thePtagForfish.textContent = this.name;
//   fishData.appendChild(thePtagForfish);

//   // create for me another p tag and set the value to a specific item in the array
//   var output = document.createElement('p');
//   output.textContent = hours[this.getRandom];
//   fishData.appendChild(output);

//   // output all of the toys possible onto the DOM
//   var ulID = document.getElementById('ulID');
//   for(var i=0; i <hours.length; i++){
//     var newTag = document.createElement('li');
//     newTag.textContent = hours[i] + ': ' + this.aveCookieSalesPerHr[i];

//     ulID.appendChild(newTag);
//   }

// }
// }

// var tokyo = {

//   name: 'tokyo',
//   maxCustomers: 24,
//   minCustomers: 3,
//   avgCookiesPerC: 1.2, 
//   aveCookieSalesPerHr: [],
  


//   getRandom: function() {
//     var final = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//     return Math.floor(final);
//   },


//   getHourlySales: function() {
//         var totalCookiesPerHour = 0;

//       for (var i=0; i<hours.length; i++) {
//         var customersPerHour = this.getRandom();
//         console.log(customersPerHour)
//         var totalCookiesPerHour = Math.floor((customersPerHour * this.avgCookiesPerC));
//         this.aveCookieSalesPerHr.push(totalCookiesPerHour);

//         console.log(this.aveCookieSalesPerHr);
//         }
//   },

//     concatArrays: function (){
//     for(var i=0; i < hours.length; i++) {
//       //console.log('we are here' + i);
//       tokyoAnswer += `${hours[i]}: ${this.aveCookieSalesPerHr[i]} . `;
      
//     }
//     return tokyoAnswer;
//   },
  
// render: function(){
//   var fishData = document.getElementById('fishData');

//   // call an external function and get me a random number
//   // var randomNumber = random(hours.length);

//   // create for me a p tag and append it onto the the fishData tag
//   var thePtagForfish = document.createElement('p');
//   thePtagForfish.textContent = this.name;
//   fishData.appendChild(thePtagForfish);

//   // create for me another p tag and set the value to a specific item in the array
//   var output = document.createElement('p');
//   output.textContent = hours[this.getRandom];
//   fishData.appendChild(output);

//   // output all of the toys possible onto the DOM
//   var ulID = document.getElementById('ulID');
//   for(var i=0; i <hours.length; i++){
//     var newTag = document.createElement('li');
//     newTag.textContent = hours[i] + ': ' + this.aveCookieSalesPerHr[i];

//     ulID.appendChild(newTag);
//   }

// }
// }











// var dubai = {

//   name: 'dubai',
//   maxCustomers: 38,
//   minCustomers: 11,
//   avgCookiesPerC: 3.7, 
//   aveCookieSalesPerHr: [],
  


//   getRandom: function() {
//     var final = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//     return Math.floor(final);
//   },


//   getHourlySales: function() {
//         var totalCookiesPerHour = 0;

//       for (var i=0; i<hours.length; i++) {
//         var customersPerHour = this.getRandom();
//         console.log(customersPerHour)
//         var totalCookiesPerHour = Math.floor((customersPerHour * this.avgCookiesPerC));
//         this.aveCookieSalesPerHr.push(totalCookiesPerHour);

//         console.log(this.aveCookieSalesPerHr);
//         }
//   },

//     concatArrays: function (){
//     for(var i=0; i < hours.length; i++) {
//       //console.log('we are here' + i);
//       dubaiAnswer += `${hours[i]}: ${this.aveCookieSalesPerHr[i]} . `;
      
//     }
//     return dubaiAnswer;
//   },
  
// render: function(){
//   var fishData = document.getElementById('fishData');

//   // call an external function and get me a random number
//   // var randomNumber = random(hours.length);

//   // create for me a p tag and append it onto the the fishData tag
//   var thePtagForfish = document.createElement('p');
//   thePtagForfish.textContent = this.name;
//   fishData.appendChild(thePtagForfish);

//   // create for me another p tag and set the value to a specific item in the array
//   var output = document.createElement('p');
//   output.textContent = hours[this.getRandom];
//   fishData.appendChild(output);

//   // output all of the toys possible onto the DOM
//   var ulID = document.getElementById('ulID');
//   for(var i=0; i <hours.length; i++){
//     var newTag = document.createElement('li');
//     newTag.textContent = hours[i] + ': ' + this.aveCookieSalesPerHr[i];

//     ulID.appendChild(newTag);
//   }

// }
// }

// dubai.getHourlySales();
//seattle.concatArrays();













var paris = {

  name: 'paris',
  maxCustomers: 38,
  minCustomers: 20,
  avgCookiesPerC: 2.3, 
  aveCookieSalesPerHr: [],
  


  getRandom: function() {
    var final = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    return Math.floor(final);
  },


  getHourlySales: function() {
        var totalCookiesPerHour = 0;

      for (var i=0; i<hours.length; i++) {
        var customersPerHour = this.getRandom();
        console.log(customersPerHour)
        var totalCookiesPerHour = Math.floor((customersPerHour * this.avgCookiesPerC));
        this.aveCookieSalesPerHr.push(totalCookiesPerHour);

        console.log(this.aveCookieSalesPerHr);
        }
  },

    concatArrays: function (){
    for(var i=0; i < hours.length; i++) {
      //console.log('we are here' + i);
      parisAnswer += `${hours[i]}: ${this.aveCookieSalesPerHr[i]} . `;
      
    }
    return parisAnswer;
  },
  
render: function(){
  var fishData = document.getElementById('fishData');

  // call an external function and get me a random number
  // var randomNumber = random(hours.length);

  // create for me a p tag and append it onto the the fishData tag
  var thePtagForfish = document.createElement('p');
  thePtagForfish.textContent = this.name;
  fishData.appendChild(thePtagForfish);

  // create for me another p tag and set the value to a specific item in the array
  var output = document.createElement('p');
  output.textContent = hours[this.getRandom];
  fishData.appendChild(output);

  // output all of the toys possible onto the DOM
  var ulID = document.getElementById('ulID');
  for(var i=0; i <hours.length; i++){
    var newTag = document.createElement('li');
    newTag.textContent = hours[i] + ': ' + this.aveCookieSalesPerHr[i];

    ulID.appendChild(newTag);
  }

}
}

paris.getHourlySales();
//seattle.concatArrays();


























var lima = {

  name: 'lima',
  maxCustomers: 16,
  minCustomers: 2,
  avgCookiesPerC: 4.6, 
  aveCookieSalesPerHr: [],
  


  getRandom: function() {
    var final = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
    return Math.floor(final);
  },


  getHourlySales: function() {
        var totalCookiesPerHour = 0;

      for (var i=0; i<hours.length; i++) {
        var customersPerHour = this.getRandom();
        console.log(customersPerHour)
        var totalCookiesPerHour = Math.floor((customersPerHour * this.avgCookiesPerC));
        this.aveCookieSalesPerHr.push(totalCookiesPerHour);

        console.log(this.aveCookieSalesPerHr);
        }
  },

    concatArrays: function (){
    for(var i=0; i < hours.length; i++) {
      //console.log('we are here' + i);
      limaAnswer += `${hours[i]}: ${this.aveCookieSalesPerHr[i]} . `;
      
    }
    return limaAnswer;
  },
  
render: function(){
  var fishData = document.getElementById('fishData');

  // call an external function and get me a random number
  // var randomNumber = random(hours.length);

  // create for me a p tag and append it onto the the fishData tag
  var thePtagForfish = document.createElement('p');
  thePtagForfish.textContent = this.name;
  fishData.appendChild(thePtagForfish);

  // create for me another p tag and set the value to a specific item in the array
  var output = document.createElement('p');
  output.textContent = hours[this.getRandom];
  fishData.appendChild(output);

  // output all of the toys possible onto the DOM
  var ulID = document.getElementById('ulID');
  for(var i=0; i <hours.length; i++){
    var newTag = document.createElement('li');
    newTag.textContent = hours[i] + ': ' + this.aveCookieSalesPerHr[i];

    ulID.appendChild(newTag);
  }

}
}





var seattle = new CreateStore('Seattle', 65, 23, 6.3);
var tokyo = new CreateStore('Tokyo', 24, 3, 1.2);
var dubai = new CreateStore('Dubai', 38, 11, 3.7);
var paris = new CreateStore('Paris', 38, 20, 2.3);
var lima = new CreateStore('Lima', 16, 2, 4.6);



seattle.getHourlySales();
seattle.concatArrays();

tokyo.getHourlySales();
//tokyo.concatArrays();
dubai.getHourlySales();
lima.getHourlySales();

// DOM Manipulation
var parent = document.getElementById('header');

var titleVar = document.createElement('h1');
titleVar.textContent = "Salmon Cookies!";
parent.appendChild(titleVar);





seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();




// CreateStore.prototype.render = function(){
//   this.getRandom();
//   this.getHourlySales();
//   this.concatArrays();

//     var fishData = document.getElementById('fishData');

//     // call an external function and get me a random number
//     // create for me a p tag and append it onto the the fishData tag
//     var thePtagForfish = document.createElement('p');
//     thePtagForfish.textContent = this.name;
//     fishData.appendChild(thePtagForfish);

//     // create for me another p tag and set the value to a specific item in the array
//     var output = document.createElement('p');
//     output.textContent = hours[this.getRandom];
//     fishData.appendChild(output);

//     // output all of the toys possible onto the DOM
//     var ulID = document.getElementById('ulID');
//     for(var i=0; i <hours.length; i++){
//       var newTag = document.createElement('li');
//       newTag.textContent = hours[i] + ': ' + this.aveCookieSalesPerHr[i];

//       ulID.appendChild(newTag);
//     }

//   }