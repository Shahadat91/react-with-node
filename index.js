const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('Hello from my World');
});

const users =[
    {id:1,name: 'sabana', email:'sabana@gamil.com', cell: '017000000'},
    {id:2,name: 'sabnur', email:'sabana@gamil.com', cell: '017000000'},
    {id:3,name: 'sohana', email:'sabana@gamil.com', cell: '017000000'},
    {id:4,name: 'sabila', email:'sabana@gamil.com', cell: '017000000'},
    {id:5,name: 'shuchorita', email:'sabana@gamil.com', cell: '017000000'},
    {id:6,name: 'shuchonda', email:'sabana@gamil.com', cell: '017000000'},
]

app.get('/users', (req, res)=>{
    //console.log('query', req.query);
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    

});

app.get('/user/:id',(req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/users',(req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length +1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res)=>{
    res.send(['mango','apple','oranges']);
});

app.get('/fruits/mango/fazle', (req,res)=>{
    res.send('sour sour fazle mango');
})

app.listen(port, ()=>{
    console.log('Listening to port 5000')
})