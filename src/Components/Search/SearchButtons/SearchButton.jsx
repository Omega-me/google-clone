import React from 'react';
import './SearchButtons.css';

const SearchButton = ({ Icon, text, active }) => {
  return (
    <>
      {!active ? (
        <div className='searchButtons'>
          {Icon}
          <p>{text}</p>
        </div>
      ) : (
        <div className='searchButtons--active'>
          {Icon}
          <p>{text}</p>
        </div>
      )}
    </>
  );
};

export default SearchButton;
