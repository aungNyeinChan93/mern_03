import bcrypt, { genSaltSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env.js'


export const Bcrypt = {
    hash: async (password, salt = 10) => bcrypt.hash(password, genSaltSync(salt)),
    compare: async (plainStr, hashStr) => bcrypt.compare(plainStr, hashStr),
};

export const JWT = {
    generateToken: async (payload) => jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256' }),
    verifyToken: async (token) => jwt.verify(token, JWT_SECRET, (err, decode) => {
        if (!err) {
            return decode
        }
    })
};
