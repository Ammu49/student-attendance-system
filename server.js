import express from 'express'
import dotenv from "dotenv"
import dbConnect from './config/dbConnect.js';
import bodyParser from 'body-parser'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import path from 'path'

const { urlencoded } = bodyParser
dotenv.config()
dbConnect()

const app = express()

// Set EJS as templating engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Serve static files
app.use(express.static('public'))

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes

app.use('/api/auth', authRoutes)

app.use('/users', userRoutes)

// Home page route
app.get('/', (req, res) => {
    res.render('home')
})

// Auth pages
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server running on port ${process.env.PORT || 8080}`)
})