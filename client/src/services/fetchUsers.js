import { makeRequest } from "./makeRequests";

export const fetchUsers = async (id) => {
  const data = await makeRequest("/users");
  const res = data.find((user) => user.id === id);
  return res;
};
