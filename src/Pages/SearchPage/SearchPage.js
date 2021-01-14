import React from 'react';
import './SearchPage.css';
import Header from '../../Components/Header/Header';
import SearchResults from '../../Components/Search/SearchResults/SearchResults';

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <Header />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
