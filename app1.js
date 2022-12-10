

// 
// 
// let seattleLoc = {
  // location: 'Seattle',
  // minCust: 23,
  // maxCust: 65,
  // avgSale: 6.3,
  // cookieArr: [],
// 
// 
  // calcCustPerHour: function(){
    // return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
  // },
// 
// 
  // cookiesPerHour: function(){
    // for (let i = 0; i < storeHours.length; i++){
      // this.cookieArr.push(Math.ceil(this.avgSale * this.calcCustPerHour()));
    // }
    // console.log(this.cookieArr);
  // },
// 
  // render: function(){
    // this.cookiesPerHour();    let seattleLoc = document.createElem('seattleLoc');
    // liElement.appendChild(seattleLoc);
// 
    // let ul = document.createElement('ul');
    // seattleLoc.appendChild(ul);
// 
    // for (let i = 0; i < storeHours.length; i++){
      // let li = document.createElement('li');
      // li.textContent = storeHours[i] + seattleLoc.cookieArr[i] + 'cookies';
      // ul.appendChild(li);
    // }
// 
  // }
// 
// 
// };
// 
// seattleLoc.cookiesPerHour();
// seattleLoc.render();
// console.log(seattleLoc);
// 
// 
// 
// 
// 
// let tokyoLoc = {
  // location: 'Tokyo',
  // minCust: 3,
  // maxCust: 24,
  // avgSale: 1.2,
  // cookieArr: [],
// 
  // calcCustPerHour: function(){
    // return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
  // },
  // cookiesPerHour: function(){
    // for (let i = 0; i < storeHours.length; i++){
      // this.cookieArr.push(Math.ceil(this.avgSale * this.calcCustPerHour()));
    // }
    // console.log(this.cookieArr);
  // },
// 
// }
// 
// 
// 
// 
// 
// let dubaiLoc = {
  // location: 'Dubai',
  // minCust: 11,
  // maxCust: 38,
  // avgSale: 3.7,
  // cookieArr: [],
// 
  // calcCustPerHour: function(){
    // return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
  // },
  // cookiesPerHour: function(){
    // for (let i = 0; i < storeHours.length; i++){
      // this.cookieArr.push(Math.ceil(this.avgSale * this.calcCustPerHour()));
    // }
    // console.log(this.cookieArr);
  // },
// 
// }
// 
// 
// 
// 
// 
// let parisLoc = {
  // location: 'Paris',
  // minCust: 20,
  // maxCust: 38,
  // avgSale: 2.3,
  // cookieArr: [],
// 
  // calcCustPerHour: function(){
    // return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
  // },
  // cookiesPerHour: function(){
    // for (let i = 0; i < storeHours.length; i++){
      // this.cookieArr.push(Math.ceil(this.avgSale * this.calcCustPerHour()));
    // }
    // console.log(this.cookieArr);
  // },
// 
// }
// 
// 
// 
// 
// 
// let limaLoc = {
  // location: 'Lima',
  // minCust: 2,
  // maxCust: 16,
  // avgSale: 14.6,
  // cookieArr: [],
// 
  // calcCustPerHour: function(){
    // return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
  // },
  // cookiesPerHour: function(){
    // for (let i = 0; i < storeHours.length; i++){
      // this.cookieArr.push(Math.ceil(this.avgSale * this.calcCustPerHour()));
    // }
    // console.log(this.cookieArr);
  // },
// 
// }
// 




function createFooter(){

  let footerRow = document.createElem('tr');
  tableElem.appendChild(tableFooter);
  tableFooter.appendCHild(footerRow);

  let firstCell = document.createElem('th');
  footerRow.appendChild(firstCell);
  firstCell.textContent = 'grandTotal';

  let totalSum = 0;

  for (let i = 0; i < storeHours.length; i++){
    let hourlySum = 0;
    for (let j = 0; j < stores.length; j++){
      hourlySum += stores[j].cookiesArr[i];

    }

    totalSum += hourlySum;

    let totalFooterCell = document.createElem('td');
    totalFooterCell.textContent = hourlySum;
    footerRow.appendChild(totalFooterCell);
  }
  let grandTotal = document.createElem('td');
  grandTotal.textContent = totalSum;
  footerRow.appendChild(grandTotal);
}




function createHeader(){

  let headerRow = document.createElem('tr');
  tableElem.appendChild(headerRow);

  let firstCell = document.createElem('th');
  headerRow.appendChild(firstCell);
  firstCell.textContent = 'storeHours';

  for (let i = 0; i < storeHours.length; i++){
    let timeHeaderCell = document.createElem('th');
    timeHeaderCell.textContent = storeHours[i];
    headerRow.appendChild(timeHeaderCell);
  }

  let finalCell = document.createElem('th');
  headerRow.appendChild(finalCell);
  finalCell.textContent = 'location total';

}



function renderAllStores(){
  for (let i = 0; i < newStore.length; i++){
    newStore[i].render();
  }
}
