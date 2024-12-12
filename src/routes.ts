import { Router } from 'express';
import { landingGetHandler } from './handler';
import { homepageGetHandler } from './handler';
import { uploadPostHandler } from './handler';


const router = Router();

router.get('/', landingGetHandler);

router.get('/libraryHome' ,homepageGetHandler);

router.post('/upload', uploadPostHandler);



export default router;
