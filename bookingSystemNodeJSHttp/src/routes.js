import { Router} from 'express'; 
import multer from 'multer';
import multerConfig from './config/multer'
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CollaboratorController from './app/controllers/CollaboratorController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)
routes.get('/', async (req, res) => {
    return res.json({
        message: 'Server is running'
    })
})

// Authenticated routes
routes.use(authMiddleware)

routes.put('/users', UserController.update)

// List of collaborators
routes.get('/collaborator', CollaboratorController.index)

//File uploads
routes.post('/files', upload.single('file'), FileController.store)
export default routes;