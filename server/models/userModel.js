import mongoose, { Schema, model } from "mongoose";
import { Bcrypt, JWT } from '../utils/helper.js'

const UserSchema = new Schema({
    name: { type: String, required: [true, 'name field is required'], trim: true, min: [2, 'min name lenght must be 2'] },
    email: { type: Schema.Types.String, required: [true, 'email field is required'], unique: true, index: true },
    password: { type: String, required: [true, 'password field is required'] }
});

UserSchema.statics.register = async function (name, email, password) {
    try {
        if (!name || !email || !password) {
            const error = new Error('Some Fileds are required!');
            error.status = 400;
            throw error;
        }
        const exists = await this.findOne({ email });
        if (exists) {
            const error = new Error('Email is already have');
            error.status = 400;
            throw error;
        }
        const hashPassword = password && await Bcrypt.hash(password, 10)
        const userDoc = !exists && hashPassword && await this.create({ name, email, password: hashPassword });
        const user = userDoc && await this.findById(userDoc._id, { password: 0, __v: 0 }).lean();
        return user
    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        throw err || new Error('Something went wrong while registering the user!');
    }
};

UserSchema.statics.login = async function (email, password) {
    try {
        const user = email && await this.findOne({ email });
        const isMatch = user && await Bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            const err = new Error('credential wrong');
            err.status = 400;
            throw err;
        }
        return user;
    } catch (error) {
        const err = new Error(error.message);
        err.status = 500;
        throw err || new Error('Something went wrong while login the user!');
    }
}

const UserModel = model('User', UserSchema, 'users');
export default UserModel;