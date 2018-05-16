const   express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        path = require('path');

app.use(express.static(path.join( __dirname , '/angular/dist/angular' )));
app.use(bodyParser.json());
//Mongoose config
require("./server/config/mongoose.js");

require('./server/config/routes.js')(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})