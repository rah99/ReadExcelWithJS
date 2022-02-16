var xlsx = require("xlsx")
var dataPathExcel = "testExcel.xlsx"
var wb = xlsx.readFile(dataPathExcel)
var sheetName = wb.SheetNames[0]
var sheetValue = wb.Sheets[sheetName]
// console.log(sheetValue)
let excelData = xlsx.utils.sheet_to_json(sheetValue)
console.log(excelData)

occurrance = {}
excelData.forEach(function (o) {
    if (!occurrance.hasOwnProperty(o.Sno)) {
        occurrance[o.Sno] = 0;
    }
    occurrance[o.Sno] += 1;
})

console.log(occurrance);
