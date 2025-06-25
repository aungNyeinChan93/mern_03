import { Schema, model } from "mongoose";

const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title field is required!'],
        trim: true,
        minLength: [2, "minlength must be 2"],
        maxLength: [100, "maxLength must be 100"],
    },
    content: {
        type: String,
        required: [true, 'content field is required!'],
        trim: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

const NoteModel = model('Note', NoteSchema, 'notes');
export default NoteModel;