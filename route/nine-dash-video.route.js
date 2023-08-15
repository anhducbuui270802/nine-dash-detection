const express = require("express")
const router = express.Router();

router.get("/video", (req, res) => {
    res.render("formVideo.ejs")
});

module.exports = router;