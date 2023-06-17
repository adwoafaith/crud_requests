const express = require('express')
const app = express();
const studentRoutes = require ('./src/students/routes');
const port =3000;

//home page
//middle ware
app.use(express.json());

app.get('/',(req, res)=>{
  res.send('hello world');
})

app.use('/api/vi/students',studentRoutes)

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

//"start": "node server.js",
  //"devStart":"node run ",