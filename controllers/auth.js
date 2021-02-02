const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.mySecret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

const signup = async (req, res) => {
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  const newUser = await User.create(req.body);
  if (newUser) {
    res.status(200).json(newUser);
  } else {
    res.status(400).json({ error: "failed to create an user" });
  }
};

const signin = async (req, res) => {
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.status(400).json({ error: "user not found in database" });
  } else if (!user.validPassword(password)) {
    res.status(400).json({ error: "wrong password" });
  } else {
    const token = createToken(user.id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  }
};

const signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ msg: "signout successfull " });
};

const isSignin = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, process.env.mySecret, async function (err, decodedToken) {
      if (err) {
        return res.status(400).json({ error: "unauthorized token" });
      }

      req.auth = decodedToken;
      next();
    });
  } else {
    res.status(400).json({ error: "token not found" });
  }
};

const isAuthenticated = (req, res, next) => {
  const checker = req.profile && req.auth && req.profile.id === req.auth.id;
  if (!checker) {
    return res.status(400).json({ error: "Access denied" });
  }

  next();
};

module.exports = {
    signup,
    signin,
    signout,
    isSignin,
    isAuthenticated
}
