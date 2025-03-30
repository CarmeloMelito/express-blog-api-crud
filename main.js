const express = require('express');
const app = express();
const port = 3000;

// Importo router
const postsRouter = require('./routers/app.js');

// Middleware per processare JSON
app.use(express.json());

app.use(express.static("./public"));
// Aggiungo le rotte
app.use('/posts', postsRouter);

// Avvio il server
app.listen(port, () => {
    console.log(`Server port: ${port}.`);
});