import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const getDoctors = () => axios.get(`${API_URL}/doctors`);
export const createAppointment = (data: any) => axios.post(`${API_URL}/appointments`, data);

