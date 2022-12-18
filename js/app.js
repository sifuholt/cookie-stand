'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', 
'2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storesTable = document.getElementById('stores');

let storeForm = document.getElementById('storeForm');

let total = 0;
function custPerHour(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}


// constructor

function ShopOne(syoreName, minCust, maxCust, avgSale) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.total = 0;
  this.cookieArr = [];

}

// calc cookies per hour

ShopOne.prototype.cookiesPerHour = function(){
  for (let i = 0; i <storeHours.length; i++){
    let cookieTotal = Math.ceil(this.avgSale * this.calcCustPerHour());
    this.cookieArr.push(cookieTotal);
    this.total += cookieTotal;
  }
  console.log(this.cookieArr);
};

// 
// let tableElem = document.createElement('table');
// storesTable.appendChild(tableElem);
// 
// let row1 = document.createElement('tr');
// tableElem.appendChild(row1);
// 
// let firstCell = document.createElement('th');
// firstCell.textContent = 'Store';
// row1.appendChild(firstCell);
// 
// for (let i = 0; i < hours.length; i++) {
  // let th1Elem = document.createElement('th');
  // th1Elem.textContent = hours[i];
  // row1.appendChild(th1Elem);
// }
// 
// let locationTotal = document.createElement('th');
// locationTotal.textContent = 'Daily Total';
// row1.appendChild(locationTotal);
// 
// render

ShopOne.prototype.cookiesBought = function () {
  for (let i = 0; i < hours.length; i++) {
    let custEachHour = custPerHour(this.minCust, this.maxCust);
    let cookies = Math.round(this.avgCookieBought * custEachHour);
    this.cookiesPerHour.push(cookies);
    this.totalCookies += this.cookiesPerHour[i];

  }
}


let tableElem = document.createElement('table');
storesTable.appendChild(tableElem);

let row1 = document.createElement('tr');
tableElem.appendChild(row1);

let firstCell = document.createElement('th');
firstCell.textContent = 'Store';
row1.appendChild(firstCell);

for (let i = 0; i < hours.length; i++) {
  let th1Elem = document.createElement('th');
  th1Elem.textContent = hours[i];
  row1.appendChild(th1Elem);

}

let locationTotal = document.createElement('th');
locationTotal.textContent = 'Daily Total';
row1.appendChild(locationiTotal);

ShopOne.prototype.render = function () {
  this.cookiesBoughtEachHour();

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.name;
  row2.appendChild(td1Elem);

  for (let i = 0; i < hours.length; i++) {
    let td2Elem = document.createElement('td');
    td2Elem.textContent = this.cookiesPerHour[i];
    row2.appendChild(td2Elem);

  }
  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.totalCookies;
  row2.appendChild(dailyTotal);

}

let Seattle = new ShopOne('Seattle', 23, 65, 6.3);
let Tokyo = new ShopOne('Tokyo', 3,24, 1.2);
let Dubai = new ShopOne('Dubai', 11, 38, 3.7);
let Paris = new ShopOne('Paris', 20, 38, 2.3);
let Lima = new ShopOne('Lima', 2, 16, 4.6);

let cities = [Seattle, Tokyo, Dubai, Paris, Lima];

for (let i = 0; i < cities.length/ i++) {
  cities[i].render();

}
let row3 = document.createElement('tr');

function footer(){
  let grandTotal = 0;
  tableElem.appendChild(row3);

  let totalCell = document.createElement('td');
  totalCell.textContent = 'Total';
  row3.appendChild(totalCell);

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotals = 0;
    for (let j = 0; j < cities.length; j++) {
      let cookies = cities[j].cookiesPerHour[i];
      hourlyTotals += cookies;
    }
    let hourlyTotalData = document.createElement('td');
    hourlyTotalData.textContent = hourlyTotals;
    row3.appendChild(hourlyTotalData);
    grandTotal += hourlyTotals;
  }

  let grantTotalData = document.createElement('td');
  grandTotalData.textContent = grandTotal;
  row3.appendChild(grantTotalData);
}


function handleSubmit(event) {
  event.preventDefault();

  let storeName = event.target.storeName.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgSale = parseInt(event.target.avgSale.value);

  let newStore = new ShopOne(storeName, minCust, maxCust, avgSale);
  cities.push(newStore);
  newStore.render();
  row3.innerHtml = '';
  footer();
  document.getElementById('storeForm').requestFullscreen();
  
}

storeForm.addEventListener('submit', handleSubmit);






// calc cookies cust per hour
// 
// ShopOne.prototype.calcCustPerHour = function(){
  // // return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
// };
// 


// render
// 
// let header = function(){
  // let row = document.getElementById('hours');
  // let th = document.createElement('th');
// 
  // th.textContent = 'locations';
// 
  // for (let i = 0; i < storeHours.length; i++) {
    // th = document.createElement('th');
    // th.textContent = storeHours[i];
    // row.appendChild(th);
  // }
// 
  // let th = document.createElement('th');
  // th.textContent = 'Total';
  // tr.appendChild(th);
// };
// 
// 

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
// 
// header();
// ShopOne.prototype.render = function () {
// 
  // let trElem = document.createElement('tr');
  // tableSelector.appendChild(trElem);
// 
  // let tdElem = document.createElement('td');
  // tdElem.textContent = this.name;
  // trElem.appendChild(tdElem);
// 
  // for (let i = 0; i < hours.length; i++) {
    // let tableData = document.createElement('td');
    // tableData.textContent = this.cookiesBought[i];
// 
    // trElem.appendChild(tableData);
// 
  // }
// 
  // let totalTableData = document.createElement('td');
  // totalTableData.textContent = this.total;
  // trElem.appendChild(totalTableData);
// 
// }
// 
// let newStoreForm = document.getElementById('form');
// 
// 
// 
// ShopOne.prototype.render = function(){
  // this.cookiesPerHour();
// 
  // let tableRow = document.createElem('tr');
  // tableElem.appendChild(tableRow);
// 
  // let th = document.createElem('th');
  // th.textContent = this.location;
  // tableRow.appendChild('th');
// 
  // for (let i = 0; i <storeHours.length; i++){
    // let td = document.creatElem('td');
    // td.textContent = this.cooikeArr[i];
    // tableRow.appendChild(td);
  // }
// 
  // let totalCell = document.createElem('td');
  // totalCell.textContent = this.total;
  // tableRow.appendChild(totalCell);
// 
// };
// 
// Seattle.cookieSales();
// Tokyo.cookieSales();
// Dubai.cookieSales();
// Paris.cookieSales();
// Lima.cookieSales();
// 
// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render();
// 
// console.log(Seattle);
// console.log(Tokyo);
// console.log(Dubai);
// console.log(Paris);
// console.log(Lima);
// 
// 
// function handleSubmit(event) {
  // event.preventDefault();
  // console.log('form submitted');
// 
  // let location = event.target.location.value;
  // let minCust = event.target.minCust.value;
  // let maxCust = event.target.maxCust.value;
  // let avgSale = event.target.avgSale.value;
// 
  // let newStore = new ShopOne(location, minCust, maxCust, avgSale);
// 
  // newStore.cookieSales();
  // newStore.render();
  // console.log(newStore);
// 
// }
// 
// newStoreForm.addEventListener('submit', handleSubmit);
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 