import { password, File } from 'pg/lib/defaults';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Appointment extends Model {
    static init(sequelize) {
        super.init({     
            date: Sequelize.DATE,
            canceled_at: Sequelize.DATE,
            url: {
                type: Sequelize. VIRTUAL,
                get() {
                    return `http://localhost:3333/Appointment/${ this.path }`
                }
            }                
        },{
            sequelize
        });          

        return this;
    }

    static associate(models){
        this.belongsTo( models.User, { foreignKey: 'user_id', as: 'user'});
        this.belongsTo( models.User, { foreignKey: 'collaborator_id', as: 'collaborator'});
      }

}

export default File;