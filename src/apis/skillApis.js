import { API_URL } from '../constants';
import axiosClient from './axios';

class SkillApis {
    HandleSkill = async (url, data, method) => {
        return await axiosClient(`${API_URL}/api/skills${url}`, {
            method: method || 'get',
            data,
        });
    };
}

const skillApis = new SkillApis();

export default skillApis;
