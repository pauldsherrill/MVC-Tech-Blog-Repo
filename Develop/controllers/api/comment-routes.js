const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
  // find all comments
  // includes associated post 
  try {
    const commentData = await Comment.findAll({
      include: [
        { model: Post }
      ],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one comment by id
  // includes associated post
  try {
    const commentData = await Comment.findbyPk(req.params.id, {
        include: [{ model: Post }],
      });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with that id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new comment
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;