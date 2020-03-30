import axios from 'axios';
const api = axios.create({
  baseURL:'https://be-the-hero2.herokuapp.com/'
});

export default api;