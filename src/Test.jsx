// ***************************************    Import Section    ****************************************************** 
import React from 'react'
import Menu from './Menu'
import NCard from './NCard'
import Menu2 from './Menu2'
import Sad from './Sad.json'
import flipkart from './flipkart.json'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import { useEffect } from 'react';
import Loader from './Loader';
import Filter from './Filter'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import fUrl from "./images/flipakrt.png";
import aUrl from "./images/amazon.png";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';



// ************************************     React State & Main function   ************************************************************ 


function Test() {
  const run = 0;
  const location = useLocation();
  const userKeyword = location.state.name;
  const [apiData, setApiData] = useState([])
  const [rankData, setRankData] = useState([])
  const [loader, setLoader] = useState(true)
  const [priceFilter, setPriceFilter] = useState(false)
  const [brandFilter, setBrandFilter] = useState(false)
  const [filterData, setFilterData] = useState([]);
  const [brandData, setBrandData] = useState([])
  const [filterPriceOn, setFilterPriceOn] = useState(false)
  const [filterBrandOn, setBrandFilterOn] = useState(false)

// *********************************************    Use Effect     **************************************************

  useEffect(() => {
   
    // ******************** Fetch Api data and ranking function from Api  ************************************* 

    try {
      const getApiData = async () => {
        const res = await fetch(`http://localhost:5000/search/?id=${userKeyword}`);
        setApiData(await res.json())
        const res_rank = await fetch(`http://localhost:5000/ranking`);
        setRankData(await res_rank.json())
        await setLoader(false)
      }
      getApiData();

    } catch (error) {
      console.log(error);
    }


  }, [run]);


// *********************************   Function of Filter Price Low to high  ************************************

  const low = (e) => {
    setPriceFilter(true)
    setFilterPriceOn(true)
    setBrandFilter(false)
    const parsePrice = x => parseFloat(x)
    const sortedData = apiData
      .slice()
      .sort((a, b) => parsePrice(a.Price) - parsePrice(b.Price))
    setFilterData(sortedData)
  }

// *********************************   Function of Filter Price high to low  ************************************


  const high = (e) => {
    setPriceFilter(true)
    setFilterPriceOn(true)
    setBrandFilter(false)
    const parsePrice = x => parseFloat(x)
    const sortedData = apiData
      .slice()
      .sort((a, b) => parsePrice(b.Price) - parsePrice(a.Price))
    setFilterData(sortedData)
  }

// *********************************   Function of Filter to show product from flipkart  ************************************


  const fBrand = (e) => {
    setBrandFilter(true)
    setBrandFilterOn(true)
    setPriceFilter(false)

    const sortedBrand = apiData.filter((a) => {
      return a.Store === "f";
    })
    console.log(sortedBrand);
    setBrandData(sortedBrand)
  }

// *********************************   Function of Filter to show product from Amazon  ************************************

  const aBrand = (e) => {
    setBrandFilter(true)
    setBrandFilterOn(true)
    setPriceFilter(false)

    const sortedBrand = apiData.filter((a) => {
      return a.Store === "a"
    })
    console.log(sortedBrand);

    setBrandData(sortedBrand)
  }
  const clearFilter = () => {
    setFilterPriceOn(false);
    setBrandFilterOn(false)

  }

// *********************************   Function of radio button  **********************************************

  const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    
    value: PropTypes.any,
  };

// *********************************   Function to change api price to local price  ************************************


  const featured = (fet) => (fet == 'a') ? aUrl : fUrl;
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  // *********************************   Test Ranking   ************************************


  // const ranking = [3, 6, 1, 14, 7, 26, 29, 4, 5, 27, 8, 10, 12, 21, 17, 13, 0, 24, 23, 11, 22, 25, 28, 2, 9, 15, 19, 20, 16, 18]



  return (

    <>
      <div className="test-main">

        <Menu2 />

{/* *****************************************   code for filter   ***************************************************** */}

        <div className='test-background' >
          <div className="filter-main">
            <div className="filter">
              <h1 onClick={clearFilter} className='clear-filter' >Clear All Filters</h1>
              <div className="filter-1">
                <div className="price">
                  <h1>Price</h1>

                </div>
                <RadioGroup name="use-radio-group" >
                  <div className="filter-price-1">

                    <MyFormControlLabel onChange={low} value="LowToHigh" label="Low to High" control={<Radio />} />
                  </div>
                  <div className="filter-price-2">

                    <MyFormControlLabel onChange={high} value="HighToLow" label="High to Low" control={<Radio />} />
                  </div>
                </RadioGroup>
              </div>

              <div className="filter-2">
                <h1>Featured from Brand</h1>
                <RadioGroup name="use-radio-group" >
                  <div className="filter-brand-1">
                    <MyFormControlLabel onChange={fBrand} value="f" label="Flipkart" control={<Radio />} /> <span ><img className='filter-brand-image-1' src={fUrl} alt="flipkart" /></span>

                  </div>
                  <div className="filter-brand-2">

                    <MyFormControlLabel onChange={aBrand} value="a" label="Amazon" control={<Radio />} /><span><img className='filter-brand-image-2' src={aUrl} alt="amazon" /></span>
                  </div>
                </RadioGroup>
              </div>

            </div>

          </div>

{/* ***************************   Condition to Show Loading Animation  ********************************/}


          {loader ? <Loader /> : null}


          {/* {apiData ?  : null} */}


{/* ***************************   Show Company Filter  ********************************/}

          {brandFilter ? brandData.map((val)=>{
            return (
              <>
                <div className="card-main">
                  <div className="card">
                    <div className="card-content-1" >
                      <img className="card-image" src={val.Image_URL} />
                    </div>
                    <div className="card-content-2" >
                      <h1 className="product-name" >{val.Product_Name}</h1>
                      <div className="format-data">
                        <div className="left-review" >
                          <div className="left-content">
                            <h1 className="product-price" >{formatter.format(val.Price)}</h1>
                            <h1 className="product-rating">
                              <Box
                                sx={{
                                  width: 200,
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <Rating
                                  value={val.Ratings}
                                  readOnly
                                  precision={0.5}
                                  emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize=".1rem" />}
                                />
                                <Box sx={{ ml: 2 }}>{[val.Ratings]}</Box>
                              </Box>
                            </h1>
                          </div>

                          <h1 className="product-description">
                            {val.Description}
                          </h1>
                          <div className="buy-product">

                            <a href={val.Url} target="_blank" >

                              <button className="buy"    >Buy</button>
                            </a>
                            <div className="set-image">
                              <img src={featured(val.Store)} alt="" />

                            </div>
                          </div>

                        </div>
                        <div className="review">
                          <h1>Reviews</h1>

                          <p className="product-reviews" >{val.Reviews.replace(/READ MORE/g, " ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }) : null}

{/* ***************************   Price Filter  ********************************/}


          {priceFilter ? filterData.map((val)=>{
            return (
              <>
                <div className="card-main">


                  <div className="card">
                    <div className="card-content-1" >
                      <img className="card-image" src={val.Image_URL} />

                    </div>
                    <div className="card-content-2" >
                      <h1 className="product-name" >{val.Product_Name}</h1>
                      <div className="format-data">

                        <div className="left-review" >
                          <div className="left-content">

                            <h1 className="product-price" >{formatter.format(val.Price)}</h1>

                            <h1 className="product-rating">
                              <Box
                                sx={{
                                  width: 200,
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <Rating

                                  value={val.Ratings}
                                  readOnly
                                  precision={0.5}
                                  emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize=".1rem" />}
                                />
                                <Box sx={{ ml: 2 }}>{[val.Ratings]}</Box>
                              </Box>
                            

                            </h1>
                          </div>

                          <h1 className="product-description">
                            {val.Description}
                          </h1>
                          <div className="buy-product">

                            <a href={val.Url} target="_blank" >

                              <button className="buy"    >Buy</button>
                            </a>
                            <div className="set-image">
                              <img src={featured(val.Store)} alt="" />

                            </div>
                          </div>

                        </div>
                        <div className="review">
                          <h1>Reviews</h1>

                          <p className="product-reviews" >{val.Reviews.replace(/READ MORE/g, " ")}</p>
                        </div>
                      </div>



                    </div>

                  </div>
                </div>

              </>
            )
          }) : null}

{/* ***************************   Show Product  ********************************/}

          {/* {filterPriceOn ||filterBrandOn  ? null : rankData.map(NCard ) } */}
          {/* {filterBrandOn ? null : flipkart.map(NCard) } */}
          {/* {filterPriceOn || filterBrandOn ? null : rankData.map(ranking => { */}

          {filterPriceOn || filterBrandOn ? null : rankData.map(ranking => {
            var val = apiData[ranking]
            return (
              <>
                <div className="card-main">


                  <div className="card">
                    <div className="card-content-1" >
                      <img className="card-image" src={val.Image_URL} />

                    </div>
                    <div className="card-content-2" >
                      <h1 className="product-name" >{val.Product_Name}</h1>
                      <div className="format-data">

                        <div className="left-review" >
                          <div className="left-content">

                            <h1 className="product-price" >{formatter.format(val.Price)}</h1>

                            <h1 className="product-rating">
                              <Box
                                sx={{
                                  width: 200,
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <Rating

                                  value={val.Ratings}
                                  readOnly
                                  precision={0.5}
                                  emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize=".1rem" />}
                                />
                                <Box sx={{ ml: 2 }}>{[val.Ratings]}</Box>
                              </Box>
                            

                            </h1>
                          </div>

                          <h1 className="product-description">
                            {val.Description}
                          </h1>
                          <div className="buy-product">

                            <a href={val.Url} target="_blank" >

                              <button className="buy"    >Buy</button>
                            </a>
                            <div className="set-image">
                              <img src={featured(val.Store)} alt="" />

                            </div>
                          </div>

                        </div>
                        <div className="review">
                          <h1>Reviews</h1>

                          <p className="product-reviews" >{val.Reviews.replace(/READ MORE/g, " ")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
          )
          }
        </div>
      </div>
    </>


  )
}



export default Test;
