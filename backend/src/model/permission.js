const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
    permission: { type: String, required: true },
    descricao: { type: String },
},{
    timestamps: true
})

const Permission = mongoose.model('Permission', PermissionSchema)

module.exports = Permission