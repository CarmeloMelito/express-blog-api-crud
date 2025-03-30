const posts = require('../post/posts.js');

const index = (req, res) => {
    res.send('Lista di tutti i post');
};

const show = (req, res) => {
    res.send(`Dettaglio  post ${req.params.id}`);
};

const store = (req, res) => {
    res.send('Post creato ');
};

const update = (req, res) => {
    res.send(`Post ${req.params.id} aggiornato `);
};

const destroy = (req, res) => {
    res.send(`Post ${req.params.id} eliminato `);
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};