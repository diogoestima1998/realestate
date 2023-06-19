import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
    headers: {
        'X-RapidAPI-Key': '4b80af141bmsh02f7e5157b2fde1p1f21eejsn1a216531be4b',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}