'use strict';

let tableElem = document.getElementById('stores');

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// constructor

function ShopOne(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.total = 0;
  this.cookieArr = [];

}

// calc cookies cust per hour

ShopOne.prototype.calcCustPerHour = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
};

// calc cookies per hour

ShopOne.prototype.cookiesPerHour = function(){
  for (let i = 0; i <storeHours.length; i++){
    let cookieTotal = Math.ceil(this.avgSale * this.calcCustPerHour());
    this.cookieArr.push(cookieTotal);
    this.total += cookieTotal;
  }
  console.log(this.cookieArr);
};

// render

let header = function(){
  let row = document.getElementById('hours');
  let th = document.createElement('th');

  th.textContent = 'locations';

  for (let i = 0; i < storeHours.length; i++) {
    th = document.createElement('th');
    th.textContent = storeHours[i];
    row.appendChild(th);
  }

  let th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);
};



// function header() {
// 
  // lettrElem = document.createElement('t
  // tableSelector.appendChild(trElem);
// 
  // let thElem = document.createElement('th');
  // thElem.textContent = 'Stores';
  // trElem.appendChild(thElem);
// 
  // for (let j = 0; j < hours.length; j++) {
    // thElem = document.createElement('th');
    // thElem.textContent = hours[j];
    // trElem.appendChild(thElem);
  // }
// 
// }

header();
ShopOne.prototype.render = function () {

  let trElem = document.createElement('tr');
  tableSelector.appendChild(trElem);

  let tdElem = document.createElement('td');
  tdElem.textContent = this.name;
  trElem.appendChild(tdElem);

  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesBought[i];

    trElem.appendChild(tableData);

  }

  let totalTableData = document.createElement('td');
  totalTableData.textContent = this.total;
  trElem.appendChild(totalTableData);

}

let newStoreForm = document.getElementById('form');



ShopOne.prototype.render = function(){
  this.cookiesPerHour();

  let tableRow = document.createElem('tr');
  tableElem.appendChild(tableRow);

  let th = document.createElem('th');
  th.textContent = this.location;
  tableRow.appendChild('th');

  for (let i = 0; i <storeHours.length; i++){
    let td = document.creatElem('td');
    td.textContent = this.cooikeArr[i];
    tableRow.appendChild(td);
  }

  let totalCell = document.createElem('td');
  totalCell.textContent = this.total;
  tableRow.appendChild(totalCell);

};

Seattle.cookieSales();
Tokyo.cookieSales();
Dubai.cookieSales();
Paris.cookieSales();
Lima.cookieSales();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);


function handleSubmit(event) {
  event.preventDefault();
  console.log('form submitted');

  let location = event.target.location.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgSale = event.target.avgSale.value;

  let newStore = new ShopOne(location, minCust, maxCust, avgSale);

  newStore.cookieSales();
  newStore.render();
  console.log(newStore);

}

newStoreForm.addEventListener('submit', handleSubmit);












