const { conn } = require("../config/db");

const create = async (req, res) => {
  const { Email, Firstname, Lastname, Gender, Dob, Tel, Address } = req.body;
  try {
    const findUser = await conn.query("SELECT * FROM customer WHERE Tel = ?", [
      Tel,
    ]);
    if (findUser.length)
      return res.json({ msg: "This Telephone is already used!!" });
    const sql =
      "INSERT INTO customer (Firstname, Lastname, Gender, Dob, Tel, Address, Email) VALUES (?,?,?,?,?,?,?)";
    try {
      const newUser = await conn.query(sql, [
        Firstname,
        Lastname,
        Gender,
        Dob,
        Tel,
        Address,
        Email,
      ]);
      res.json({ msg: "Create Successfully!!!", data: newUser });
    } catch (error) {
      res.json({ ERROR: error });
    }
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await conn.query("SELECT * FROM customer");
    res.json({ CustomerList: data });
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await conn.query("SELECT * FROM customer WHERE id = ?", [id]);
    res.json({ List: data });
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const updateOne = async (req, res) => {
  const { Email, Firstname, Lastname, Gender, Dob, Tel, Address, id } =
    req.body;
  try {
    const findUser = await conn.query("SELECT * FROM customer WHERE Tel = ?", [
      Tel,
    ]);
    if (findUser.length)
      return res.json({ msg: "This Telephone is already used!!" });
    const sql =
      "UPDATE customer SET Email = ? Firstname = ?, Lastname = ?, Gender = ?, Dob = ?, Tel = ?, Address = ?) WHERE id = ?";
    try {
      const newUser = await conn.query(sql, [
        Email,
        Firstname,
        Lastname,
        Gender,
        Dob,
        Tel,
        Address,
        id,
      ]);
      res.json({ msg: "Update Successfully!!!", data: newUser });
    } catch (error) {
      res.json({ ERROR: error });
    }
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await conn.query("DELETE FROM customer WHERE id = ?", [id]);
    res.json(
      data.affectedRows !== 0
        ? { msg: "Delete Successfull!!!", data: data }
        : { msg: "Something went wrong!!!" }
    );
  } catch (error) {
    res.json({ ERROR: error });
  }
};

module.exports = { getAll, getOne, updateOne, deleteOne, create };
