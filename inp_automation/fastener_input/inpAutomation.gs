function inpAutomation_v2(INP_DATA,INP_FILE_NAME) {
  const MAX_LINE_CHAR = 200; // max 256 allowed....lower value to be on safe side
  var inpFile = DocumentApp.create(INP_FILE_NAME);

  var numFast = INP_DATA.length-1;
  var numField = INP_DATA[1].length;

  var inpText = inpFile.getBody().editAsText();
  var printStarCard = false;
  var newText;
  var curLineChar = 0;
  var commaSpace = ', ';
  var commaEnter = ',\n';
  for (var fastID = 1; fastID <= numFast; fastID++) {
    for (var fieldID = 0; fieldID < numField; fieldID++) {
      if (INP_DATA[0][fieldID][0] == '*' && INP_DATA[fastID][fieldID] == 'NA') { // logic for keyword...if star card not to be included
        printStarCard = false;
      } else if (INP_DATA[0][fieldID][0] == '*' && INP_DATA[fastID][fieldID] == '') { // if star card to be included
        printStarCard = true;
        inpText.appendText('\n');
        newText = INP_DATA[0][fieldID];
        curLineChar = newText.length;
        if (curLineChar < MAX_LINE_CHAR) {
          inpText.appendText(newText);
        }
      } else if (INP_DATA[0][fieldID][0] != '*' && printStarCard == true) { // logic for parameters and data lines
        if (INP_DATA[0][fieldID].match(/DATA.*/) == null) { // logic for parameters only
          if (INP_DATA[fastID][fieldID] == 'NA') { // if parameter is not required put NA in value
            continue;
          } else if(INP_DATA[fastID][fieldID] == '' && typeof INP_DATA[fastID][fieldID] != 'number') { // if parameter requires no value
            newText = INP_DATA[0][fieldID];
            curLineChar = curLineChar + newText.length;
            if (curLineChar < MAX_LINE_CHAR) {
              inpText.appendText(commaSpace + newText);
              curLineChar = curLineChar + commaSpace.length;
            } else {
              inpText.appendText(commaEnter + newText);
              curLineChar = newText.length;
            }
          } else {
            newText = INP_DATA[0][fieldID] + '=' + INP_DATA[fastID][fieldID]
            curLineChar = curLineChar + newText.length;
            if (curLineChar < MAX_LINE_CHAR) {
              inpText.appendText(commaSpace + newText);
              curLineChar = curLineChar + commaSpace.length;
            } else { // if parameter value is omitted if it is optional
              inpText.appendText(commaEnter + newText);
              curLineChar = newText.length;
            }
          }
        } else { // logic for data lines
          if (INP_DATA[fastID][fieldID] == 'NA') {
            continue;
          }
          newText = INP_DATA[fastID][fieldID]
          if (INP_DATA[0][fieldID] == INP_DATA[0][fieldID-1]) { // fieldID will never be zero as the starting field will always be a keyword
            inpText.appendText(', '); // if one data line has multiple entries
            curLineChar = curLineChar + newText.length;
          } else{
            inpText.appendText('\n'); // if data line has only one entry
            curLineChar = newText.length;
          }
          inpText.appendText(newText); // data line should not exceed 256 characters
        }
      }
    }
    inpText.appendText('\n****************************************************************************************************************');
  }
}
