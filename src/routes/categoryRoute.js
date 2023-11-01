const express = require("express");
const {
  getAll,
  getOne,
  updateOne,
  deleteOne,
  create,
} = require("../controller/categoryCtrl");
const router = express.Router();

router.get("/category", getAll);
router.get("/category/:id", getOne);
router.post("/category", create);
router.put("/category", updateOne);
router.delete("/category/:id", deleteOne);

module.exports = router;
