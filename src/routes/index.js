const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html", { title: "firs web site" });
});

router.get("/contact", (req, res) => {
  res.render("contact.html", { title: "contact page" });
});


module.exports = router;
