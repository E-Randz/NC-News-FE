import React from 'react';
import Button from './Button';
import '../styles/SortAndFilter.css';
import PropTypes from 'prop-types';

const SortAndFilter = ({ FilterProps }) => {
  const { sortFields, handleFilterChange, handleFilterSubmit, sortBy, limit, sortOrder, page } = FilterProps;

  return (
    <div className="Sort-Filter">
    <h3>Sort and Filter</h3>
    <form onSubmit={handleFilterSubmit}>
      <div className="limitdiv">
        <label htmlFor="limit">limit:</label>
        <input value={limit} onChange={handleFilterChange} type="number" name="limit" id="limit"/>
      </div>

      <div className="pagediv">
        <label htmlFor="page">page:</label>
        <input value={page} onChange={handleFilterChange} type="number" name="page" id="page"/>
      </div>

      <div className="sort-by-div">
        <label htmlFor="sort-by">sort by:</label>
        <select value={sortBy} onChange={handleFilterChange} name="sortBy" id="sort-by">
          {sortFields.map((field) => <option key={field}>{field}</option>)}
        </select>
      </div>

      <div className="sort-order-div">
        <label htmlFor="sort-order">sort order:</label>
        <select value={sortOrder} onChange={handleFilterChange} name="sortOrder" id="sort-order">
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </div>
      <Button buttonPurpose={'Apply Changes'}/>
    </form>
  </div>
  );
}

SortAndFilter.propTypes = {
  FilterProps: PropTypes.object.isRequired,
}

export default SortAndFilter;