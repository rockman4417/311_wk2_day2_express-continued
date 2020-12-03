const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comments.js')

router.get("/comments", commentController.list)

router.get('/comments/:id', commentController.show)

router.post('/comments', commentController.create)


module.exports = router