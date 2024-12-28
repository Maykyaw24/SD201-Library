import express from 'express';
import {
    createBookGetHandler,
    createBookPostHandler,
    showBooksHandler,
    showBooksByCategoryHandler,
    bookDetail,
} from './handler';

const router = express.Router();

router.get('/createbook', createBookGetHandler);
router.post('/createbook', createBookPostHandler);
router.get('/', showBooksHandler);
router.get('/category/:category', showBooksByCategoryHandler);
router.get('/books/:id', bookDetail);

export default router;
