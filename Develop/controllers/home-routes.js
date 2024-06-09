const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// GET all galleries for homepage
router.get("/", async (req, res) => {
  try {
    // const userData = await User.findAll();
    const postData = await Post.findAll();

    // const commentData = await Comment.findOne({
    //   where: {
    //     user_id: req.session.user_id,
    //   },
    // });

    // const userData = await User.findOne({
    //   where: {
    //     user_id: req.session.user_id,
    //   },
    // });

    // const user = userData ? userData.get({ plain: true }) : null;
    const post = postData.map((post) => post.get({ plain: true }));
    // const comment = commentData ? commentData.get({ plain: true }) : null;

    console.log(post);
    console.log(req.session.logged_in);

    res.render("homepage", {
      logged_in: req.session.logged_in,
      post,
      // comment,
      // user,
      isHome: true,
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

module.exports = router;
