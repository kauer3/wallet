import axios from "axios";

const api = axios.create({
  baseURL: 'https://sofit-front-challenge.herokuapp.com'
})

api.interceptors.request.use(async config => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthdWUwNjA3QGdtYWlsLmNvbSIsImlhdCI6MTYzMjk0NDQwOX0.fOn3VBZMsWb8-lJqVmg3WO2OeWPdY599g4ClU7ZdRZc`;
  return config;
});

export default api;
