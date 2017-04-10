var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTML (html) {
  var strArray = html.split("");
  strArray.reverse();

  var strReverse = strArray.join("");

  console.log(strReverse);
}

getHTML(requestOptions, printHTML);