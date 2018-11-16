
function tableConvert(elem) {

    var resultTable = [], tmpList = {}, idx = 0, counter = 0, dataType, dataValue;
    
    var findedTable = document.querySelector(elem);
    var findedRows = findedTable.querySelectorAll('tr');
    var findedHeader = findedTable.querySelectorAll('th');
    var findedValues = findedTable.querySelectorAll('td');

    var colsCount = findedHeader.length;
    var rowsCount = findedRows.length;

    while (counter < ((rowsCount - 1) * colsCount)) {
        dataType = findedHeader[idx].getAttribute('data-type');
        switch (dataType) {
            case  'int':
                dataValue = parseInt(findedValues[counter].textContent);
                break;
            case  'float':
                dataValue = parseFloat(findedValues[counter].textContent);
                break;
            case  'date':
                var date = new Date(findedValues[counter].textContent);
                dataValue = date;
                break;
            default:
                dataValue = findedValues[counter].textContent;
                break;
        }
        tmpList[findedHeader[idx].textContent] = dataValue;
        counter++;

        if (idx === colsCount - 1) {
            resultTable.push(tmpList);
            tmpList = {};
        }
        idx = (idx + 1) % colsCount;
    }
    return resultTable;
}
console.table(tableConvert('table'));