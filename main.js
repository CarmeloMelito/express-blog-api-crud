const express = require('express');

const app = express();
const port = 3000;
//Server  Port
app.listen(port, () =>{
    console.log(`Server port: ${port}.`);
})