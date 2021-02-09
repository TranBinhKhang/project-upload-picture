/*const mongoose = require('mongoose');
const express = require('express');
const app = express();
const http = require('http')
mongoose.connect('mongodb://localhost/picture')
.then(() => console.log('da file is here'))
.catch(error => console.error('shit fucked', err))

var imageSchema = new mongoose.Schema({
    imageName: {
        type: String,
        default: "img",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});

var Image = mongoose.model('Image', imageSchema);

async function createserver(){
    const image = new Image({
        imageName: 'abcddfrafdasmmas1',
        imageData: 'asfafsasfasfafsafa'

    });
    
    const result = await image.save();
    console.log(result);
    }

;

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('WELCOME TO DA RICE FIELD MOTHERCUKER');
        res.end();
    }
    
    });
    
    server.listen(3000);
    
    console.log('listening on port 3000.')*/


const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/picture')
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



var imageSchema = new mongoose.Schema({
    imageName: {
        type: String,
        default: "img",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});

var Image = mongoose.model('Image', imageSchema);

async function addImage(name, data){
    const image = new Image({
        imageName: name,
        imageData: data
    });
    
    const result = await image.save();
    console.log(result);
    };   
    
    app.get('/', (req, res) => {
        res.send('successfully loaded')
       });

    app.post('/api/images', async (req, res) =>{
       // res.addImage(req.body.imageName, req.body.imageData)
    let image = new Image({
        imageName: req.body.imageName,
        imageData: req.body.imageData
    });

    const result = await image.save();
    res.send(result);
    
    });

    
    
    
    
    
    const port = process.env.PORT || 4000;

    app.listen(port, () => console.log("Backend server live on " + port));

    

    