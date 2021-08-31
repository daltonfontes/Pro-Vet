import React from 'react';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux';
import './style.css'

const PessoaModal = () => {

    const { user } = useSelector(state => state.user)
    const stateReducer = user
    const {user:objUser} = stateReducer
    const {nome, email} =objUser

    return (
        <div className="PessoaMadal">
            <div className="PessoaMadal_Info">
                <p>{nome}</p>
            </div>
            <div className="PessoaMadal_Info">
                <p>{email}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    stateReducer: state.user
});

export default connect(mapStateToProps)(PessoaModal);