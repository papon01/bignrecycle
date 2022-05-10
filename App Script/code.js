function QY(){
var spreadsheetId = '1Hx3mLMGGY2LVGl7n2Q2qy1yQAYXr4NsHfeInZYJ3jXw';  // Please set the spreadsheet ID.
var targetSheet = 'billdata';  // Please set the sheet name.
var query = 'select *';  // Please set the query for retrieving the values.

var ss = SpreadsheetApp.openById(spreadsheetId);
var sheetId = ss.getSheetByName(targetSheet).getSheetId();
var url = "https://docs.google.com/spreadsheets/d/" + spreadsheetId + "/gviz/tq?gid=" + sheetId + "&tqx=out:csv&tq=" + encodeURIComponent(query);
var res = UrlFetchApp.fetch(url, {headers: {Authorization: "Bearer " + ScriptApp.getOAuthToken()}});
var values = Utilities.parseCsv(res.getContentText());
Logger.log(values)

}