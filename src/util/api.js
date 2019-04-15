import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.24:7523',
    headers: {'Authorization': 'Bearer '+ localStorage.getItem('token')}
  });

export default instance;