var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  fs.readdir('./uploads', function(err, files){
  res.render('index', {files: files});
});
});

router.post('/createfile', function(req, res){
 var create = `./uploads/${req.body.filename}`;
  fs.writeFile(create,'' ,function(err){
    res.redirect('/');
  });
});
router.get('/fileopen/:file', function(req, res){
  fs.readdir('./uploads', function(err, file){
    console.log(err);
    var createdata = `./uploads/${req.body.file}`
    fs.readFile(createdata,'utf8', function(err, data){
      res.send('file_form');
    });
    
  });

});

module.exports = router;
