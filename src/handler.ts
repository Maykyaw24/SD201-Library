import { Request, Response } from 'express';
import { Book } from './database/model/book';
import { createBook, getAllBooks, getBooksByCategory } from './database/dao/bookDao';
import { getBookById } from './database/dao/bookDao'; 
import { getAllCategories } from './database/dao/bookDao';


export const landingGetHandler = (req: Request, res: Response) => {
    res.render('landing');
};

export const createBookGetHandler = async(req: Request, res: Response) => {
    const categories = await getAllCategories();
    res.render('createBook', {
        book: null,
        categories,
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

    const categories = await getAllCategories();

    res.render('createBook', {
        book: result,
        categories, 
    });
};

export const showBooksHandler = async (req: Request, res: Response) => {
    const books = await getAllBooks();
    const categories = await getAllCategories(); 

    res.render('showBooks', {
        books,
        categories, 
    });
};


export const bookDetail = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id, 10); 
    const book = await getBookById(bookId); 
    const categories = await getAllCategories(); 
    res.render('bookDetail', { 
        book,
        categories, 
    }); 
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


