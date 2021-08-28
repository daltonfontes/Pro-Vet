import { FETCH_ANIMALS, CREATE_ANIMAL, SUCESS_ANIMALS, LOAD_ANIMALS, ERROR_ANIMALS } from "../constants";

const initialState = {
  animals: {},
  success: false,
  error: false,
  loading: false,
};

const animals = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_ANIMALS: {
      const { payload } = action
      return {
        ...state,
        animals: payload
      };
    }

    case CREATE_ANIMAL: {
      const { payload } = action
      return {
        ...state,
        animals: payload
      };
    }

    case LOAD_ANIMALS: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }
    case SUCESS_ANIMALS: {
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
      };
    }

    case ERROR_ANIMALS: {
      return {
        ...state,
        error: true,
        success: false,
        loading: false
      };
    }

    default:
      return state
  }
};

export default animals;
