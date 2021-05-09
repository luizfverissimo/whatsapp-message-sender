const { dialog } = require('electron');
const xlsx = require('xlsx');

function openDialogReadFile() {
  const filePaths = dialog.showOpenDialogSync({
    filters: [{ name: 'Tabelas', extensions: ['xlsx', 'xls'] }],
    properties: ['openFile']
  });

  if (!filePaths) {
    return [];
  }

  const list = xlsx.readFile(filePaths[0], { cellDates: true });
  const workSheet = list.Sheets[list.SheetNames[0]];
  const workSheetJson = xlsx.utils.sheet_to_json(workSheet);

  return workSheetJson;
}



module.exports = openDialogReadFile
