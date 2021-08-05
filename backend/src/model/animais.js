const mongoose = require('../config/database')
const Schema = mongoose.Schema

const AnimaisSchema = new Schema({
    nome: { type: String, required: true },
    especie: { type: String, required: true },
    raca: { type: String },
    nascimento: { type: Date, required: true },
    genero: { type: String },
    pelagem: { type: String },
    temperamento: { type: String },
    castrado: { type: String },
    obito: { type: String },
    foto: { type: String },
}, {
    timestamps: true
})

const Animais = mongoose.model('Animais', AnimaisSchema)

module.exports = Animais