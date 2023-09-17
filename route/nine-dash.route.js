const express = require("express")
const router = express.Router();

router.get("/image", (req, res) => {
    res.render("formVideo.ejs")
});

module.exports = router;