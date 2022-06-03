import { password, File } from 'pg/lib/defaults';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Files extends Model {
    static init(sequelize) {
        super.init({     
            name: Sequelize.STRING,
            path: Sequelize.STRING               
        },{
            sequelize
        });          

        return this;
    }

}

export default File;