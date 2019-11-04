import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-564b8.firebaseio.com/' 
});

export default instance;