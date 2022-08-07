var fs = require('fs');

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, marketplaceitems) {
    if (err) {
      onError(err);
      return;
    }
    marketplaceitems.forEach(function(marketplaceitems) {
      fs.readFile(dirname + marketplaceitems, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        } 
        onFileContent(marketplaceitems, content);
      });
    });
  });
}
var data = fs;
  
  var tr;
  for (var i = 0; i < data.length; i++) {
    tr = $('<tr/>');
    tr.append("<td>" + data[i][0] + "</td>");
    tr.append("<td>" + data[i][1] + "</td>");
    $('table').append(tr);
  }