import * as Yup from 'yup';
import User from "../models/User";

class UserController {
    async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)  
    });

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
            message: 'Schema validation failure'
        })

    }

        const userExists = await User.findOne({
            where: { email: req.body.email}
        })
        if (userExists) {
            return res.status(400).json({
                error: 'User already registered'
            })            
        }

        const { id, name, email, provider } = await User.create(req.body)
        
        return res.json({
            id,
            name,
            email,
            provider
        })
    }   

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(6), 
            password: Yup.string().min(6).when('oldPassword', (oldPassword, field) => {
                oldPassword ? field.required() : field;
            }),
            confirmPassword: Yup.string().min(6).required().when('oldPassword', (password, field) => {                
                field.required().oneOf([Yup.ref("password")], "Passwords do not match");
            })  
          });
      
          if (!(await schema.isValid(req.body))) {
              return res.status(400).json({
                  message: 'Schema validation failure'
              })
      
          }
        // Destructures user properties from request body
        const { email, oldPassword } = req.body;

        // Note: req.sessionUserId property was created by src/app/middlewares/auth.js
        // User variable instantiated the user information from database
        const user = await User.findByPk(req.sessionUserId)
        console.log(typeof user);
       
        // Validates if the request is modifying the e-mail and assures that the new email is not binded to another user
        if (email && email != user.email) {
            const userExists = await User.findOne({
                where: { email }
            })
            if (userExists) {
                return res.status(400).json({
                    error: 'User already registered'
                })            
            }
        }

        //Validates the oldPassword before change it.
        if (oldPassword &&!await(user.checkPassword(oldPassword))) {
            return res.status(401).json({
                error: 'Invalid password'
            })            

        } 

        const { id, name, provider } = await user.update(req.body);
        
        return res.json({
            id,
            name,
            email,
            provider
        })
    }
}

export default new UserController();