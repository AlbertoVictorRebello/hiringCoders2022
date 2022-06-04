import Appointment from '../models/Appointment'
import * as Yup from 'yup'
import User from '../models/User';
class AppointmentController {
    async index(req, res) {
        const { page = 1 } = req.query;

        const appointments = await Appointment.findAll({
            where: { user_id: req.userId, canceled_at: null },
            order: ['date'],
            attributes: ['id', 'date'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: User,
                    as: 'collaborator',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: File,
                            as: 'photo',
                            attributes: ['id', 'path', 'url']
                        }
                    ]
                }
            ]
        })
        return res.json(appointments)
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            collaborator_id: Yup.number().required(),
            date: Yup.date().required()
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                error: 'Invalid schema'
            })
        }

        const { collaborator_id, date } = req.body;

        const isCollaborator = await User.findOne({
            where: { id: collaborator_id, provider: true }
        });

        if (!isCollaborator) {
            return res.status(401).json({
                error: 'Collaborator not found'

            })
        }

        const appointment = await Appointment.create({
            user_id: req.userId,
            collaborator_id,
            date
        })

        return res.json(appointment)
    }
}

export default new AppointmentController();