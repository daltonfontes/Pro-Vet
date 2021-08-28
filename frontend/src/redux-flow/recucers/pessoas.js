import {
    LOAD_PESSOA,
    SUCESS_PESSOA,
    ERROR_PESSOA,
    CREATE_PESSOA
} from "../constants";

const initialState = {
    pessoa: {},
    success: false,
    error: false,
    loading: false,
};

const pessoa = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_PESSOA: {
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        }
        case SUCESS_PESSOA: {
            return {
                ...state,
                success: true,
                error: false,
                loading: false,
            };
        }

        case ERROR_PESSOA: {
            return {
                ...state,
                error: true,
                success: false,
                loading: false
            };
        }

        case CREATE_PESSOA: {
            const { payload } = action;
            return {
                ...state,
                pessoa: payload,
            };
        }

        default:
            return state;
    }
};

export default pessoa;
