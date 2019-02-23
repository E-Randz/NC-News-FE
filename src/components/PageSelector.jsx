import React from 'react';

const PageSelector = ({ pageCount, changePage, page }) => {
  console.log(page);
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++){
    pageNumbers.push(i);
  }

  return ( 
    <ul key='Page-selector' className='Page-selector'>
      <li><button onClick={(e) => changePage(e, -1)} disabled={page === 1}>previous</button></li>
      {pageNumbers.map((number) => {
        console.log(number,page, page===number)
        return (
          <li key={number}><button onClick={changePage} disabled={page === number}>{number}</button></li>
        )
      })}
      <li><button onClick={(e) => changePage(e, 1)} disabled={page === pageCount}>next</button></li>
    </ul>
  );
}
 
export default PageSelector;