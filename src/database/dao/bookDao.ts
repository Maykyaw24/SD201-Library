import { getConnection } from "../dbconnection";
import { Book } from '../model/book';
import { RowDataPacket } from "mysql2";


export const createBook = async (book: Omit<Book, 'id'>): Promise<Book> => {
    const connection = await getConnection();
    const [result] = await connection.execute(
        'INSERT INTO books (name, author, category, releasedDate, language, image, bookFile) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [book.name, book.author, book.category, book.releasedDate, book.language, book.image, book.bookFile]
    );

    const id = (result as any).insertId; 
    return {
        id,
        ...book, 
    } as Book;
};

export const getAllBooks = async (): Promise<Book[]> => {
    const connection = await getConnection();
    const [books] = await connection.execute('SELECT * FROM books');
    return books as Book[];
};

export const getBookById = async (id: number): Promise<Book | null> => {
    const connection = await getConnection();
    const [books] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]) as [Book[], any];
    return books.length > 0 ? books[0] : null;
};



export const getBooksByCategory = async (category: string): Promise<Book[]> => {
    const connection = await getConnection();
    const [books] = await connection.execute<RowDataPacket[]>('SELECT * FROM books WHERE category = ?', [category]);

    return books as Book[];
};



export const getAllCategories = async (): Promise<string[]> => {
    const connection = await getConnection();
    const [rows] = await connection.execute<RowDataPacket[]>('SELECT DISTINCT category FROM books');

    return rows.map(row => row.category); 
};
