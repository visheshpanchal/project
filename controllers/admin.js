const express = require("express");
const s = require("../config");

const User = s.models.user;

exports.registerPage = async (req, res, next) => {
  const body = req.body;

  if (body) {
    try {
      const user = await User.create({ ...body, role: "ADMIN" });

      res.status(201).json({
        status: "success",
        user: {
          email: user.email,
        },
      });
    } catch (err) {
      res
        .status(400)
        .json({ status: "error", message: "Error from user side." });
    }
  } else {
    res.status(400).json({ status: "error", message: "Body Not included." });
  }
};

exports.login = async (req, res, next) => {
  const body = req.body;

  if (body) {
    try {
      const user = await User.findOne({ where: { email: body.email } });
      console.log(user);
      if (user) {
        if (user.password === body.password) {
          if (user.role === "ADMIN") {
            res.status(200).json({
              status: "success",
              user: {
                email: user.email,
              },
              message: "User Login Done.",
            });
          } else {
            res.status(400).json({
              status: "error",

              message: "You are not allowed to login from here.",
            });
          }
        } else {
          res.status(400).json({
            status: "error",

            message: "Password Wrong.",
          });
        }
      } else {
        res.status(400).json({
          status: "error",

          message: "User not found.",
        });
      }
    } catch (err) {
      res
        .status(400)
        .json({ status: "error", message: "Error from user side." });
    }
  } else {
    res.status(400).json({ status: "error", message: "Body Not included." });
  }
};
