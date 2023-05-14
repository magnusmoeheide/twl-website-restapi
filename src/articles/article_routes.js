const { Router } = require('express'); // Importing the Router class from the express module
const controller = require('./article_controller'); // Importing the article controller

// Creating a new router
const router = Router();

// Creating the routes and assigning them to the controller functions
router.get('/', controller.getArticles);
router.get('/newest', controller.getNewestArticle);
router.get('/byid/:id', controller.getArticlesById);
router.put('/:id', controller.updateArticles);
router.get('/:id/sections', controller.getArticleSectionsByArticle);
//router.get('/:id/withInstructor', controller.getArticleWithInstructor);
router.delete('/:id', controller.deleteArticles);
router.post('/', controller.createArticles);
router.get('/firstsection', controller.getArticlesWithFirstSection)
router.get('/authors', controller.getArticlesWithAuthors)
router.post('/createauthor', controller.createAuthorForArticle)
//router.delete('/deleteauthor', controller.deleteAuthorForArticle);

// Exporting the router object and making them available for other modules to use
module.exports = router;