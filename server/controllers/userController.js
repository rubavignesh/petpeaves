import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT, { expiresIn: '3d' })
}

// login a user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a tokens
    const token = createToken(user._id);
    const username = user.username;
    const isAdmin = user.isAdmin;

    res.status(200).json({ email, token, username, isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Signup a user
export const signupUser = async (req, res, next) => {
  req.body.isAdmin = false;
  const { email, password, username, isAdmin } = req.body;
  try {
    const user = await User.signup(email, password, username, isAdmin);
    // create a token
    const token = createToken(user._id)
    res.status(200).json({ email, token, username, isAdmin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export const DoctorList = async (req, res, next) => {
//   const { email } = req.query;
//   try {
//     if (email) {
//       const doctorList = await User.find({ email: email })
//       res.status(200).json(doctorList);
//     } else {
//       const doctorList = await User.find({ isDoctor: true })
//       res.status(200).json(doctorList);
//     }
//   }
//   catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }