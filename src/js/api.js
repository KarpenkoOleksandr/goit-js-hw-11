import axios from 'axios';

const URL = "https://pixabay.com/api/";
const KEY = "39776861-570fd88826b57aa6e10d37d1b";

export async function fetchPhoto(q, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(url);
    return response.data;          
};