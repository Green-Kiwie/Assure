
//some sample data for the code
var appl = [[1, 155.389999, 156.279999, 153.410004, 154.089996, 154.089996, 66625400], [2, 154.500000, 210.570007, 151.940002, 200.350006, 200.350006, 65086600], [3, 151.119995, 153.720001, 150.369995, 153.039993, 153.039993, 64823400]] //22 july 2022

var meta = [[1,158.139999,168.250000,157.020004,168.190002,168.190002,28618600],[2,160.309998,160.619995,155.000000,160.029999,160.029999,31400700],[3,162.149994,165.229996,158.490005,161.250000,161.250000,35250600],[4,163.570007,166.330002,160.320007,163.940002,163.940002,28595200]] //5 july 2022

var goog = [[1,106.050499,108.955254,105.487999,108.295998,108.295998,30288000],  [2,105.141998,106.544701,104.211250,105.839500,105.839500,37900000], [3,106.377502,106.394997,102.208000,105.926003,105.926003,60386000]] //26 may 2022

var msft = [[
1,258.140015,264.579987,257.130005,262.519989,262.519989,28547900], [2,257.890015,261.329987,253.500000,259.619995,259.619995,29043900], [3,255.490005,261.500000,253.429993,260.649994,260.649994,33175400],[4,257.239990,258.540009,246.440002,252.559998,252.559998,39199300]] //25 april 2022


//going through sample data and checking for price patterns
var stockList = [msft, meta, appl, goog];
var stockNames = ["msft", "meta", "appl", "goog"];
for (var i = 0; i < stockList.length; i++) {
  //console.log(stockList[i]);
  var AllData = stockList[i];
  algorithm(stockNames[i]);
}



//home page
//allows dynamic changing of recommended stocks (partially completed)
var todayPick = [["Apple Inc", "$150", "tech"], ["Microsoft Corporation", "$200", "tech"], ["United Airlines", "$300", "service"]];

document.getElementById('firstPickId').innerHTML = todayPick[0][0];
document.getElementById('firstPriceId').innerHTML = todayPick[0][1];

document.getElementById('secondPickId').innerHTML = todayPick[1][0];
document.getElementById('secondPriceId').innerHTML = todayPick[1][1];

document.getElementById('thirdPickId').innerHTML = todayPick[2][0];
document.getElementById('thirdPriceId').innerHTML = todayPick[2][1];

//past picks page
/*var pastPick = [["Apple Inc", "$150", "tech"], ["Microsoft Corporation", "$200", "tech"], ["United Airlines", "$300", "service"]];

document.getElementById('firstPastId').innerHTML = pastPick[0][0];

document.getElementById('secondPastId').innerHTML = pastPick[1][0];

document.getElementById('thirdPastId').innerHTML = pastPick[2][0]; */
