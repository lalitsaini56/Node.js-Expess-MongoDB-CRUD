module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const chat = require('../controllers/chat.controller.js');
    const posts = require('../controllers/posts.controller.js');
    const user = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

      // Retrieve all Notes
    app.get('/user/findall', user.findAll);

      // Retrieve all Notes
    app.get('/posts/getPosts', posts.getPosts);

      // Retrieve all Notes
    app.get('/chat/findall', chat.findAll);

    // Create a new User
    app.post('/user/signup', user.signup);
}