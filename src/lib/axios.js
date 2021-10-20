import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.79.248.107:8080/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "X-Auth-Token": `${localStorage.getItem("token")}`,
    // authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// instance.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

export const apis = {
  // 게시물 불러오기
  getMeat: () => instance.get("/"),
  addMeat: (contents) => instance.post("/meats", contents),
  delMeat: (meat_id) => instance.delete(`/meats/${meat_id}`),
  editMeat: (meat_id, contents) => instance.put(`/meats/${meat_id}`, contents),
  //상세페이지
  getDetail: (item_id) => instance.get(`/item/detail/${item_id}`),
  //댓글
  addComment: (item_id, content) =>
    instance.post(`api/addcomment/${item_id}`, content),
  getComment: (item_id) => instance.get(`api/comment/${item_id}`),
};

// @mida_작업__axios api__
export const apiMida = {
  get: (url = "/") => instance.get(`${url}`),
  post: (url = "/", body = {}) => instance.post(`${url}`, body),
};
