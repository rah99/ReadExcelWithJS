var xlsx = require("xlsx")
var dataPathExcel = "testExcel.xlsx"
var wb = xlsx.readFile(dataPathExcel)
var sheetName = wb.SheetNames[0]
var sheetValue = wb.Sheets[sheetName]
// console.log(sheetValue)
let excelData = xlsx.utils.sheet_to_json(sheetValue)
// console.log(excelData)

var occurrance = {}
excelData.forEach(function (o) {
    if (!occurrance.hasOwnProperty(o.Name)) {
        occurrance[o.Name] = 0;
    }
    occurrance[o.Name] += 1;
})

// console.log(occurrance);

function getKeysWithHighestValue(o, n) {
    var keys = Object.keys(o);
    keys.sort(function (a, b) {
        return o[b] - o[a];
    })
    // console.log(keys);
    return keys.slice(0, n);
}

console.log(getKeysWithHighestValue(occurrance, 1))
