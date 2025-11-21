import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "./consts";
import postService from "../../services/post";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_REQUEST });

  try {
    const data = await postService.getPosts();
    dispatch({ type: GET_POSTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_POSTS_FAILURE, payload: err.message });
  }
};
