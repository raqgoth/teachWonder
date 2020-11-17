const {Router} = require('express');
const router   = Router();

const { getComments, getCommentById, createComment, deleteComment } = require ('../controllers/CommentController');

router.route('/')
.get(getComments)
.post(createComment);

router.route('/:id')
.get(getCommentById)
.delete(deleteComment);

module.exports = router;