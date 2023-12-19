import React from 'react'



import Test from './Test';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import NCard from './NCard';

function SearchBar(props) {
    const [getKeyword, setKeyword] = useState();
    
    const navigate = useNavigate();

    async function toComponentB(){
        
        await navigate('/test', { state: { id: 1, name: getKeyword } });
    }
    const showKeyword = (event) => {
        setKeyword(event.target.value);
        console.log(event.target.value);

    }
    
    return (
        <>
            {/* {console.log(apiData)} */}
            {/* {apiData.map(NCard)} */}
            {/* <Test myData={apiData} /> */}
            <div className="search">
                <input onChange={showKeyword} value={getKeyword} type="text" name="" id="" placeholder='Enter Product Name to search' />

                <button onClick={() => { toComponentB(); }} className="search-button"  >Search</button>
                {/* <Link  >

        </Link> */}

            </div>
        </>
    )
}

export default SearchBar;
