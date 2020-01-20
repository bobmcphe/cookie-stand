'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am',
 '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 
var AllStores = [];

function CreateStore(name, max, min, avg) {
  this.name = name;
  this.maxCustomers = max;
  this.minCustomers = min;
  this.aveCookiesPerC = avg;
  this.randomNumberArray = [];
  this.aveCookieSalesPerHr = [];
  this.dailyTotal = 0;
  AllStores.push(this);
  
}

// 

CreateStore.prototype.getRandom = function() {
        var final = (Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
        this.randomNumberArray.push(Math.floor(final));

      };

CreateStore.prototype.getHourlySales = function() {
               // this.dailyTotal = 0;
                //this.aveCookieSalesPerHr = [];

              for (var i=0; i<hours.length; i++) {
                this.getRandom(); // this line should be refactored to take place in the getRandom function.
                                  // that way the array would already be populated before we try to use it.
                this.aveCookieSalesPerHr.push(Math.floor(this.randomNumberArray[i]*this.aveCookiesPerC));
                this.dailyTotal += this.randomNumberArray[i];
                }
          };


//Instances-----------------------------------------------------------------
var seattle = new CreateStore('Seattle', 65, 23, 6.3);
var tokyo = new CreateStore('Tokyo', 24, 3, 1.2);
var dubai = new CreateStore('Dubai', 38, 11, 3.7);
var paris = new CreateStore('Paris', 38, 20, 2.3);
var lima = new CreateStore('Lima', 16, 2, 4.6);

//TABLE=====================================================================


var table = document.getElementById('table');

function renderHeader (){
    var headerRow = document.createElement('tr');
    var headerStore = document.createElement('th');
    headerStore.textContent = 'Locations';
    headerRow.appendChild(headerStore);
    table.appendChild(headerRow);
    
    for (var i=0; i<hours.length; i++){
        var headerHours = document.createElement('th');
        headerHours.textContent = hours[i];
        headerRow.appendChild(headerHours);
    }
    var headerTotal = document.createElement('th');
    headerTotal.textContent = 'Store Total';
    headerRow.appendChild(headerTotal);
}
    CreateStore.prototype.body = function(){

      //  console.log(this.getHourlySales());
        
        this.getRandom();
        this.getHourlySales();

        var bodyRow = document.createElement('tr');
        table.appendChild(bodyRow); 

        //Create Store name for each row
        var bodyStore = document.createElement('td');
        bodyStore.textContent = this.name;
        bodyRow.appendChild(bodyStore);
        
        //Created the Hours by looping through the hours array and rendering hourlySales
        for (var i=0; i<hours.length; i++){
          var bodyHours = document.createElement('td');
          bodyHours.textContent = this.aveCookieSalesPerHr[i];
         // console.log(this.aveCookieSalesPerHr[i] + 'this is the body rendering loop!');
          bodyRow.appendChild(bodyHours);
        }

        //Grabbing Daily Total and rendering it at the end of the row.
        var bodyTotal = document.createElement('td');
        bodyTotal.textContent = this.dailyTotals;
        bodyRow.appendChild(bodyTotal);
    }

function renderFooter (){
    var footerRow = document.createElement('tr');
    var footerStore = document.createElement('th');
    footerStore.textContent = 'Hourly Totals';
    footerRow.appendChild(footerStore);

    var grandTotal = 0;
    var totalHourlySales = 0;
    for (var i=0; i<hours.length; i++){
        var totalHourlySales = 0;
        for (var j=0; j<AllStores.length; j++){
            totalHourlySales += AllStores[j].aveCookieSalesPerHr[i];
            grandTotal += AllStores[j].aveCookieSalesPerHr[i];
        }
        var totalHours = document.createElement('th');
        totalHours.textContent = totalHourlySales;
        footerRow.appendChild(totalHours);
    }
    var grandTotalSales = document.createElement('th');
    grandTotalSales.textContent = grandTotal;
    footerRow.appendChild(grandTotalSales);
    table.appendChild(footerRow);
}

// executable footer--------------------


// DOM Manipulation
var parent = document.getElementById('header');

var titleVar = document.createElement('h1');
titleVar.textContent = "Salmon Cookies!";
parent.appendChild(titleVar);




renderHeader();

for(var i=0; i < AllStores.length; i++){
    AllStores[i].body();
}
renderFooter();


