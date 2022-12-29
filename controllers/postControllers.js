const Post = require("../models/Post");

exports.getPostShow = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts: posts,
  });
};

exports.getPostDelete = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  await Post.findByIdAndRemove(req.params.id);
  res.redirect("/");
};

exports.getPostEdit = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit.ejs", {
    post: post,
  });
};

exports.getPostCreate = async (req, res) => {
  await Post.create({
    ...req.body,
  });
  res.redirect("/");
};

exports.getPostUpdate = async (req, res) => {
  let id = req.body.id;
  let yenititle = req.body.title;
  let yenidetail = req.body.detail;
  const post = await Post.findOne({ _id: id });
  (post.title = yenititle), (post.detail = yenidetail), post.save();
  res.redirect("/");
};

exports.getPostDetail = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post.ejs", {
      post: post,
    });
  }