const Roles = require('../model/roles')

const create = async (req, res)=>{
    try{
        const { roles } = req.body;
        if(await Roles.findOne({roles})){
            return res.status(400).json({error: 'Ja existe uma role com este nome'})
        }
        const insertRoles = Roles(req.body);
        await insertRoles.save()
        return res.status(201).json(insertRoles)
    }catch(error){
        return res.status(500).json(error)
    }
};

const index = async (req, res)=>{
    try{
        const role = await Roles.find();
        return res.status(200).json(role)
    }catch(error){
        return res.status(400).json({error})
    }
}

module.exports={
    create,
    index
};