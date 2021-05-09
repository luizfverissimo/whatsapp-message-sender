const { dialog } = require('electron');

function openDialogReadImage() {
  const imagePaths = dialog.showOpenDialogSync({
    filters: [{ name: 'Imagens', extensions: ['png', 'jpg'] }],
    properties: ['openFile']
  });

  if (!imagePaths) {
    return [];
  }

  return imagePaths[0];
}

module.exports = openDialogReadImage