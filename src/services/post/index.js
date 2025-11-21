import http from "../../utils/httpRequest";

const getPosts = async () => {
  const res = await http.get("/posts");
  return res.data;
};

export default {
  getPosts,
};
