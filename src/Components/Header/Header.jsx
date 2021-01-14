import React, { useContext } from 'react';
import './Header.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, IconButton } from '@material-ui/core';
import Search from '../Search/Search';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../Context/SerachContext';

const Header = ({ onHomePage }) => {
  const history = useHistory();
  const { searchInput } = useContext(SearchContext);
  const [input, setInput] = searchInput;
  return (
    <>
      {onHomePage ? (
        <divc className='header'>
          <div className='header__placeholder' />
          <div className='header__info'>
            <a href=''>Gmail</a>
            <a href=''>Images</a>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <Avatar className='avatar' />
          </div>
        </divc>
      ) : (
        <divc className='headerSearch'>
          <div className='headerSearch__placeholder'>
            <img
              onClick={() => {
                history.push('/');
                setInput(null);
              }}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png'
              alt='logo'
            />

            <Search />
          </div>
          <div className='headerSearch__info'>
            <IconButton>
              <AppsIcon />
            </IconButton>
            <Avatar className='avatar' />
          </div>
        </divc>
      )}
    </>
  );
};

export default Header;
