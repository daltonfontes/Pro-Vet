const mongoose = require('../config/database')
const Schema = mongoose.Schema

const PessoasSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String },
    cpf: { type: String, required: true },
    telefone: { type: String },
    endereco:{
        rua:{
            type: String, required: true
        },
        cep:{
            type: String
        },
        numero:{
            type: Number
        },
        bairro:{
            type: String, required: true,
        },
        cidade:{
            type: String, required: true,
        },
        estado:{
            type: String, required: true,
        },
        complemento:{
            type: String
        },
    },
    observacao: {type: String},
    animais:{type: Array}
},{
    timestamps: true
})

const Pessoas = mongoose.model('Pessoas', PessoasSchema)

module.exports = Pessoas