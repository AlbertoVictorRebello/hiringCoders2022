import { user } from 'pg/lib/defaults';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init({
            
            // id: Sequelize.INTEGER,// AR
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
         /*    
            created_at: Sequelize.DATE,// AR
            updated_at: Sequelize.DATE, // AR */
        },{
            sequelize
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10)
            }
        })

        return this;
    }
    
}

export default User;