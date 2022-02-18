var xlsx = require("xlsx")
var dataPathExcel = "HiredCandidateCaseStudy.xlsx"
var wb = xlsx.readFile(dataPathExcel)
var sheetName = wb.SheetNames[3]
var sheetValue = wb.Sheets[sheetName]
// console.log(sheetValue)
let excelData = xlsx.utils.sheet_to_json(sheetValue)
console.log(excelData)

var occurrance = {}
excelData.forEach(function (o) {
    if (!occurrance.hasOwnProperty(o.Benefit1)) {
        occurrance[o.Benefit1] = 0;
    }
    occurrance[o.Benefit1] += 1;
})

console.log(occurrance);

function getKeysWithHighestValue(o, n) {
    var keys = Object.keys(o);
    keys.sort(function (a, b) {
        return o[b] - o[a];
    })
    // console.log(keys);
    return keys.slice(0, n);
}

console.log(getKeysWithHighestValue(occurrance, 1))
