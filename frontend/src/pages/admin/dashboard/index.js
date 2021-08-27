import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import styled from 'styled-components';
import {  makeStyles } from '@material-ui/core/';
import { userAuthenticate } from '../../../redux-flow/actions'
import Side from '../Sidebar'

function Dashboard({userAuthenticate, data}) {
  
  const useStyles = makeStyles((theme) => ({
    font: {
      fontFamily: 'Patua One',
      fontSize: '12px',
    },
    bottom: {
      fontFamily: 'Patua One',
      fontSize: '12px',
      marginTop: '300px',
    }
  }));

  const classes = useStyles();
  return (
    <Wrapper>
      <Side/>
    </Wrapper>
  );
}
const Wrapper = styled.div`
display:flex;
align-items:center;

`;


const mapStateToProps = state => ({
  data: state.user
})

const mapDispatch = dispatch => bindActionCreators({
  userAuthenticate
}, dispatch)

export default connect(mapStateToProps, mapDispatch) (Dashboard);