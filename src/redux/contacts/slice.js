import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactsThunk,
  deleteContactsThunk,
  editContactsThunk,
  fetchContactsThunk,
} from "./operations";
import { logoutThunk } from "../auth/operations";
import toast from "react-hot-toast";

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
        const deletedItem = state.items.find((item) => item.id === payload);
        if (deletedItem) {
          toast.error(`${deletedItem.name} was successfully deleted`);
        }
        state.items = state.items.filter((item) => item.id !== payload);
        state.isLoading = false;
      })

      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        toast.success(`${payload.name} was successfully added`);
      })
      .addCase(editContactsThunk.fulfilled, (state, { payload }) => {
        const item = state.items.find((item) => item.id === payload.id);

        item.name = payload.name;
        item.number = payload.number;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
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
