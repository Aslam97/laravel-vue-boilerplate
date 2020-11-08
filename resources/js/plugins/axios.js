import axios from 'axios';

axios.defaults.baseURL = process.env.MIX_APP_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
