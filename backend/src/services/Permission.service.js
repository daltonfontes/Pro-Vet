const Permission = require('../model/permission')

const create = async (req, res)=>{
    try{
        const { permission } = req.body;
        if(await Permission.findOne({permission})){
            return res.status(400).json({error: 'Ja existe uma permissão com este nome'})
        }
        const insertPermission = Permission(req.body);
        await insertPermission.save()
        return res.status(201).json(insertPermission)
    }catch(error){
        return res.status(500).json(error)
    }
};
const index = async(req, res)=>{
    try{
        const permission = await Permission.find()
        return res.status(200).json(permission)

    }catch(error){
        return res.status(400).json({error})
    }
}

module.exports={
    create,
    index
};