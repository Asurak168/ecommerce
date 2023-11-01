const express = require("express");
const {
  getAll,
  getOne,
  updateOne,
  deleteOne,
  create,
} = require("../controller/employeeCtrl");
const router = express.Router();

router.get("/employee", getAll);
router.get("/employee/:id", getOne);
router.post("/employee", create);
router.put("/employee", updateOne);
router.delete("/employee/:id", deleteOne);

module.exports = router;
