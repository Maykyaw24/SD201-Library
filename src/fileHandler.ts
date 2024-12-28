import multer from 'multer';
import path from 'path';

const directory = path.join(__dirname, '../../public/images');

const storage = multer.diskStorage({
    destination: directory, 
        filename: (req, file, cb) => {
        cb(null,  file.originalname); 
    },
});

export const fileHandler = multer({
    storage: storage,
}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'bookFile', maxCount: 1 },
]);
