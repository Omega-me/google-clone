import React, { useState, useContext } from 'react';
import './Search.css';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { SearchContext } from '../../Context/SerachContext';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';
import SearchButton from './SearchButtons/SearchButton';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import MovieIcon from '@material-ui/icons/Movie';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyle = makeStyles({
  searchIcon: {
    color: 'grey',
    fontSize: '1.25rem',
    margin: '5px',
  },
  micIcon: {
    color: '#0099ff',
    margin: '5px',
  },
});

const Search = ({ onHomePage }) => {
  const classes = useStyle();
  const history = useHistory();
  // const [input, setInput] = useState('');
  const { searchInput, searchData } = useContext(SearchContext);
  const [input, setInput] = searchInput;
  // const [data, setData] = searchData;

  const handleSearch = e => {
    e.preventDefault();
    if (input) {
      history.push('/search');
    }
  };

  return (
    <>
      {onHomePage ? (
        <div className='searchHome'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
            alt='logo'
          />
          <div onSubmit={handleSearch} className='searchHome__input'>
            <SearchIcon className={classes.searchIcon} />
            <form>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                type='text'
              />
            </form>
            {input && (
              <button
                onClick={() => setInput('')}
                className='searchHome__closeButton'>
                <CloseIcon />
              </button>
            )}
            <MicIcon className={classes.micIcon} />
          </div>
          <div className='searchHome__buttons'>
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
        </div>
      ) : (
        <div className='search'>
          <div className='search__container'>
            <input
              className='searchHome__inputField'
              value={input}
              onChange={e => setInput(e.target.value)}
              type='text'
            />
            {input && (
              <button
                onClick={() => setInput('')}
                className='searchHome__closeButton'>
                <CloseIcon />
              </button>
            )}
            <IconButton>
              <SearchIcon className={classes.searchIcon} />
            </IconButton>
            <MicIcon className={classes.micIcon} />
          </div>

          <div className='search__buttons'>
            <div className='search__buttonsLeft'>
              <SearchButton
                active
                Icon={
                  <SearchIcon className='search__icon search__icon--active' />
                }
                text='All'
              />
              <SearchButton
                Icon={<LineWeightIcon className='search__icon' />}
                text='News'
              />
              <SearchButton
                Icon={<MovieIcon className='search__icon' />}
                text='Video'
              />
              <SearchButton
                Icon={<ImageSearchIcon className='search__icon' />}
                text='Images'
              />
              <SearchButton
                Icon={<MoreVertIcon className='search__icon' />}
                text='More'
              />
            </div>
            <div className='search__buttonsRight'>
              <SearchButton text='Settings' />
              <SearchButton text='Tools' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
