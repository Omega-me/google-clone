import React from 'react';
import './SearchResult.css';

const SearchResult = ({ displayLink, snippet, link, title }) => {
  return (
    <div className='searchResult'>
      <a href={link}>
        <p>{displayLink}</p>
        <h3>{title}</h3>
      </a>
      <p className='searchResult__info'>{snippet}</p>
    </div>
  );
};

export default SearchResult;
