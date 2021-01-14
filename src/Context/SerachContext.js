import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const SearchContext = createContext();

export const SearchProvider = (props) => {
    const [input, setInput] = useState(null)
    const [data, setData] = useState([]);

    const url = `https://customsearch.googleapis.com/customsearch/v1?c2coff=1&cx=${process.env.REACT_APP_CX}&q=${input}&key=${process.env.REACT_APP_API_KEY}`




    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data.items)
                setData(response.data)
            })
    }, [url])




    return (
        <SearchContext.Provider value={{ searchInput: [input, setInput], searchData: [data, setData] }}>
            {props.children}
        </SearchContext.Provider>
    );
}