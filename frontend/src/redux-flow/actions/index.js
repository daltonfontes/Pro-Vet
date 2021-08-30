import axios from "axios";
import {
  LOAD_USER,
  SUCCESS_USER,
  ERROR_USER,
  AUTHETICATE_USER,
  FETCH_ANIMALS,
  CREATE_USER,
  LOAD_PESSOA,
  SUCESS_PESSOA,
  ERROR_PESSOA,
  CREATE_PESSOA,
  CREATE_ANIMAL,
  LOAD_ANIMALS,
  SUCESS_ANIMALS,
  ERROR_ANIMALS

} from "../constants";

import { toast } from "react-toastify";

const host = 'http://localhost:5001/'

const API = axios.create({
  baseURL: "http://localhost:5001",
});

export const fetchAnimals = () => {
  return (dispatch) => {
    dispatch({
      type: LOAD_ANIMALS
    });

    API.get("/animais")
      .then(res => {
        const { data } = res
        dispatch({
          type: FETCH_ANIMALS,
          payload: data,
        });
        dispatch({
          type: SUCESS_ANIMALS
        })
      })
      .catch(() => (

        dispatch({
          type: ERROR_ANIMALS
        })
      ));
  };
};

export const userAuthenticate = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_USER
    })
    API.post(`${host}register/authenticate`, { ...data }).then(({ data }) => {
      
      dispatch({
        type: AUTHETICATE_USER,
        payload: data
      })
      dispatch({
        type: SUCCESS_USER
      })
      toast.success("Voce Logou com sucesso")
      localStorage.setItem("user@authentication",JSON.stringify(data))
    }).catch((error) => {
      dispatch({
        type: ERROR_USER
      })
      toast.error("Não Foi Possivel Logar")
      return {
        error
      }
    })
  };
};

export const createUser = (data) => {

  return (dispatch) => {
    dispatch({
      type: LOAD_USER
    })
    API.post(`${host}register`, { ...data }).then(({ data }) => {
      toast.success("Animal cadastrado com sucesso")
      dispatch({
        type: CREATE_USER,
        payload: data
      })


      dispatch({
        type: SUCCESS_USER
      })


    }).catch((error) => {
      dispatch({
        type: ERROR_USER
      })
      toast.error("Não foi possivel criar o usuario")
      return {
        error
      }
    })
  };
};

export const creatPessoa = (data) => {

  return (dispatch) => {
    dispatch({
      type: LOAD_PESSOA
    });

    API.post(`${host}pessoas`, { ...data }).then(({ data }) => {
      toast.success("Cadastrado com sucesso")
      dispatch({
        type: CREATE_PESSOA,
        payload: data
      })

      dispatch({
        type: SUCESS_PESSOA
      })

    }).catch((error) => {
      dispatch({
        type: ERROR_PESSOA
      })
      toast.error("Não foi possivel cadastrar")
      return { error }
    })
  };
};

export const creatAnimal = (data) => {

  return (dispatch) => {
    dispatch({
      type: LOAD_ANIMALS
    });

    API.post(`${host}animais`, { ...data }).then(({ data }) => {
      toast.success("Cadastrado com sucesso")
      dispatch({
        type: CREATE_ANIMAL,
        payload: data
      })

      dispatch({
        type: SUCESS_ANIMALS
      })

    }).catch((error) => {
      dispatch({
        type: ERROR_ANIMALS
      })
      toast.error("Não foi possivel cadastrar")
      return { error }
    })
  };
};
