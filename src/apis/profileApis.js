import { API_URL } from '../constants';
import axiosClient from './axios';

class ProfileApi {
    HandleProfile = async (url, data, method) => {
        return await axiosClient(`${API_URL}/api/profile${url}`, {
            method: method || 'get',
            data,
        });
    };
}

const profileApi = new ProfileApi();

export default profileApi;
