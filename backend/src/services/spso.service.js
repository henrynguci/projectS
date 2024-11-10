import { query } from '../config/db.js';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export const createSpso = async ({username, password, full_name, phone_number, email}) => {
    try {
        const hashPassword = bcrypt.hashSync(password, salt);
        const res = await query(
            'insert into spsos (username, password, full_name, phone_number, email) values ($1, $2, $3, $4, $5)',
            [username, hashPassword, full_name, phone_number, email]
        );
        return res;
    } catch (error) {
        throw error;
    }
}

export const findSpsoById = async (id) => {
    try {
        const spso = await query(
            'select id, full_name, email, phone_number from spsos where id = $1',
            [id]
        );
        return spso.rows[0];
    } catch (error) {
        throw error;
    }
}

export const findSpsoByEmail = async (email) => {
    try {
        const spso = await query(
            'select id, full_name, email, phone_number from spsos where email = $1',
            [email]
        );
        return spso.rows[0];
    } catch (error) {
        throw error;
    }
}

export const updatePassSpso = async (id, password) => {
    try {
        const hashPassword = bcrypt.hashSync(password);
        const res = await query(
            'update spsos set password = $1 where id = $2',
            [hashPassword, id]
        );
        return res;
    } catch (error) {
        throw error;
    }
}

export const deleteSpso = async (id) => {
    try {
        const res = await query(
            'delete from spsos where id = $1', [id]
        );
        return res;
    } catch (error) {
        throw error;
    }
}