const express = require('express');
const app = express();
const http = require('http')
app.use(express.json());


app.get('/', (req, res) => {
 res.send('successfully loaded')
});

app.get('/api/images', (req, res) => {

    res.send(images);
})

app.get('/api/images/:id', (req, res) => {
    const course = images.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status('404').send('you are on crack bitch');
    res.send(course);
});

const images = [
    {id: 1, name: 'gay'},
    {id: 2, name: 'notgay'},
    {id: 3, name: 'verygay'}
];

app.post('/api/images', (req, res) =>{
    const image = {
        name: req.body.name,
        detail: req.body.base64
    };
    
});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`running on the ${port}`)
);








//Old code. Left in case.
/*const server = http.createServer((req, res) => {
if (req.url === '/'){
    res.write('WELCOME TO DA RICE FIELD MOTHERCUKER');
    res.end();
}

});

server.listen(3000);

console.log('listening on port 3000.')*/