// Include http module.
var http = require("http");
var Miso = require("miso.dataset");
var port = process.env.PORT;
var data = [
  { color : "red",   r : 255, g : 0,   b : 0   },
  { color : "blue",  r : 0,   g : 0,   b : 255 },
  { color : "green", r : 0,   g : 255, b : 0   }
];
http.createServer(function (request, response) {
    request.on("end", function () {
        var ds = new Miso.Dataset({
            url : './crudeoil.csv',
            delimiter : ','
        });

        ds.fetch({
            success : function() {
                //console.log("Available Columns:" + this.columnNames());
            //console.log("There are " + this.length + " rows");
            }
        });
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end("Available Columns:");
   });
}).listen(port);



