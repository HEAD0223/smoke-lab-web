import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://94.241.173.151/',
});

export default instance;
