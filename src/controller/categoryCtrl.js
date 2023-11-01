const { conn } = require("../config/db");

const create = async (req, res) => {
  const { Name, Brand, Description, Parent, Status } = req.body;
  try {
    const item = await conn.query(
      "INSERT INTO category (Name, Brand, Description, Parent) VALUES (?,?,?,?)",
      [Name, Brand, Description, Parent, Status]
    );

    res.json({ msg: "Create Successfully!!!", data: item });
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await conn.query("SELECT * FROM category");
    res.json({ list: data });
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await conn.query("SELECT * FROM category WHERE id = ?", [id]);
    res.json({ list: item });
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const updateOne = async (req, res) => {
  const { Name, Brand, Description, Parent, Status } = req.body;
  try {
    const item = await conn.query(
      "UPDATE category SET Name = ?, Brand=?, Description = ?, Parent = ?, Status = ?",
      [Name, Brand, Description, Parent, Status]
    );
    res.json({ msg: "Update Successfully!!!", data: item });
  } catch (error) {
    res.json({ ERROR: error });
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await conn.query("DELETE FROM category WHERE id = ?", [id]);
    res.json(
      data.affectedRows !== 0
        ? { msg: "Delete Success", data: data }
        : { msg: "Something went wrong!!!" }
    );
  } catch (error) {}
};

module.exports = { create, getAll, getOne, updateOne, deleteOne };
