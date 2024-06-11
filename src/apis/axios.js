import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // const accessToken = await getAccessToken();
    config.headers = {
        // Authorization: accessToken ? `Bearer ${accessToken}` : '',
        Accept: 'application/json',
        ...config.headers,
    };
    // eslint-disable-next-line no-unused-expressions
    config.data;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (
            (response.status === 200 || response.status === 201) &&
            response.data &&
            response.data.status === 'success'
        ) {
            return response.data;
        }
        throw new Error('Something went wrong');
    },
    (error) => {
        // if (error.response && error.response.status === 401) {
        //     HandleExpiredToken();
        // }
        throw error.response.data.message || error.message;
    }
);

export default axiosClient;
