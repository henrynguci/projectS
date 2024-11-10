import { query } from '../config/db.js';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export const createUser = async ({full_name, email, password, available_a4_pages}) => {
    try {
        const hashPassword = bcrypt.hashSync(password, salt);
        const res = await query(
            'insert into users (full_name, email, password, available_a4_pages) values ($1, $2, $3, $4)',
            [full_name, email, hashPassword, available_a4_pages]
        );
        return res;
    } catch (error) {
        throw error;
    }
}

export const findUserById = async (id) => {
    try {
        const user = await query(
            'select id, full_name, email, available_a4_pages from users where id = $1',
            [id]
        );
        return user.rows[0];
    } catch (error) {
        throw error;
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await query(
            'select id, full_name, email, available_a4_pages from users where email = $1',
            [email]
        );
        return user.rows[0];
    } catch (error) {
        throw error;
    }
}

export const updatePassUser = async (id, password) => {
    try {
        const hashPassword = bcrypt.hashSync(password);
        const res = await query(
            'update users set password = $1 where user_id = $2',
            [hashPassword, id]
        );
        return res;
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (id) => {
    try {
        const res = await query(
            'delete from users where user_id = $1', [id]
        );
        return res;
    } catch (error) {
        throw error;
    }
}