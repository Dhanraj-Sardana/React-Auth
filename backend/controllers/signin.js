
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.signin = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: "user already exist" })
        bcrypt.genSalt(10, (err, salt) => {
            if (err) res.status(500).send(err);
            //hash generation
            bcrypt.hash(password, salt, async (error, hash) => {
                if (error) res.status(500).send(error);
                const user = new User({ name, email, password: hash });
                await user.save();
                //creating jwt
                
                
                const token = jwt.sign({ email: email }, process.env.SECURE, { expiresIn: '1h' });
                //add this token to client browser
                res.cookie('token',token);
                res.status(200).json({ message: "user signed in" })
            })

        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
