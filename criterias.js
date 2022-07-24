//true is criteria a, false is criteria b
//if value is equal, then criterias return false

function FetchData() {
  var array = []
  fetch("Datas/aapl.csv",
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

FetchData();

//var AllData = [[1, 155.389999, 156.279999, 153.410004, 154.089996, 154.089996, 66625400], [2, 154.500000, 210.570007, 151.940002, 200.350006, 200.350006, 65086600], [3, 151.119995, 153.720001, 150.369995, 153.039993, 153.039993, 64823400]]

var AllData = array;



/*function criteria_2(a) { //for eg. if a = 1, then it is criteria 2.1
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
} */

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
console.log(criteria_5(2), ", must be true");*/