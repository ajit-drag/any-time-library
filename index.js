var express = require('express');
var server = express();

server.use('/', express.static('public'));

server.listen(process.env.port || process.env.PORT || 4200, function() {
    console.log('Server is listening....');
});