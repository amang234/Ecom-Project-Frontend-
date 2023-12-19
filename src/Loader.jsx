import React from 'react'
import loader from './images/loading-animation.mp4'
function Loader() {
    return (
        <>
        <div className="loader">

            {/* <video autoplay muted className='loader' src={loader}></video> */}
            <video  autoPlay muted>
            <source src={loader} type="video/mp4" />
            </video>
        </div>


        </>
    )
}

export default Loader
