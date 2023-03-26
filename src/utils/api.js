import axios from 'axios' // for handling responses from api systematically

const BASE_URL = "https://youtube138.p.rapidapi.com"

// const options = {
//     params: { hl: 'en', gl: 'US' }, // gives data of United States 
//     headers: {
//         'X-RapidAPI-Key': 'fa9c0a84femsh44e1324998f13e0p1d8f24jsn307595f9322a',
//         'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//     }
// };

const options = {
    headers: {
        'X-RapidAPI-Key': 'fa9c0a84femsh44e1324998f13e0p1d8f24jsn307595f9322a',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

// Get user's country code using geolocation API
const getLocation = async () => {
    const response = await axios.get('https://ipapi.co/json/');
    return response?.data?.country_code;
};


export const fetchDataFromApi = async (url) => { // 'asyc' and 'await' goes hand in hand
    const country_code = await getLocation();
    // console.log(country_code);
    options.params = {
        hl: 'en',
        gl: country_code
    };
    const { data } = await axios.get(`${BASE_URL}/${url}`, options) // awaiat is used to wait for the response from the api, if failed it will throw error
    return data;
}