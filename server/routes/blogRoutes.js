const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

// App routes
router.get('/',blogController.homepage)
router.get('/blog/:id',blogController.exploreBlog)
router.get('/categories',blogController.exploreCategories)
router.get('/categories/:id',blogController.exploreCategoriesById)
router.post('/search', blogController.searchBlog);
router.get('/about', blogController.aboutBlog);
router.get('/contact', blogController.contactBlog);
router.get('/explore-latest',blogController.exploreLatest)
router.get('/explore-random',blogController.exploreRandom)
router.get('/submit-blog',blogController.submitBlog)
router.post('/submit-blog',blogController.submitBlogOnPost)

module.exports = router