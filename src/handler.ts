import { Request, Response } from 'express';

export const landingGetHandler = (req: Request, res: Response) => {
    res.render('index');
};

export const homepageGetHandler = (req: Request, res: Response) => {
    res.render('libraryHome');
};

export const uploadPostHandler = (req: Request, res: Response) => {
    res.render('upload');
};
