import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { baseURL } from '../../api/api'

export const fetchBlogs  = createAsyncThunk(
    'blogs/fetchAll',
    async (_, thunAPI) => {
        try {
            const res = await axios.get(`${baseURL}/blogs`);
            return res.data;
        } catch (err) {
            return thunAPI.rejectWithValue("Не удалось загрузить новости!")
        }
    }
)