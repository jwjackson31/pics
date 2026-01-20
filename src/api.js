import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID lmCjSrlu_JAFQREQYX_NNsKP40BuwQrm-oXUlngzRsM'
        },
        params: {
            query: term,
        }

    });


    return response.data.results;
};

export default searchImages;