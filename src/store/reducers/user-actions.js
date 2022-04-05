import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../api/api";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (formData, thunkAPI) => {
    try {
      if (
        formData.email.includes("@") &&
        formData.firstName !== "" &&
        formData.secondName !== "" &&
        formData.email !== "" &&
        formData.password !== ""
      ) {
        const res = await axios.post(`${baseURL}/users`, {
          firstName: formData.firstName,
          secondName: formData.secondName,
          email: formData.email,
          password: formData.password,
        });
        return res.data;
      } else if (!formData.email.includes("@")) {
        return thunkAPI.rejectWithValue("Email is not valid");
      } else if (formData.firstName == "" || formData.secondName == "") {
        return thunkAPI.rejectWithValue("Enter your name");
      } else if (formData.password == "") {
        return thunkAPI.rejectWithValue("Enter password");
      } else {
        return thunkAPI.rejectWithValue("some thind went wrong");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "user/logIn",
  async (formData, thunkAPI) => {
    try {
      if (formData.email.includes("@") && formData.password !== "") {
        const res = await axios.get(
          `${baseURL}/users?email=${formData.email}&passwrod=${formData.password}`
        );
          if (res.data[0]==undefined) {
            return thunkAPI.rejectWithValue('Server error 505')
          }

          if (res.data[0].email === formData.email &&res.data[0].password === formData.password) {
            return res.data[0];
          } else if (res.data[0].email != formData.email ||res.data[0].password != formData.password) {
            console.log(
              "res.data.email",
              res.data[0].email,
              "formData.email",
              formData.email
            );
            return thunkAPI.rejectWithValue(
              "User is not defined, sign up please"
            );
          } else {
            return thunkAPI.rejectWithValue("Something went wrong");
          }
        } else if (!formData.email.includes("@")) {
          return thunkAPI.rejectWithValue("Email is not valid");
        } else if (formData.password == "") {
          return thunkAPI.rejectWithValue("Enter your password");
        } else {
          return thunkAPI.rejectWithValue("Something went wrong");
        }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
