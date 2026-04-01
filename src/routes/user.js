const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

router.get("/profile", auth, (req, res) => {
  res.json({
    msg: "Rota protegida 🔐",
    userId: req.userId,
  });
});

module.exports = router;
