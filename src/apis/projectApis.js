import { API_URL } from '../constants';
import axiosClient from './axios';

class ProjectApis {
    HandleProject = async (url, data, method) => {
        return await axiosClient(`${API_URL}/api/projects${url}`, {
            method: method || 'get',
            data,
        });
    };
}

const projectApis = new ProjectApis();

export default projectApis;
