const { Notification } = require('electron');

function notificationSender(message) {
  new Notification({
    title: 'notification',
    body: message
  }).show();
}

module.exports = notificationSender;
