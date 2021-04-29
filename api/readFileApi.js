const { dialog } = require('electron');
const xlsx = require('xlsx');

function openDialogReadFile() {
  const filePaths = dialog.showOpenDialogSync({
    filters: [{ name: 'Tabelas', extensions: ['xlsx'] }],
    properties: ['openFile']
  });

  if (!filePaths) {
    console.log('cancelou!');
    return [];
  }

  const list = xlsx.readFile(filePaths[0], { cellDates: true });
  const workSheet = list.Sheets[list.SheetNames[0]];
  const workSheetJson = xlsx.utils.sheet_to_json(workSheet);

  return workSheetJson;
}

module.exports = openDialogReadFile;
