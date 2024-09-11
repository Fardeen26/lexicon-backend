import express from 'express';
const router = express.Router();
import * as bookController from '../controllers/book.js';
import { bookSchema } from '../schema/bookSchema.js'
import { validateBook } from '../middleware.js';

router.get('/', bookController.fetchBooks);
router.get('/:id', bookController.getBook);
router.post('/add', validateBook(bookSchema), bookController.addBook);

export default router;