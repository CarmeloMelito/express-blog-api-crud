const posts = require('../data/posts.js');
// Index:
const index = (req, res) => {
    res.json(posts);
};

// Show
const show = (req, res) => {
    const post = posts.find(post => post.id === parseInt(req.params.id));  
    if (!post) {
        return res.status(404).json({ error: 'Post non trovato' });
    }  
    res.json(post);
};

// Store
const store = (req, res) => {
    res.send('Post creato ');
};

// Update
const update = (req, res) => {
    res.send(`Post ${req.params.id} aggiornato`);
};

// Destroy
const destroy = (req, res) => {
    const index = posts.findIndex(post => post.id === parseInt(req.params.id));  
    if (index === -1) {
        return res.status(404).json({ error: 'Post non trovato' });
    }   
    posts.splice(index, 1);   
    console.log('Lista post aggiornata:', posts);
    
    res.status(204).send();
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};