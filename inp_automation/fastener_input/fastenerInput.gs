function fastenerInput() {

  const FAST_FILE_URL = 'https://docs.google.com/spreadsheets/d/1BvSRB-zszWeJxswyXd4Eob_e5ciIJPCEVpLeLDWclmQ/edit?usp=sharing'
  /*
  const SHEET_NAME_1 = 'FAST_DEF_DOOR';
  const INP_FILE_NAME_1 = 'FAST_DEF_DOOR';
  const FAST_DATA_1 = transposeCellValues(SpreadsheetApp.openByUrl(FAST_FILE_URL).getSheetByName(SHEET_NAME_1).getDataRange().getValues());
  inpAutomation(FAST_DATA_1,INP_FILE_NAME_1);
  */
  
  const SHEET_NAME_2 = 'FAST_BEH_FUSE';
  const INP_FILE_NAME_2 = 'FAST_BEH_FUSE';
  const FAST_DATA_2 = transposeCellValues(SpreadsheetApp.openByUrl(FAST_FILE_URL).getSheetByName(SHEET_NAME_2).getDataRange().getValues());
  inpAutomation(FAST_DATA_2,INP_FILE_NAME_2);
  
  /*
  const SHEET_NAME_3 = 'CONTACT_DOOR';
  const INP_FILE_NAME_3 = 'CONTACT_DOOR';
  const FAST_DATA_3 = transposeCellValues(SpreadsheetApp.openByUrl(FAST_FILE_URL).getSheetByName(SHEET_NAME_3).getDataRange().getValues());
  inpAutomation(FAST_DATA_3,INP_FILE_NAME_3);
  */
  /*
  const SHEET_NAME_4 = 'TIE';
  const INP_FILE_NAME_4 = 'TIE';
  const FAST_DATA_4 = transposeCellValues(SpreadsheetApp.openByUrl(FAST_FILE_URL).getSheetByName(SHEET_NAME_4).getDataRange().getValues());
  inpAutomation(FAST_DATA_4,INP_FILE_NAME_4);
  */
}
