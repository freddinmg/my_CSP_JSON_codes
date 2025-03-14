function doGet() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Assets");
    var data = sheet.getDataRange().getValues();
    var jsonData = {};

    // Assume first row is headers
    var headers = data[1];
    jsonData['data'] = [];

    // Start from row 1 to skip headers
    for (var i = 2; i < data.length; i++) {
        var row = {};
        for (var j = 0; j < headers.length; j++) {
            row[headers[j]] = data[i][j];
        }
        jsonData['data'].push(row);
    }

    return ContentService.createTextOutput(JSON.stringify(jsonData))
        .setMimeType(ContentService.MimeType.JSON);
}
