const User = require("../models/user");
exports.createUser = async (req, res, next) => {
  try {
    const { firstname, middlename, surname, usertype, idnumber } = req.body;
    const user = new User({
      firstname: firstname,
      middlename: middlename,
      surname: surname,
      usertype: usertype,
      idnumber: idnumber,
    });
    const userExists = await User.findOne({ idnumber: idnumber });
    if (userExists) {
      return res.status(409).json({ message: "This user already exist." });
    }
    const createdUser = await user.save();
    res.status(201).json({
      message: `The ${user.usertype} added successfully`,
      createdUser: createdUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await User.find({ usertype: "student" });
    res
      .status(200)
      .json({ totalStudents: students.length, students: students });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await User.find({ usertype: "teacher" });
    res
      .status(200)
      .json({ totalTeachers: teachers.length, teachers: teachers });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getOneUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ idnumber: userId });

    if (!user) {
      return res.status(404).json({ message: "This user does not exist." });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const results = await User.deleteOne({ idnumber: userId });
    if (!results) {
      return res.status().json({ message: "User not deleted." });
    }
    return res.status(200).json({ message: "User deleted successful." });
  } catch (error) {
    console.log(error);
  }
};
