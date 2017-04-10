const https = require('https');

module.exports = function getHTML (options, callback) {
  let space = '';
  https.get(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      space += data;
    });
    response.on('end', () => {
      callback(space);
    });
  });
};
