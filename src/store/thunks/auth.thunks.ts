import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'src/services/axios.instance';
export const loginThunk = createAsyncThunk(
    'auth/login',
    async (data: { email: string }) => {
        const response = await axiosInstance.post('/auth/login', data);
        return response.data;
    }
)
export const registerThunk = createAsyncThunk(
    'auth/register',
    async (data: { email: string, fullName: string}) => {
        const response = await axiosInstance.post('/auth/register', data);
        return response.data;
    }
)

export const confirmThunk = createAsyncThunk(
    'auth/confirmCode',
    async (data: { email: string, code: string}) => {
        const response = await axiosInstance.post('/auth/confirmCode', data);
        return response.data;
    }
)