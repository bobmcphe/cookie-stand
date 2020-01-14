var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// CreateStore = function(name, max, min, avg) {
//   var random = [];
//   var salesPerHour = [];
// }

// new CreateStore('test', 12, 66, 5.5);

var seattleAnswer = '';

var seattle = {

  name: 'seattle',
  maxCustomers: 65,
  minCustomers: 23,
  avgCookiesPerC: 6.3, 
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
      seattleAnswer += `${hours[i]}: ${this.aveCookieSalesPerHr[i]} . `;
      
    }
    return seattleAnswer;
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

seattle.getHourlySales();
seattle.concatArrays();




// DOM Manipulation
var parent = document.getElementById('header');

var potato = document.createElement('h1');
potato.textContent = "Hello Shelby!";
parent.appendChild(potato);



seattle.render();
