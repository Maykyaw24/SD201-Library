import express from 'express';
import { fileHandler } from './fileHandler'; 
import {
    landingGetHandler,
    createBookGetHandler,
    createBookPostHandler,
    showBooksHandler,
    showBooksByCategoryHandler,
    bookDetail,
} from './handler';

const router = express.Router();

router.get('/', landingGetHandler);
router.get('/createbook', createBookGetHandler);
router.post('/createbook', fileHandler, createBookPostHandler);
router.get('/showBooks', showBooksHandler);
router.get('/categories/:category', showBooksByCategoryHandler);
router.get('/books/:id', bookDetail);

export default router;
