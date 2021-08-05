const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserRolesSchema = new Schema({
    user: { type: String },
    role: { type: String },
},{
    timestamps: true
})

const UserRoles = mongoose.model('UserRoles', UserRolesSchema)

module.exports = UserRoles