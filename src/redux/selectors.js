import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";
import { selectNameFilter } from "./filtersSlice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filter) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredItems;
  }
);
