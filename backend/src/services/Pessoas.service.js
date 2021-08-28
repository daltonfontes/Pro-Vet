const Pessoas = require('../model/pessoas')

const index = async(req, res) =>{
    await Pessoas.find()
    .then(response=>{
        return res.status(200).json(response)
    })
    .catch(error=>{
        return res.status(500).json(error)
    })
}

const show = async(req, res) =>{
    await Pessoas.findById(req.params.id)
    .then(response=>{
        if (response)return res.status(200).json(response)
        else return res.status(404).json("Id não encontrado ")
    })
    .catch(error=>{
        return res.status(500).json(error)
    })
    
}

const create = async(req, res) =>{
    console.log(req.body)
    const { email } = req.body;
  if(await Pessoas.findOne({ email })){
    return res.status(400).json({error: 'Ja existe um cadastro com esse email'})
  }
    const pessoas = Pessoas(req.body)
    await pessoas.save()
    .then(response => {
        return res.status(200).json(response)
    }).catch(error=>{
        
        return res.status(500).json(error)
    })
}

const update = async(req, res) =>{
    const pessoa = await Pessoas.findById(req.params.id)

    await pessoa.updateOne( req.body, {new: true})
    .then(response=>{
        return res.status(200).json(response)
    })
    .catch(error=>{
        return res.status(500).json(error)
    })
}
const destroy = async (req, res)=>{
    const pessoa = await Pessoas.findById(req.params.id)
    pessoa.remove(req.body)
    .then((response)=>{
        return res.status(200).json(response)
    })
    .catch(error=>{
        return res.status(500).json(error)
    })
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy
}