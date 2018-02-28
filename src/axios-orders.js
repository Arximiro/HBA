import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hamburger-builder.firebaseio.com/'
});

export default instance;
