const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const authenticateToken = (req, res, next) => {
    
    const token = req.headers["authorization"]?.split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) return sendStatus(403);
            req.user = user;
            next();
        })
    } else {
        res.sendStatus(401);
    }
    

};

router.get("/", authenticateToken);

module.exports = router;
