import React from 'react'
import './HomePage.css'
import Header from '../../Components/Header/Header'
import Search from '../../Components/Search/Search'

const HomePage = () => {
    return (
        <div className='homePage'>
            <Header onHomePage />
            <Search onHomePage />
        </div>
    )
}

export default HomePage
