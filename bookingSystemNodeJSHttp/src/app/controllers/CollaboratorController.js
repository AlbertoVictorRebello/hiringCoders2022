
import User from "../models/User";
import File from "../models/File"
class CollaboratorController {
    async index(req, res) {
        const collaborator = await User.findAll({
            where: { provider: true },
            attributes: ['id', 'name', 'email', 'photo'],
            include: [{
                model: File,
                as: 'photo',
                attributes: ['name', 'path', 'url']
            }]
        })

    }

}

export default new CollaboratorController();