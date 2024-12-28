import { Request, Response } from 'express';
import { Book } from './database/model/book';
import { createBook, getAllBooks, getBooksByCategory } from './database/dao/bookDao';
import { getBookById } from './database/dao/bookDao'; 
import { getAllCategories } from './database/dao/bookDao';


export const createBookGetHandler = (req: Request, res: Response) => {
    res.render('createBook', {
        book: null,
    });
};

export const createBookPostHandler = async (req: Request, res: Response) => {
    const uploadedFiles = req.files as {
        [fieldname: string]: Express.Multer.File[];
    };

    const uploadedImage = uploadedFiles['image']?.[0]; 
    const uploadedBookFile = uploadedFiles['bookFile']?.[0]; 

    const book: Omit<Book, 'id'> = {
        name: req.body.name,
        author: req.body.author,
        category: req.body.category,
        releasedDate: req.body.releasedDate,
        language: req.body.language,
        image: uploadedImage ? `public/image-file/${uploadedImage.filename}` : 'default.jpg', 
        bookFile: uploadedBookFile ? `public/image-file/${uploadedBookFile.filename}` : '',
    };

    const result = await createBook(book);

    res.render('createBook', {
        book: result,
    });
};

export const showBooksHandler = async (req: Request, res: Response) => {
    const books = await getAllBooks();
    const categories = await getAllCategories(); // Fetch all categories

    res.render('showBooks', {
        books,
        categories, 
    });
};



export const bookDetail = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id, 10); 
    const book = await getBookById(bookId); 

    res.render('bookDetail', { book }); 
};


export const showBooksByCategoryHandler = async (req: Request, res: Response) => {
    const category = req.params.category;
    const books = await getBooksByCategory(category);
    const categories = await getAllCategories();

    res.render('categoryBooks', {
        category,
        books,
        categories,
    });
};


