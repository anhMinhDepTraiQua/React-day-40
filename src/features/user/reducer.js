import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "./consts";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case GET_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
