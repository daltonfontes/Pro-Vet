import axios from "axios";
import { LOAD_USER, SUCCESS_USER, ERROR_USER, AUTHETICATE_USER, FETCH_ANIMALS } from "../constants";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL: "http://localhost:5001",
});

export const fetchAnimals = () => {
  return (dispatch) => {
    API.get("/animais")
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: FETCH_ANIMALS,
          payload: data,
        });
      })
      .catch((err) => ({err}));
  };
};

export const userAuthenticate = (data) => {
  return (dispatch) => {
    dispatch({
      type: LOAD_USER
    })
    API.post("http://localhost:5001/register/authenticate",{...data}).then( ({ data }) => {
        
      dispatch({
          type: AUTHETICATE_USER,
          payload: data
      })
      dispatch({
        type: SUCCESS_USER
      })
      toast.success("Voce Logou com sucesso")

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
