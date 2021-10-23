const express= require('express');
const cors = require('cors')
const app = express();

app.use(cors());

// const port = process.env.PORT || 3000;
const port = 5000;

app.get('/', (req, res) => {
    res.send('Yeah!!Hello I am learning node and express too with nodemon.');
});

const users = [
    {id:0, name:'Shabana Nani', email:'shabana@gmail.com', phone: '01754774342'},
    {id:1, name:'Shabnoor', email:'Shabnoor@gmail.com', phone: '01754774342'},
    {id:2, name:'Mousumi', email:'Mousumi@gmail.com', phone: '01754774342'},
    {id:3, name:'Bobita nani', email:'Bobitanani@gmail.com', phone: '01754774342'},
    {id:4, name:'Suchonda', email:'Suchonda@gmail.com', phone: '01754774342'},
    {id:5, name:'Susmita', email:'Susmita@gmail.com', phone: '01754774342'}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } 
    else{
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});

// dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['banana', 'mangoes', 'apple', 'oranges']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('faltu tok markaaa!!');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});