import React from 'react';
import Button from './Button';

const SortAndFilter = (props) => {

    const { sortFields, handleFilterChange, handleFilterSubmit, sortBy, limit, sortOrder } = props;
    return ( 
      <div className='Sort-Filter'>
      <h3>Sort and Filter</h3>
      <form onSubmit={handleFilterSubmit}>
        <div className='limitdiv'>
          <label htmlFor="limit">limit:</label>
          <input value={limit} onChange={handleFilterChange} type="number" name="limit" id="limit"/>
        </div>

        <div className='sort-by-div'>
          <label htmlFor="sort-by">sort by:</label>
          <select value={sortBy} onChange={handleFilterChange} name="sortBy" id="sort-by">
            {sortFields.map(field => {
              return (
                <option key={field}>{field}</option>
              )
            })}
          </select>
        </div>
        <div className='sort-order-div'>
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
 
export default SortAndFilter;