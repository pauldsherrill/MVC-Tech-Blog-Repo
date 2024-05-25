const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// The `/api/post` endpoint

// get all posts
router.get('/', async (req, res) => {
  // find all posts
  // includes associated user and comments
  try {
    const postData = await Post.findAll({
      include: [
        { model: Comment },
    ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post
router.get('/:id', async (req, res) => {
  // find a single post by its `id`
  // includes associated user and comments
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User }, 
        { model: Comment }
    ],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new post
router.post('/', async (req, res) => {
    // create a new post
    try {
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// update existing post
router.put('/:id', async (req, res) => {
    // update a post by its `id` value
    try {
      const updatedPost = await Post.update(
        {
          title: req.body.title,
          text: req.body.text,
          date: req.body.date,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      res.status(200).json(updatedPost)
      } catch (err) {
        res.status(500).json(err);
      }
  });
  
// delete existing post
router.delete('/:id', async (req, res) => {
  // delete one post by its `id` value
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
