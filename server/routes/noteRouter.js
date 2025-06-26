import { Router } from "express";
import noteController from "../controllers/noteController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { body } from "express-validator";
const noteRouter = Router();

// endPoint -> /api/v1/notes

noteRouter.post('/', body(['title', 'content']).notEmpty(), authMiddleware, noteController.create);
noteRouter.get('/', authMiddleware, noteController.notes);
noteRouter.get('/myNotes', authMiddleware, noteController.myNotes);
noteRouter.get('/:note_id', authMiddleware, noteController.note);
noteRouter.put('/:note_id', authMiddleware, noteController.update);
noteRouter.delete('/:note_id', authMiddleware, noteController.drop);

export default noteRouter;