import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sitedonegao.herokuapp.com/',
  headers: {
    "Content-type": "application/json"
  }
});

export default api;