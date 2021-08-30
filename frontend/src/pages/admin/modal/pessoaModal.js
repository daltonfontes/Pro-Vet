import React from 'react';
import { connect } from 'react-redux'
import './style.css'

const PessoaModal = ({ stateReducer }) => {
    console.log('stateReducer', stateReducer)
    
    return (
        <div className="PessoaMadal">
            <div className="PessoaMadal_Info">
                <p></p>
            </div>
            <div>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    stateReducer: state.user
});

export default connect(mapStateToProps)(PessoaModal);