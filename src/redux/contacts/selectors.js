import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./slice";
import { selectNameFilter, selectNumberFilter } from "../filters/filtersSlice";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (items, filter, number) => {
    const filteredItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(number)
    );
    return filteredItems;
  }
);
