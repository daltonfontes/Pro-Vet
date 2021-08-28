import React from 'react';

const CardAnimal = ({ data }) => {
    console.log('data',data)
    const { nome, idade, raca, especie, genero, pelagem, temperamento } = data;
    
    return (
        <div className="Card_Animal">
            <div>
                <h1>{nome}</h1>
                <h2>{idade}</h2>
            </div>
            <div>
                <h1>{raca}</h1>
                <h2>{especie}</h2>
            </div>
            <div>
                <h1>{genero}</h1>
                <p>{pelagem}</p>
                <p>{temperamento}</p>
            </div>
        </div>
    )
};

export default CardAnimal;