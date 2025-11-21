import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./actions";

export const useUsers = () => {
  const { data, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return {
    data,
    loading,
    error,
    getUsers: () => dispatch(getUsers()),
  };
};
