const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    // Fetch all posts with associated user information
    const postData = await Post.findAll({
      include: [
        { model: User }, // Include the associated user
        { model: Comment, include: [{ model: User }] }, // Include the associated comments along with their users
      ],
    });

    const post = postData.map((post) => post.get({ plain: true }));

    // Render the Handlebars template with the posts data
    if (req.session.logged_in) {
      res.render("homepage", {
        post,
        logged_in: req.session.logged_in,
        isHome: true,
      });
    } else {
      res.render("homepage", {
        post,
        isHome: true,
      });
    }
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    isLogin: true,
  });
});

router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("register");
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userId = req.session.user_id;
    const postData = await Post.findAll({
      where: { user_id: userId },
      include: [
        { model: User },
        { model: Comment, include: [{ model: User }] }, // Include the associated comments along with their users
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
      isDash: true,
    });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/post", (req, res) => {
  if (req.session.logged_in) {
    res.render("post", {
      logged_in: req.session.logged_in,
      isPost: true,
    });
  } else {
    res.redirect("/");
    return;
  }
});

router.get("/edit/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData ? postData.get({ plain: true }) : null;

    res.render("edit", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error("Error fetching post:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
