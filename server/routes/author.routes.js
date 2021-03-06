const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
    app.get("/api/all-authors", AuthorController.getAuthors);
    app.post("/api/author", AuthorController.createAuthor);
    app.get("/api/author/:id", AuthorController.findAuthor);
    app.post("/api/author/:id", AuthorController.updateAuthor);
    app.get("/api/delete/:id", AuthorController.deleteAuthor)
}