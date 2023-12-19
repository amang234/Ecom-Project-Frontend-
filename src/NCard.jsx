import React from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import fUrl from "./images/flipakrt.png";
import aUrl from "./images/amazon.png";
import Box from '@mui/material/Box';

import StarIcon from '@mui/icons-material/Star';
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
});


function NCard(val) {
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };
    const value = val.Ratings;

    const featured = (fet) => (fet == 'a') ? aUrl : fUrl;

    return (
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
                                            
                                            value={value}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize=".1rem" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{[value]}</Box>
                                    </Box>
                                    {/* <Stack style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        padding: "0rem 1rem 0rem 0rem ",

                                    }} spacing={1}>

                                        <Rating name="half-rating-read" Value={val.Ratings} precision={0.5} readOnly />


                                    </Stack> */}
                                    
                                </h1>
                            </div>

                            <h1 className="product-description">
                                {val.Description}
                            </h1>
                        </div>
                        <div className="review">
                            <h1>Reviews</h1>

                            <p className="product-reviews" >{val.Reviews.replace(/READ MORE/g," ")}</p>
                        </div>
                    </div>
                    <div className="buy-product">

                        <a href={val.Url} target="_blank" >

                            <button className="buy"    >Buy</button>
                        </a>
                        <div className="set-image">
                            <img src={featured(val.Store)} alt="" />

                        </div>
                    </div>
                    {/* <p
                className="product-reviews" >{val.Review_Extract}</p> */}

                </div>

            </div>
        </div>

    )
}
export default NCard;