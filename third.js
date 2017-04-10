const https = require('https');


function getAndPrintHTML (options) {
    let optionPath = {
        host: options.host,
        path: options.path
    };
    let space = '';
    https.get(requestOptions, (response) => {
    response.setEncoding('utf8')
    response.on('data', (data) => {
      for (i in data) {
          space += data[i]
        }
    })
    response.on('end', () => {
        console.log('Response Stream Complete.', space);
        })
    })
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)
