import { readFile, utils } from "xlsx"
var dataPathExcel = "testExcel.xlsx"
var wb = readFile(dataPathExcel)
var sheetName = wb.SheetNames[0]
var sheetValue = wb.Sheets[sheetName]
// console.log(sheetValue)
let excelData = utils.sheet_to_json(sheetValue)
console.log(excelData)