import { createAsyncThunk } from "@reduxjs/toolkit";
import goitApi, { setToken } from "../../config/goitApi";
// import axios from "axios";

// axios.defaults.baseURL = "https://6646149851e227f23aadb19b.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get("/contacts");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/Delete",
  async (id, thunkApi) => {
    try {
      const { data } = await goitApi.delete(`/contacts/${id}`);

      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  "contacts/Add",
  async (body, thunkApi) => {
    try {
      const { data } = await goitApi.post("/contacts", body);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const editContactsThunk = createAsyncThunk()
