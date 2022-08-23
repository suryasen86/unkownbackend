
const { User } = require('../models/sql/')
const Constant = require('../Constant')
class UserPersistence {
    async getUserByMobile(user_phone) {
        return await User.findOne({
            where: {
                user_phone: user_phone
            }
        })
    }
    async create(incoming) {
        incoming.is_active = Constant.active
        incoming.role_id = Constant.Role_id.student
        return await User.create(incoming)
    }
    async update(user_phone, incoming) {
        return await User.update(incoming,{ where: { user_phone: user_phone } })
    }
    async updateById(incoming,user_id)
    {
        return await User.update(incoming,{ where: { user_id} })
    }
    async getUserById(user_id)
    {
        return await User.findOne({
            where: {
                user_id
            }
        })
    }
}
module.exports = new UserPersistence()