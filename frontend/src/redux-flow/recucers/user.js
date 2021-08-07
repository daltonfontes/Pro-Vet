import {
  LOAD_USER,
  SUCCESS_USER,
  ERROR_USER,
  AUTHETICATE_USER,
} from "../constants";

const initialState = {
  user: {},
  success: false,
  error: false,
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case AUTHETICATE_USER: {
      const { payload } = action;
      return {
        ...state,
        user: payload,
      };
    }

    case LOAD_USER: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }
    case SUCCESS_USER: {
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
      };
    }

    case ERROR_USER: {
      return {
        ...state,
        error: true,
        success: false,
        loading: false
      };
    }

    default:
      return state;
  }
};

export default user;
