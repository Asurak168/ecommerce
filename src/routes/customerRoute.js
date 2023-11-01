const express = require("express");
const {
  getAll,
  getOne,
  updateOne,
  deleteOne,
  create,
} = require("../controller/customerCtrl");
const router = express.Router();

router.get("/customer", getAll);
router.get("/customer/:id", getOne);
router.post("/customer", create);
router.put("/customer", updateOne);
router.delete("/customer/:id", deleteOne);

module.exports = router;
