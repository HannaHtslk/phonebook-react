import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterId = useId();

  return (
    <div className={s.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={s.filter}
        type="text"
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
        id={filterId}
      />
    </div>
  );
};

export default SearchBox;
