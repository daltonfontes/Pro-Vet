const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PermissionRolesSchema = new Schema({
    permission: { type: String },
    role: { type: String },
},{
    timestamps: true
})

const PermissionRoles = mongoose.model('PermissionRoles', PermissionRolesSchema)

module.exports = PermissionRoles