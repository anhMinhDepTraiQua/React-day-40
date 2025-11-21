import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./actions";

export const usePosts = () => {
  const { data, loading, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return {
    data,
    loading,
    error,
    getPosts: () => dispatch(getPosts()),
  };
};
