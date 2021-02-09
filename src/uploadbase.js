/*const mongoose = require('mongoose');
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
        imageName: 'abc',
        imageData: 'asfafsasfasfafsafa'

    });
    
    const result = await image.save();
    console.log(result);
    }

createserver();

module.exports = Image;*/

const mongoose = require('mongoose');
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
        imageName: 'abc',
        imageData: 'asfafsasfasfafsafa'

    });
    
    const result = await image.save();
    console.log(result);
    }

createserver();

module.exports = Image;