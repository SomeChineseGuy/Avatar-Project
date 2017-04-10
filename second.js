const https = require('https')


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  space = ''
    https.get(requestOptions, (response) => {
        response.setEncoding('utf8')
        response.on('data', (data) => {
        for (i in data) {
            space += data[i]
        }
     })

     response.on('end', () => {
       console.log('Response Stream Complete.', space)
    })
  })
}

getAndPrintHTML()