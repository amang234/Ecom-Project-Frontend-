import React from 'react'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import fUrl from "./images/flipakrt.png";
import aUrl from "./images/amazon.png";
import { useState } from 'react'
function Filter() {
  const [ priceFilter, setPriceFilter] =useState()
  const [ brandFilter, setBrandFilter] =useState()
  const studios = [{"name":"Whole Yoga","price":"$17.00"},{"name":"Rino Yoga Social","price":"Suggested Donation"},{"name":"Samadhi Yoga","price":"$20.00"},{"name":"Corepower Yoga","price":"$25.00"},{"name":"The River Yoga","price":"$20.00"},{"name":"Endorphin Yoga","price":"$10.00"},{"name":"Kindness Yoga","price":"$20.00"},{"name":"Yoga High","price":"$15.00"},{"name":"Freyja Project","price":"$22.00"},{"name":"Kula Yoga","price":"$17.00"}];

  const low = (e) =>{
    setPriceFilter(e.target.value)
    alert('Low');
    const parsePrice = x => parseFloat(x.replace(/^\$/, '')) || 0
const sortedStudios = studios
  .slice()
  .sort((a, b) => parsePrice(a.price) - parsePrice(b.price))

console.log(sortedStudios)
  }
  const high = (e) =>{
    setPriceFilter(e.target.value)
    alert('High');
  }



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
        /**
         * The value of the component.
         */
        value: PropTypes.any,
      };
      
    return (
        <>
            <div className="filter-main">
                <div className="filter">
                    <div className="filter-1">
                    <div className="price">
                    <h1>Price</h1>
{console.log(priceFilter)}
                    </div>
                    <RadioGroup name="use-radio-group" >
                    <div className="filter-price-1">

                            <MyFormControlLabel onChange={low}  value="LowToHigh" label="Low to High" control={<Radio />} />
                    </div>
                    <div className="filter-price-2">

                            <MyFormControlLabel onChange={high}  value="HighToLow" label="High to Low" control={<Radio />} />
                    </div>
                        </RadioGroup>
                    </div>

                    <div className="filter-2">
                    <h1>Featured from Brand</h1>
                    <RadioGroup name="use-radio-group" >
                    <div className="filter-brand-1">
                            <MyFormControlLabel value="third" label="Flipkart" control={<Radio />} /> <span ><img className='filter-brand-image-1' src={fUrl} alt="" srcset="" /></span>

                    </div>
                    <div className="filter-brand-2">

                            <MyFormControlLabel value="fourth" label="Amazon" control={<Radio />} /><span><img className='filter-brand-image-2' src={aUrl} alt="" srcset="" /></span>
                    </div>
                        </RadioGroup>
                    </div>
                
                </div>

            </div>
        </>
    )
}

export default Filter
