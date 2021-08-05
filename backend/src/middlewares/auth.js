const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json')

modele.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: 'No Token Provided'})
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).json({error: 'Token Error'})
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.teste(scheme)){
        return res.status(401).json({error: 'Token malformatted'})
    }

    jwt.verify(token, authConfig.secret, (err, decoded)=>{
        if(err) return res.status(401).json({error: 'Token Invalido'})
        req.userId = decoded.id;
        return next()
    })

}