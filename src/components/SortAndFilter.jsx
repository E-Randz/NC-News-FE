import React, {Component} from 'react';
import Button from './Button';

class SortAndFilter extends Component  {
    state= {
      limit: null,
      sortBy: null,
      sortOrder: null,
    }
    render() {
    const { sortFields, handleFilterSubmit } = this.props;
    const { sortBy, limit, sortOrder } = this.state;
    return ( 
      <div className='Sort-Filter'>
      <h3>Sort and Filter</h3>
      <form onSubmit={(e) => handleFilterSubmit(e, sortBy, limit, sortOrder)}>
        <div className='limitdiv'>
          <label htmlFor="limit">limit:</label>
          <input onChange={this.handleFilterChange} type="number" name="limit" id="limit"/>
        </div>

        <div className='sort-by-div'>
          <label htmlFor="sort-by">sort by:</label>
          <select onChange={this.handleFilterChange} name="sortBy" id="sort-by">
            {sortFields.map(field => {
              return (
                <option key={field} value={field}>{field}</option>
              )
            })}
          </select>
        </div>
        <div className='sort-order-div'>
          <label htmlFor="sort-order">sort order:</label>
          <select onChange={this.handleFilterChange} name="sortOrder" id="sort-order">
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
        <Button buttonPurpose={'Apply Changes'}/>
      </form>
    </div>
    );
  }
  handleFilterChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }
}
 
export default SortAndFilter;