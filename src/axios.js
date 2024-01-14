import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://94.241.173.151:8080/',
});

export default instance;
