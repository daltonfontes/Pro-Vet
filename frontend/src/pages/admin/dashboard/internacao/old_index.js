import React from 'react';

import styled from 'styled-components';
import { SideBar } from '../../../../components/Sidebar';
import { Logo } from '../../../../components/Logo';

import { Button, Container, Divider, Grid, makeStyles, withStyles, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Typography, Box, TextField } from '@material-ui/core/';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Internacao() {
    const useStyles = makeStyles((theme) => ({
        font: {
            fontFamily: 'Patua One',
            fontSize: '12px',
        },
        bottom: {
            fontFamily: 'Patua One',
            fontSize: '12px',
            marginTop: '300px',
        },
        title: {
            fontSize: '30px',
            fontFamily: 'Patua One',
            color: 'var(--blue-500)',
        },
        hr: {
            marginBottom: '80px',
            border: '1px solid var(--black-50)'
        },
        button: {
            background: 'var(--yellow)',
            borderRadius: '30px',
            border: '2px solid var(--black)',
            fontFamily: 'Patua One'
        },
        search: {
            width: '645px',
            height: '50px'
        },
        container: {
            height: '55vh'
        }
    }));

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: 'var(--white-50)',
            color: 'var(--blue-500)',
            fontFamily: 'Patua One',
            fontSize: 25,
        },
        body: {
            fontSize: 14,
            backgroundColor: 'var(--white-50)',
            fontFamily: 'Patua One',
        },
    }))(TableCell);

    const classes = useStyles();
    return (
        <Wrapper>
            <SideBar>
                <Logo className='logo-nav' loading='lazy'></Logo>

                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    href="/dashboard"
                    variant="contained"
                    tabIndex="1"
                    startIcon={<HomeIcon />}
                >
                    Inicio
                </Button>

                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    target="_parent"
                    href="../dashboard/cadastrar_animais"
                    variant="contained"
                    tabIndex="2"
                    startIcon={<PetsIcon />}
                >
                    Animais
                </Button>

                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    target="_parent"
                    href="../dashboard/internacao"
                    variant="contained"
                    tabIndex="3"
                    startIcon={<LocalPharmacyIcon />}
                >
                    Internação
                </Button>

                <Button
                    className={classes.font}
                    size="medium"
                    component="button"
                    target="_parent"
                    href="../dashboard/cadastrar_usuario"
                    variant="contained"
                    tabIndex="4"
                    startIcon={<PersonAddIcon />}
                >
                    Cadastrar Usuário
                </Button>

                <Button
                    className={classes.bottom}
                    size="medium"
                    component="button"
                    href="/"
                    variant="contained"
                    tabIndex="5"
                    startIcon={<ExitToAppIcon />}
                >
                    Sair
                </Button>
            </SideBar>
            <Container className={classes.container}>
                <Box display="flex" justifyContent="center">
                    <TextField
                        className={classes.search}
                        label="Pesquisa"
                        margin="normal"
                        variant="outlined"
                    />
                </Box>
                <Box display="flex" flexDirection="row-reverse" marginBottom="-1.902rem">
                    <Button
                        component="button"
                        variant="contained"
                        className={classes.button}
                        size="small"
                        target="_parent"
                        href="../dashboard/cadastrar_animais"
                    >Cadastrar Animais</Button>
                </Box>
                <Box display="flex" flexDirection="row">
                    <Typography
                        className={classes.title}
                    >
                        Animais Internados
                    </Typography>
                </Box>
                <Divider
                    className={classes.hr}
                    light="true"
                />
                <Grid>
                    <TableContainer>
                        <Table size="medium" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Animal</StyledTableCell>
                                    <StyledTableCell align="center">Tipo de Internação</StyledTableCell>
                                    <StyledTableCell align="center">Veterinário</StyledTableCell>
                                    <StyledTableCell align="center">Data de Internação</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <StyledTableCell component="th" scope="row">Belinha
                                    </StyledTableCell>
                                    <StyledTableCell align="center">Observação</StyledTableCell>
                                    <StyledTableCell align="center">Dalton</StyledTableCell>
                                    <StyledTableCell align="center">18/05/2021</StyledTableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Container >
        </Wrapper >
    );
}
const Wrapper = styled.div`
display:flex;
align-items:center;

`;
export default Internacao;