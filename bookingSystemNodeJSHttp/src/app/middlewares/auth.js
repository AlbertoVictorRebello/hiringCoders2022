import jwt from 'jsonwebtoken';
import { config } from 'process';
import { promisify } from 'util';
import authConfig from '../../config/auth'

export default async (req, res, next) => {
    const authHeaders = req.headers.authorization 

    if (! authHeaders ) {
        return res.status(401).json({
            message: 'To be logged is requered to access this resource'
        })
    }

    const [, token ] = authHeaders.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.sessionUserId = decoded.id;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        })
        
    }

    
}