import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    blogs: [],
    isLoading: false,
    error: ''
}

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: {
        
    }
})