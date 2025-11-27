import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  register: (username: string, email: string, password: string) =>
    api.post('/auth/register', { username, email, password }),
  getMe: () => api.get('/auth/me'),
};

// User API
export const userAPI = {
  updateProfile: (username: string, email: string) =>
    api.put('/users/profile', { username, email }),
  changePassword: (currentPassword: string, newPassword: string) =>
    api.put('/users/password', { currentPassword, newPassword }),
};

// Games API
export const gamesAPI = {
  getAll: () => api.get('/games'),
  getOne: (id: string) => api.get(`/games/${id}`),
  create: (formData: FormData) =>
    api.post('/games', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  update: (id: string, formData: FormData) =>
    api.put(`/games/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  delete: (id: string) => api.delete(`/games/${id}`),
  reorder: (games: { id: string; order: number }[]) =>
    api.put('/games/reorder', { games }),
};

// Locations API
export const locationsAPI = {
  getAll: () => api.get('/locations'),
  getOne: (id: string) => api.get(`/locations/${id}`),
  create: (formData: FormData) =>
    api.post('/locations', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  update: (id: string, formData: FormData) =>
    api.put(`/locations/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  delete: (id: string) => api.delete(`/locations/${id}`),
  reorder: (locations: { id: string; order: number }[]) =>
    api.put('/locations/reorder', { locations }),
};

// Content API
export const contentAPI = {
  get: (page: string) => api.get(`/content/${page}`),
  update: (page: string, sections: any) =>
    api.put(`/content/${page}`, { sections }),
};

export default api;
