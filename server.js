// ! simple web server with node js
// var http = require('http');
// var server = http.createServer(function (req, res) {
//     res.end("Hi, selamat datang di nodejs");
// });
// server.listen(8000);
// console.log("server running on http://localhost:8000");


// ! contoh lebih advance
// library http untuk fungsi webserver
var http = require('http');
// untuk mengambil query gunakan library url
var url = require('url');

http.createServer(function (request, response) {
    // // untuk JSON
    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // // untuk PDF
    // response.writeHead(200, { 'Content-Type': 'application/pdf' });
    // // untuk XML
    // response.writeHead(200, { 'Content-Type': 'application/xml' });
    response.writeHead(200, { 'Content-Type': 'text/html' });

    // test Hello World
    // response.write('Hello <b>World</b>!');

    //mengambil url untuk routing
    // response.write('URL: ' + request.url); //http://localhost:8000/about

    switch (request.url) {
        case '/':
            response.write("Ini adalah halaman root");
            break;
        case '/about':
            response.write("Ini adalah halaman about");
            break;
        case '/profile':
            response.write("Ini adalah halaman profile");
            break;
        case '/produk':
            response.write("ini adalah halaman produk");
            break;
        default:
            response.write("404: Halaman tidak ditemukan");
    }

    response.end();
}).listen(8000);

console.log("server running on http://localhost:8000");
