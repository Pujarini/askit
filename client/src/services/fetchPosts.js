import { makeRequest } from "./makeRequests";

export async function fetchPosts() {
  return await makeRequest("/posts");
}

export async function fetchPostsById(postId) {
  const response = await makeRequest(`/post/${postId}`);
  return response;
}
