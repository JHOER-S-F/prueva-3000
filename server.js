const express = require('express')
const app = express();


const port = process.env.PORT || 3000;



app.get('/', (req, res)=>{
    res.send('JHOER SERRANO FORERO');
});


app.listen(port, () => {
    console.log('la aplicación esta corriendo en http://localhost:${port}');
});