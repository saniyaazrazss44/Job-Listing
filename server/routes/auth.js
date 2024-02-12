const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user');
const bcrypt = require('bcrypt'); // to hash password
const jwt = require('jsonwebtoken'); // to generate token

router.use(bodyParser.json()); // 'bodyParser' as a middleware

router.post("/register", async (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;

        if (!name || !email || !mobile || !password) {
            return res.status(400).json({
                status: 400,
                message: "Bad request"
            })
        }

        const existingUser = await User.findOne({ email: email })
        const existingUserMobile = await User.findOne({ mobile: mobile })

        // for email
        if (existingUser) {
            return res.status(409).json({
                status: 409,
                message: 'Email id already exists'
            })
        }

        // for mobile
        if (existingUserMobile) {
            return res.status(409).json({
                status: 409,
                message: 'Mobile number already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        /* to save data in db */
        const userData = new User({
            name,
            email,
            mobile,
            password: hashedPassword,
        })

        const userResponse = await userData.save()
        /* to save data in db */

        const token = jwt.sign({ userId: userResponse._id }, process.env.SECRET_KEY)

        res.status(200).json({
            status: 200,
            message: 'User registered successfully',
            token: token
        })

    } catch (error) {
        console.log("Error", error)
    }


})

router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                message: "Bad request! Invalid credentials"
            })
        }

        const validUser = await User.findOne({ email })

        // for valid user
        if (!validUser) {
            return res.status(409).json({
                status: 409,
                message: 'Invalid credentials'
            })
        }

        const passwordMatch = await bcrypt.compare(password, validUser.password)
        if (!passwordMatch) {
            return res.status(401).json({
                status: 401,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({ userId: validUser._id }, process.env.SECRET_KEY)

        res.status(200).json({
            status: 200,
            message: 'User Logged in successfully',
            token: token
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;