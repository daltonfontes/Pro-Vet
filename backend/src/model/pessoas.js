const mongoose = require('../config/database')
const Schema = mongoose.Schema

const PessoasSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String },
    cpf: { type: String },
    sus: { type: String },
    telefone: { type: String },
    endereco:{type: String},
    rua: {
        type: String
    },
    cep: {
        type: String
    },
    numero: {
        type: String
    },
    bairro: {
        type: String
    },
    cidade: {
        type: String
    },
    estado: {
        type: String
    },
    observacao: { type: String },
    animais: { type: Array }
}, {
    timestamps: true
})

const Pessoas = mongoose.model('Pessoas', PessoasSchema)

module.exports = Pessoas