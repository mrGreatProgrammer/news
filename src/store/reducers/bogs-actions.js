import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBlogs  = createAsyncThunk(
    'blogs/fetchAll',
)