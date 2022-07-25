//true is criteria a, false is criteria b
//if value is equal, then criterias return false

//partially completed portion of parsing market data from csv files downloaded from the web to arrays
function FetchData() { //fetch data function
  var array = []
  fetch("Datas/AAPL.csv",
    { method: "GET" })
    .then(res => res.text())
    .then((csv) => {
      csv = csv.split("\n");
      for (let row of csv) {
        row = row.split(',');
        array.push(row);
      };
      console.log(array);
    });
}
//FetchData();

//many criterias coincide to form the price pattern
function criteria_2(a) { //for eg. if a = 1, then it is criteria 2.1
  if (AllData[3 - a][1] > AllData[3 - a][4]) {
    return true;
  }
  else {
    return false;
  }
};

function criteria_3(a, b, c) { //for eg. if a = 1 & b = 1 & c = 1, then criteria 3.1,
  if (AllData[Math.floor(b / 3)][3 * a - 2] > AllData[1 + Math.floor(b / 2)][(-3) * c + 7]) {
    return true;
  }
  else {
    return false
  }
}

function criteria_4(a) { //for eg. if a = 1, then it is criteria 4.1
  //rule is exception to true is a rule. here, output true means criteria 4.1 is achieved
  if (AllData[3 - a][4] - AllData[3 - a][1] < Math.min(AllData[3 - a][2] - AllData[3 - a][4], AllData[3 - a][1] - AllData[3 - a][3]) && criteria_2(2) == false) {
    return true;
  }
  else {
    return false;
  }
}

function criteria_5(a) {//for eg. if a = 1, then it is criteria 5.1
  if (AllData[0][4] > (AllData[a][1] + AllData[a][4]) / 2) {
    return true;
  }
  else {
    return false;
  }
} 

/*console.log(criteria_2(1), ", must be false");
console.log(criteria_2(2), ", must be false");
console.log(criteria_2(3), ", must be true");

console.log(criteria_3(1, 1, 1), ", must be false");
console.log(criteria_3(1, 1, 2), ", must be true");
console.log(criteria_3(1, 2, 1), ", must be true");
console.log(criteria_3(1, 3, 1), ", must be true");
console.log(criteria_3(2, 1, 2), ", must be false");
console.log(criteria_3(2, 2, 1), ", must be true");

console.log(criteria_4(2), ", must be false");

console.log(criteria_5(1), ", must be false");
console.log(criteria_5(2), ", must be true"); */

//checking for individual price patterns by checking if a list of criteria has been satisfied
function PiercingLine() {
  if (criteria_2(2) == false) {
    return false;
  }
  if (criteria_2(3) == true) {
    return false;
  }
  if (criteria_3(2, 1, 2) == true) {
    return false;
  }
  if (criteria_5(1) == false) {
    return false;
  }
  else {
    return true;
  }
}

function BullishEngulfing() {
  if (criteria_2(2) == true) {
    return false;
  }
  if (criteria_2(3) == true) {
    return false;
  }
  if (criteria_3(1, 1, 1) == true) {
    return false;
  }
  if (criteria_3(2, 1, 2) == false) {
    return false;
  }
  else {
    return true;
  }
}

function MorningStar() {
  if (criteria_2(1) == false) {
    return false;
  }
  if (criteria_2(2) == true) {
    return false;
  }
  if (criteria_2(3) == true) {
    return false;
  }
  if (criteria_3(1, 1, 1) == false) {
    return false;
  }
  if (criteria_3(2, 2, 1) == true) {
    return false;
  }
  if (criteria_4(2) == false) {
    return false;
  }
  if (criteria_5(2) == false) {
    return false;
  }
  else {
    return true;
  }
}

function UpsideGap() {
  if (criteria_2(1) == true) {
    return false;
  }
  if (criteria_2(2) == true) {
    return false;
  }
  if (criteria_2(3) == false) {
    return false;
  }
  if (criteria_3(1, 1, 1) == true) {
    return false;
  }
  if (criteria_3(1, 1, 2) == false) {
    return false;
  }
  if (criteria_3(1, 3, 1) == false) {
    return false;
  }
  if (criteria_3(2, 1, 2) == true) {
    return false;
  }
  if (criteria_3(2, 2, 1) == false) {
    return false;
  }
  else {
    return true;
  }
}

//algorithm to put data sets through multiple checks for the price pattern
function algorithm(name){
  console.log(AllData);
  if(UpsideGap() == true){
    console.log(name, "has upside gap");
  }
  else if(MorningStar() == true){
    console.log(name, "has morning star");
  }
  else if(PiercingLine() == true){
    console.log(name, "has piercing line");
  }
    else if(BullishEngulfing() == true){
    console.log(name, "has bullish engulfing");
  }
  else{
    console.log(name, "has no pattern");
  }
}