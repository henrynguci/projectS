import { query } from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config()

const type = {
    'SPSO': 'spsos',
    'USER': 'users'
}

export const validUser = async (email, password, role = 'USER') => {
    try {
        const user = await query('select id, username, password from $1 where email = $2', [type[role], email])
        if(user.rowCount === 1) {
            return bcrypt.compareSync(password, user.rows[0].password)
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const accessToken = async (id, email, role = 'USER') => {
    const token = jwt.sign(
        {
            id,
            email,
            role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h'}
    )
    return token;
}
