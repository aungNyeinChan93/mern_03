import mongoose from "mongoose";
import NoteModel from "../models/noteModel.js";
import { validationResult } from "express-validator";


const noteController = {
    // Create Note 
    create: async (req, res, next) => {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const { errors } = validationResult(req)
            if (errors.length > 0) {
                return res.status(400).json({
                    success: false,
                    errors
                })
            }
            const { auth } = req;
            if (!auth) {
                res.status(401);
                return next(new Error('user is not authorize'))
            }

            const { title, content } = req.body;
            const noteDoc = title && content && await NoteModel.create({ title, content, owner: auth._id });
            if (!noteDoc) {
                res.status(400)
                return next(new Error('Note create fail!'))
            };
            const note = noteDoc && await NoteModel.findById(noteDoc._id).populate('owner', { password: 0, __v: 0 }).select("title content").lean();
            note && res.status(201).json({
                success: true,
                message: 'Note create successfully',
                result: note,
            })
            await session.commitTransaction();
        } catch (error) {
            await session.abortTransaction();
            return next(error)
        } finally {
            await session.endSession()
        }
    },
    /**
     * Get All Notes by dynamic fields
     * @method          -> get
     * @url             -> {{host}}/api/v1/notes?fields=title,content
     * @query           -> fields=[]
     * @requestBody     -> null
     * @responseBody    -> notes
    */
    notes: async (req, res, next) => {
        try {
            const { auth } = req;
            if (!auth) {
                res.status(401);
                return next(new Error('user is not authorize'))
            }
            const { fields } = req.query;
            const onlyFields = fields ? fields.split(',') : [' '];
            const notes = await NoteModel.find().populate('owner', { name: 1 }).select(onlyFields).lean();
            notes && res.status(200).json({
                success: true,
                message: 'get all notes',
                result: notes,
                total: notes.length
            })
        } catch (error) {
            return next(error)
        }
    },
    // getAllNotes by user_id
    myNotes: async (req, res, next) => {
        try {
            const { auth } = req;
            const notes = await NoteModel.find({ owner: auth._id }).populate('owner', { name: 1 }).select('title content owner').lean();
            notes && res.status(200).json({
                success: true,
                message: 'get all my notes',
                result: notes,
                total: notes.length
            })
        } catch (error) {
            return next(error)
        }
    },
    // get note by note_id
    note: async (req, res, next) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                return res.status(400).json({
                    success: false,
                    errors
                })
            }
            const { note_id } = req.params;
            const note = note_id && await NoteModel.findById(note_id).populate('owner', { password: 0, __v: 0 }).select('-__v').lean();
            if (!note) {
                res.status(400);
                return next(new Error('Note not found'))
            }
            note && res.status(200).json({
                success: true,
                message: " get note successfully",
                result: note
            })
        } catch (error) {
            return next(error)
        }
    },
    // updateNoteByNoteId
    update: async (req, res, next) => {
        try {
            const { note_id } = req.params;
            const note = note_id && await NoteModel.findByIdAndUpdate(note_id, req.body, { new: true })
                .populate('owner', { password: 0, __v: 0 }).select('-__v').lean();
            if (!note) {
                res.status(400);
                return next(new Error('note update fail'))
            }
            note && res.status(200).json({
                success: true,
                message: " get note successfully",
                result: note
            })
        } catch (error) {
            return next(error)
        }
    },
    // deleteNoteByNoteId
    drop: async (req, res, next) => {
        try {
            const { note_id } = req.params;
            const note = note_id && await NoteModel.findByIdAndDelete(note_id)
                .populate('owner', { name: 1 }).select('-title -content -__v').lean();
            if (!note) {
                res.status(400);
                return next(new Error('Note delete fail'))
            }
            note && res.status(204).json({
                success: true,
                message: " get note successfully",
                result: note
            })
        } catch (error) {
            return next(error)
        }
    }
};

export default noteController;