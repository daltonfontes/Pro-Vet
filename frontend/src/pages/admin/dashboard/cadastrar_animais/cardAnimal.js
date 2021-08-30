import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';



const CardAnimal = ({ data }) => {

    const isLogged = useSelector(state => state.auth.user !== null)
    
    const { nome, idade, raca, especie, sexo, pelagem, temperamento, peso } = data;
    
    return (
        <div className="Card_Animal">
            <div className="Card_Name"> 
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
            </div>
            <div className="Card_Tipo">
                <p>Raça: {raca}</p>
                <p>Especie: {especie}</p>
                <p>Peso: {peso}</p>
            </div>
            <div className="Card_Info">
                <p>Genero: {sexo}</p>
                <p>Pelagem: {pelagem}</p>
                <p>Temperamento: {temperamento}</p>

            </div>
        </div>
    )
};

export default CardAnimal;