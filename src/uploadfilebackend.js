     const mongoose = require('mongoose');
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const http = require('http');
    const bodyParser = require('body-parser');
    mongoose.connect('mongodb://localhost/wordupload')
    .then(() => console.log('da file is here'))
    .catch(error => console.error('shit fucked'))
    
    
    app.use(cors());
    
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    
    app.use(bodyParser.json({ limit: '5000000mb' }))
    app.use(bodyParser.urlencoded({
      limit: '5000000mb',
      extended: false,
    }));
    app.use(express.json());
    
    

    var fileSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      downloadLink: {
        type: String,
        required: true
      }
      });
    
    var File = mongoose.model('File', fileSchema);
        
    
        app.post('/upload', async (req, res) =>{
        console.log(req.body);
        let file = new File({
          name: req.body.name,
          downloadLink: req.body.downloadLink
        });
    
        const result = await file.save();
        res.send(result);
        });
    
        
        
        
        
        
        const port = process.env.PORT || 4000;
    
        app.listen(port, () => console.log("Backend server live on " + port));
    
        
    
        