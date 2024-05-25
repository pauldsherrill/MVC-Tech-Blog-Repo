const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
  // find all user
  // includes associated post and comments
  try {
    const userData = await User.findAll({
      include: [{ model: Post }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one user by id
  // includes associated posts and comments
  try {
    const userData = await User.findbyPk({
        include: [{ model: Post }],
      });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new user
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});