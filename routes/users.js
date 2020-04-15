const router = require("express").Router();

module.exports = (db) => {
  router.post("/login", (req, res) => {
    db.query(`SELECT * FROM users`).then((data) => {
      res.json({ success: true, data });
    });
  });
  return router;
};
