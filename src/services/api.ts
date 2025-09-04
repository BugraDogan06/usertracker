import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getUsers = async (id?: number) => {
  if (id) {
    const res = await axios.get(`${BASE_URL}users/${id}`);
    const isMale = true;
    const avatarUrl = isMale
      ? `https://randomuser.me/api/portraits/men/${id % 99}.jpg`
      : `https://randomuser.me/api/portraits/women/${id % 99}.jpg`;

    return {
      ...res.data,
      initials: res.data.name
        .split(" ")
        .map((n: string) => n[0])
        .join(""),
      avatarUrl,
    };
  } else {
    const res = await axios.get(`${BASE_URL}users`);
    return res.data;
  }
};

export const getPosts = async (userId?: number) => {
  return await axios.get(`${BASE_URL}posts?userId=${userId}`);
};

export const getTodos = async (userId?: number) => {
  return await axios.get(`${BASE_URL}todos?userId=${userId}`);
};
export const getComments = async (postsId?: number) => {
  return await axios.get(`${BASE_URL}comments?postId=${postsId}`);
};
