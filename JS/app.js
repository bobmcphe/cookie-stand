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
  }
}


   
seattle.getHourlySales();
seattle.concatArrays();


