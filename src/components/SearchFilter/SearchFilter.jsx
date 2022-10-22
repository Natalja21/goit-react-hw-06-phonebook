import React from 'react';
import stl from './SearchFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice';

const SearchFilter = () => {
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <label className={stl.label}>
      Find contacts by Name
      <input
        className={stl.input}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
        required
      />
    </label>
  );
};

export default SearchFilter;
