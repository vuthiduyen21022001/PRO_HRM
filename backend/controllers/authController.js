import bcrypt from "bcrypt";
import {UserModel} from "../models/userModel.js";
import jwt from "jsonwebtoken";

let refreshTokens = [];

//Register
export const userRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newUser = await new UserModel({
      username: req.body.username,
      password: hashed,
      email: req.body.email,
      admin: req.body.admin,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      admin: user.admin,
    },
    process.env.JWT_ACCESS_KEY,
    {expiresIn: "1day"}
  );
};
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      admin: user.admin,
    },
    process.env.JWT_REFRESH_KEY,
    {expiresIn: "360day"}
  );
};

export const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({username: req.body.username});
    if (!user) {
      res.status(404).json("Incorrect username");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(404).json("Incorrect password");
    }
    if (user && validPassword) {
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      const {password, ...others} = user._doc;
      res.status(200).json({...others, accessToken});
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
export const logOut = async (req, res) => {
  //Clear cookies when user logs out
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.clearCookie("refreshToken");
  res.status(200).json("Logged out successfully!");
};

export const requestRefreshToken = async (req, res) => {
  //Take refresh token from user
  const refreshToken = req.cookies.refreshToken;
  //Send error if token is not valid
  if (!refreshToken) return res.status(401).json("You're not authenticated");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid");
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
    if (err) {
      console.log(err);
    }
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    //create new access token, refresh token and send to user
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    refreshTokens.push(newRefreshToken);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
};

export const getUser = async (req, res) => {
  try {
    const users = await UserModel.find()
      .sort({createdAt: -1})
      .populate("employee_id");
    console.log("user", users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteUser = async (req, res) => {
  try {
    // find: lay all
    const department = await UserModel.findByIdAndDelete(req.params.id);
    // console.log("employee", employee);
    res.status(200).json({status: "User Deleted"});
  } catch (error) {
    res.status(500).json({status: "error"});
  }
};
