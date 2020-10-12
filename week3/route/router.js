const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


// /**
//  * @method - GET
//  * @description - Get LoggedIn User
//  * @param - /user/me
//  */


router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });