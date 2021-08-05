const mongoose = require('../config/database')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    nome: { type: String, required: true },
    crmv: { type: String},
    cpf: { type: String, unique: true },
    telefone: {type: String},
    funcao: { type: String },
    acesso: {type: String},
    email:{type: String, required: true, },
    senha: {type: String, required: true, select: false},
    foto:{type: String},
    roles:{ type: Array }
},{
    timestamps: true
})

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next();
})
const User = mongoose.model('User', UserSchema)

module.exports = User