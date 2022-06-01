import { Router} from 'express'; 
import User from './app/models/User new';

const routes = new Router();

routes.get('/', async (req, res) => {    
    const user = await User.create({
        name: 'Alberto',
        email: 'albertorebello@alberto.com',
        password_hash: '1234567890',
       /*  provider: false, 
        created_at: new Date(), // AR
        updated_at: new Date() // AR */
    })

    return res.json(user);
})

export default routes;