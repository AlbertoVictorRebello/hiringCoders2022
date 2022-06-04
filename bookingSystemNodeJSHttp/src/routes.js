import { Router } from 'express'; 
import multer from 'multer';
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CollaboratorController from './app/controllers/CollaboratorController';
import AppointmentController from './app/controllers/AppointmentController.js';
import ScheduleController from './app/controllers/ScheduleController';

import Database from './database/index'
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

//Appointment route
routes.post('/appointments', AppointmentController.store)

//Appointment list
routes.get('/appointments', AppointmentController.index)

// List of collaborators
routes.get('/collaborator', CollaboratorController.index)

// Scheduled appointments by collaborator
routes.get('/schedule', ScheduleController.index)

//File uploads
routes.post('/files', upload.single('file'), FileController.store)
export default routes;