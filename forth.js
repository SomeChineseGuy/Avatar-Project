const https = require('https');

var requestOptions = {
  hostname: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
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
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
