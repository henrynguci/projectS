import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { query } from '../config/db.js';
import redis from '../config/redis.js';

config()

const type = {
    'SPSO': 'spsos',
    'USER': 'users'
}

export const validUser = async (email, password, role = 'USER') => {
    try {
        const user = await query(`select id, username, password from ${type[role]} where email = $1`, [email])
        if(user.rowCount === 1) {
            return bcrypt.compareSync(password, user.rows[0].password)
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const accessToken = async (email, role = 'USER') => {
    const token = jwt.sign(
        {
            email,
            role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h'}
    )
    redis.set(email, token)
    return token;
}

export const signout = async (token) => {
    if (!token) {
        return false
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    await redis.del(decoded.email);

    return true;
}