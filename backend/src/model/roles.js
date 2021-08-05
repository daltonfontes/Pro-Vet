const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    roles: { type: String, required: true },
    descricao: { type: String },
    permissions: { type: Array }
},{
    timestamps: true
})

const Roles = mongoose.model('Roles', RolesSchema)

module.exports = Roles