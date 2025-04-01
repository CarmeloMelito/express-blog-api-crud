const express = require('express');
const app = express();
const port = 3000;

// Importo router
const postsRouter = require('./routers/app.js');
app.use(express.json());

app.use(express.static("./public"));

// Aggiungo le rotte
app.use('/posts', postsRouter);

//MIDDLEWARE
const error = require('./errors/errorHandlers.js');
app.use(error.notFound);
app.use(error.errorHandler);

// Avvio il server
app.listen(port, () => {
    console.log(`Server port: ${port}`);
});