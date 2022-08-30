import axios from 'axios'

const KEY = 'AIzaSyBNQDNpUqz_WgoyMjRJqKBa8KL4tsRfnVs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})