import express from 'express'
import {webAuthorizedRoles, webVerifyToken} from '../middlewares/webAuthmiddleware.js'
const router = express.Router()

// WEB ROUTES (for browser navigation)
router.get('/admin-dashboard', webVerifyToken, webAuthorizedRoles('admin'), (req, res) => {
    res.render('admin-dashboard', { user: req.user })
})

router.get('/teacher-dashboard', webVerifyToken, webAuthorizedRoles('admin', 'teacher', 'moderator'), (req, res) => {
    res.render('teacher-dashboard', { user: req.user })
})

router.get('/moderator-dashboard', webVerifyToken, webAuthorizedRoles('admin', 'moderator'), (req, res) => {
    res.render('moderator-dashboard', { user: req.user })
})

router.get('/student-dashboard', webVerifyToken, webAuthorizedRoles('admin', 'manager', 'student', 'teacher'), (req, res) => {
    res.render('student-dashboard', { user: req.user })
})

export default router