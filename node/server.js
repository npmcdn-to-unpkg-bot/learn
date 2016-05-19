var http = require('http');
var url = require('url');

var start = function (route, handle) {

    http.createServer(function (request, response) {
        
        var pathname = url.parse(request.url).pathname;

        route(handle, pathname, response, request);

    }).listen(8989);
};

exports.start = start;
