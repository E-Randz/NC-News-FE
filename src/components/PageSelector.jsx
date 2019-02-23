import React, { Component } from 'react';

const PageSelector = ({ pageCount, changePage, page }) => {
  const pageNumbers = [];
  for (let i = pageCount + 1; i <= pageCount; i++){
    pageNumbers.push(i);
  }

  return ( 
    <ul className='Page-selector'>
      <li><button onClick={changePage} disabled={page === 1}>previous</button></li>
      {pageNumbers.map((number) => {
        return (
          <li key={number}><button onClick={changePage} disabled={page === number}>number</button></li>
        )
      })}
      <li><button onClick={changePage} disabled={page === pageCount}>next</button></li>
    </ul>
  );
}
 
export default PageSelector;