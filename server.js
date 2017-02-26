var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });

// use our static pages which are in public folder 
// our index file is in there
app.use('/',express.static(__dirname + '/public'));
app.post('/upload', upload.single('userFile'), function (request, res, next) {
  // req.body contains the text fields
  var fileDetails = {
        name: request.file.originalname,
        size: request.file.size,
        encoding: request.file.encoding,
        mimetype: request.file.mimetype,
      };
      
  res.json(fileDetails).end();
});




// Starts a UNIX socket and listens for connections on the given path.
app.listen(process.env.PORT, process.env.IP,function () {
  console.log('Go to Window > Share > open Application!');
});