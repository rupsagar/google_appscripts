function inpAutomation_v0(INP_DATA,INP_FILE_NAME) {
  const MAX_LINE_CHAR = 200; // max 256 allowed....lower value to be on safe side
  var inpFile = DocumentApp.create(INP_FILE_NAME);

  var numFast = INP_DATA.length-1;
  var numField = INP_DATA[1].length;

  var inpText = inpFile.getBody().editAsText();
  var newText;
  var curLineChar = 0;
  var commaSpace = ', ';
  var commaEnter = ',\n';
  for (var fastID = 1; fastID <= numFast; fastID++) {
    for (var fieldID = 0; fieldID < numField; fieldID++) {
      if (INP_DATA[0][fieldID][0] == '*') { // logic for keyword
        inpText.appendText('\n***\n');
        newText = INP_DATA[0][fieldID];
        curLineChar = newText.length;
        if (curLineChar < MAX_LINE_CHAR) {
          inpText.appendText(newText);
        }
      }
      
      else { // logic for parameters and data lines
        if (INP_DATA[0][fieldID].match(/DATA.*/) == null) { // logic for parameters only, not for data lines
          if (INP_DATA[fastID][fieldID] != '') { // if parameter value is not omitted as it may be mandatory or provided even if it is optional
            newText = INP_DATA[0][fieldID] + '=' + INP_DATA[fastID][fieldID]
            curLineChar = curLineChar + newText.length;
            if (curLineChar < MAX_LINE_CHAR) {
              inpText.appendText(commaSpace + newText);
              curLineChar = curLineChar + commaSpace.length;
            }
            
            else {
              inpText.appendText(commaEnter + newText);
              curLineChar = newText.length;
            }
          }
          
          else { // if parameter value is omitted if it is optional
            continue;
          }
        }
        
        else { // logic for data lines
          if (INP_DATA[fastID][fieldID] == 'NA') {
            continue;
          }
          inpText.appendText('\n');
          newText = INP_DATA[fastID][fieldID]
          curLineChar = newText.length;
          inpText.appendText(newText); // data line should not exceed 256 characters
        }
      }
    }
    inpText.appendText('\n****************************************************************************************************************');
  }
}
