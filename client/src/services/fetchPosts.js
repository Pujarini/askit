import { makeRequest } from "./makeRequests";

export function fetchPosts() {
  console.log(makeRequest("/posts"));
}
