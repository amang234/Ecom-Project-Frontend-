// import React from 'react'
// import Menu from './Menu'
// import NCard from './NCard'
// import { useState } from 'react'
// function Search() {
//   const [getKeyword,setKeyword] = useState();
//     const [apiData , setApiData] = useState([])

//     const showKeyword = (event) =>{
//         setKeyword(event.target.value);
//         console.log(event.target.value);

//     }
//     const getApiData = async () =>{
      
//         const res = await fetch(`http://localhost:5000/search/?id=${getKeyword}`);
//         setApiData(await res.json());
//         console.log(apiData);
        
//       }
    
  
//   return (
//     <>
//       <Menu/>
//         <div className="search-main">
//             <input  onChange={showKeyword} value={getKeyword} type="text" name="" id="" placeholder='Enter Product Name to search' />
//             <button onClick={getApiData} >Search</button>
//         </div>

//         <div className="cards">
//           {apiData.map(NCard)}
//         </div>
//         <div style={{
//           height:"100rem"
//         }}>

//         </div>
//     </>
//   )
// }

// export default Search;
