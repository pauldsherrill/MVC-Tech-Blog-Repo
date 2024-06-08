const router = require("express").Router();
const { User, Post, Comment } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all galleries for homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll();
    const postData = await Post.findAll();
    const commentData = await Comment.findAll({
      where: {
        post_id: req.body.post_id,
      },
    });

    const user = userData ? userData.get({ plain: true }) : null;
    const post = postData ? postData.get({ plain: true }) : null;
    const comment = commentData ? commentData.get({ plain: true }) : null;

    res.render("homepage", {
      logged_in: req.session.logged_in,
      post,
      comment,
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("register");
});

module.exports = router;
