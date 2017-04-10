const https = require('https');


function getAndPrintHTML (options) {
  let space = '';
  https.get(options, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      space += data[i];
    });
    response.on('end', () => {
      console.log('Response Stream Complete.', space);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
