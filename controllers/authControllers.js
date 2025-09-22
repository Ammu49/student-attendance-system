import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const register = async (req, res) => {
    console.log(req.body)
    const { username, email, password, role } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role });

        await newUser.save()
        res.status(201).json({ message: `User registered with username : ${username}` })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `server error` })
    }
}
const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        
        if (!user) {
            return res.status(404).json({ message: `user with username ${username} not found` })
        }
        
        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) {
            return res.status(400).json({ message: `invalid creds` })
        }

        const token = jwt.sign(
            { id: user._id, role: user.role, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Add user data to response
        res.status(200).json({ 
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: `server error` })
    }
}

export { register, login } 