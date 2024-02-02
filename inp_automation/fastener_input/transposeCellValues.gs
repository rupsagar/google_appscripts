function transposeCellValues(Data) {
  Data = Object.keys(Data[0]).map(function(columnNumber) {
          return Data.map(function(row) {
            return row[columnNumber];
          });
        });
  return Data;
}
