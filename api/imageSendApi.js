const { clipboard, nativeImage } = require("electron");

function imageCopyToClipboard(path) {
  clipboard.writeImage(nativeImage.createFromPath(path));
}

module.exports = imageCopyToClipboard