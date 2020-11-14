import axios from 'axios';

const api = axios.create({
  baseURL: 'http://test.motor.tractian.com',
});

export default api