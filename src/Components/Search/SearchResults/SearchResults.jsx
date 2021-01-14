import React, { useState, useContext } from 'react';
import './SearchResults.css';
import SearchResult from './SearchResult/SearchResult';
import Api from '../../../Libs/testApi';
import { SearchContext } from '../../../Context/SerachContext';

const SearchResults = () => {
  // const [data, setData] = useState(Api);
  const { searchData } = useContext(SearchContext);
  const [data, setData] = searchData;
  //console.log(data);
  return (
    <div className='searchResults'>
      <div className='searchResults__container'>
        <p className='searchResults__allResults'>
          About {data?.searchInformation.formattedTotalResults} results (
          {data?.searchInformation.formattedSearchTime} seconds)
        </p>

        {data.items.map(results => (
          <SearchResult
            key={results?.cacheId}
            displayLink={results?.displayLink}
            snippet={results?.snippet}
            link={results?.link}
            title={results?.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
