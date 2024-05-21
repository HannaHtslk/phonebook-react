import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactsThunk,
  deleteContactsThunk,
  editContactsThunk,
  fetchContactsThunk,
} from "./contactsOps";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
    selectIsLoading: (state) => state.isLoading,
    selectIsError: (state) => state.isError,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })

      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload);
        state.isLoading = false;
      })

      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(editContactsThunk.fulfilled, (state, { payload }) => {
        const item = state.items.find((item) => item.id === payload.id);
        item.name = payload.name;
        item.number = payload.number;
      })

      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactsThunk.pending,
          addContactsThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactsThunk.rejected,
          addContactsThunk.rejected
        ),
        (state, { payload }) => {
          state.isError = payload;
          state.isLoading = false;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { selectContacts, selectIsLoading, selectIsError } =
  contactsSlice.selectors;
