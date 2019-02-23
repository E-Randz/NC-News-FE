import React from 'react';
import PropTypes from 'prop-types';

const PageSelector = ({ pageCount, changePage, page }) => {
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++){
    pageNumbers.push(i);
  }

  return ( 
    <ul key='Page-selector' className='Page-selector'>
      <li><button onClick={(e) => changePage(e, -1)} disabled={page === 1}>{'<'}</button></li>
      {pageNumbers.map((number) => {
        return (
          <li key={number}><button onClick={changePage} disabled={page === number}>{number}</button></li>
        )
      })}
      <li><button onClick={(e) => changePage(e, 1)} disabled={page === pageCount}>{'>'}</button></li>
    </ul>
  );
}

PageSelector.propTypes = {
  pageCount: PropTypes.number,
  changePage: PropTypes.func,
  page: PropTypes.number,
}
 
export default PageSelector;