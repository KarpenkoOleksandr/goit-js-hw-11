import axios from 'axios';

// const URL = "https://pixabay.com/api/";
// const KEY = "39776861-570fd88826b57aa6e10d37d1b";

export async function fetchPhoto(q, page, perPage) {
  // const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  
    const BASE_URL = "https://pixabay.com/api/";
    const params = {
      key: `39776861-570fd88826b57aa6e10d37d1b`,
      page: page,
      q: q,
      per_page: perPage,
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: true,
  };
  const response = await axios.get(BASE_URL, {params});
    return response.data;

// const axiosOptions = {
//       method: 'get',
//       url: 'https://pixabay.com/api/',
//       params: {
//         key: `39776861-570fd88826b57aa6e10d37d1b`,
//         q: q,
//         image_type: `photo`,
//         orientation: `horizontal`,
//         safesearch: true,
//         page: page,
//         per_page: perPage,
//       },
//     };

//     const response = await axios.get(axiosOptions);
//     return response.data;          
};

