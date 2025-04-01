//ERRORE 404
function notFound(req, res, next) {
    res.status(404).json({ error: 'NoN ho Trovato Nulla' });
}

//ERRORE 500
function errorHandler(err, req, res, next) {
    res.status(500).json({ error: 'Errore Del Server' });
}

module.exports = { notFound, errorHandler };
