import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "./consts";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
