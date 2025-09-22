
import jwt from 'jsonwebtoken'

// Middleware for web routes that checks token from query params or redirects to login
const webVerifyToken = (req, res, next) => {
    let token;
    
    // Check for token in Authorization header (for API calls)
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
    }
    // Check for token in query parameters (for browser navigation)
    else if (req.query.token) {
        token = req.query.token;
    }
    
    if (!token) {
        console.log('No token found, redirecting to login')
        return res.redirect('/login?error=auth_required');
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token verified successfully:', decoded)
        req.user = decoded;
        next();
    } catch (error) {
        return res.redirect('/login?error=invalid_token');
    }
}

// Role-based authorization for web routes
const webAuthorizedRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.redirect('/?error=access_denied');
        }
        
        next();
    }
}

export { webVerifyToken, webAuthorizedRoles }