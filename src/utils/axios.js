import axios from 'axios';
const YT_API_KEY = 'API KEY HERE';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: YT_API_KEY,
  },
});

export default instance;
