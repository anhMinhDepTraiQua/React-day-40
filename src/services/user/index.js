import http from "../../utils/httpRequest";

const getUsers = async () => {
  const res = await http.get("/users");
  return res.data;
};

export default {
  getUsers,
};
