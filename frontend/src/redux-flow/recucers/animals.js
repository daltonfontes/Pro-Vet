import { FETCH_ANIMALS } from "../constants";

const initialState = {
  animals: {},
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
    default:
            return state
  }
};

export default animals;
