const { dialog } = require('electron');
const fs = require('fs');
const path = require('path')

async function openDialogReadFile() {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    filters: [{ name: 'Tabelas', extensions: ['xlsx'] }],
    properties: ['openFile'],
  });

  if (canceled) {
    return;
  }

  const file = await fs.readFile(filePaths[0])

  console.log(file)
}

module.exports = openDialogReadFile
