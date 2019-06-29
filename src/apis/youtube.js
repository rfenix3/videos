import axios from 'axios';


const KEY = 'AIzaSyC9TQKw9jg2SmRyS_nxQkE2yCyEnV40p1k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', 
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
