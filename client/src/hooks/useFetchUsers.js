import { useEffect, useState } from "react";
import { fetchUsers } from "../services/fetchUsers";

export const useFetchUser = (id) => {
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    const data = await fetchUsers(id);
    setAuthor(data.name);
  };
  return author;
};
