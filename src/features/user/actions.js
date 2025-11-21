import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "./consts";

import userService from "../../services/user";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });

  try {
    const users = await userService.getUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: users });
  } catch (err) {
    dispatch({ type: GET_USERS_FAILURE, payload: err.message });
  }
};
