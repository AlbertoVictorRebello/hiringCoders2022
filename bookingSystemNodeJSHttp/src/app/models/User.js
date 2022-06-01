import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            
            // id: Sequelize.INTEGER,// AR
            name: sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
         /*    provider: Sequelize.BOOLEAN,
            created_at: Sequelize.DATE,// AR
            updated_at: Sequelize.DATE, // AR */
        },{
            sequelize
        });
        return this;
    }
    
}

export default User;