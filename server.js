const express = require('express');

const server = express();

const user = [
    {
        id:'asdf',
        name:'hello',
        password:'world'
    },
    {
        id:'fdsa',
        name:'bye',
        password:'good'
    }
]

server.get('/api', (req, res)=>{
    res.json(user);
})

server.listen(8000, () => {
    console.log("Server is listening!");
});