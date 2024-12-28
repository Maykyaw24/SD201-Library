import express from 'express';
import { fileHandler } from './fileHandler'; 
import {
    createBookGetHandler,
    createBookPostHandler,
    showBooksHandler,
    showBooksByCategoryHandler,
    bookDetail,
} from './handler';

const router = express.Router();

router.get('/createbook', createBookGetHandler);
router.post('/createbook', fileHandler, createBookPostHandler);
router.get('/', showBooksHandler);
router.get('/categories/:category', showBooksByCategoryHandler);
router.get('/books/:id', bookDetail);

export default router;
