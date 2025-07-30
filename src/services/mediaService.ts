import axios from 'axios';
import type { MediaFormData } from '../types/media';


export const fetchMedia = async ({ pageParam = 1 }) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}?page=${pageParam}&limit=10`);
    return {
        data: response.data.data,
        page: pageParam,
        total: response.data.total,
    };
};

export const createMedia = async (data: MediaFormData) => {
    const response = await axios.post(import.meta.env.VITE_API_URL, data);
    return response.data;
};

export const updateMedia = async (id: string, data: MediaFormData) => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/${id}`, data);
    return response.data;
};

export const deleteMedia = async (id: string) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
};