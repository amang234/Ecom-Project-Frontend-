import React from 'react'
import Menu from './Menu'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GppGoodIcon from '@mui/icons-material/GppGood';
import boyDeveloper from './images/boy-developer.png';
import girlDeveloper from './images/girl-developer.png';

function About() {
  return (
    <>
      <Menu />
      <div className="about-main">
        <div className="about-row">

          <div className="about-content-1">
            <img src="https://cdn.shopify.com/app-store/listing_images/7f10721ab1ddef4c0e247d4335d21dbf/banner/CIiFhdH0lu8CEAE=.jpg" alt="" />
          </div>

          <div className="about-content-2">
            {/* <div className="about-head">
              <h1>We</h1>

            </div> */}
            <div className="left">

              <div className="main-hero-para2">
                <span className='main-hero-letter2' >BE </span>  <p>  st</p>
                <span className='main-hero-letter2'>F </span>   <p>  lipkart</p>
                <span className='main-hero-letter2'>A </span>   <p>  mazon</p>
                <span className='main-hero-letter2'>P </span>   <p>  roducts</p>
              </div>
            </div>
            <div className="about-points">
              <div className="points">
                <h1  > <span><LibraryAddCheckIcon style={{
                  color: "rgb(8, 22, 155)",
                  fontSize: "2.4rem",
                  padding: "0rem 1rem 0rem 0rem"
                }} /></span> We Collect products data from multiple platforms</h1>

              </div>


              <div className="points">
                <h1  > <span><DocumentScannerIcon style={{
                  color: "rgb(8, 22, 155)",
                  fontSize: "2.4rem",
                  padding: "0rem 1rem 0rem 0rem"
                }} /></span> Generate AI based summary of review for quick quality overview</h1>
              </div>

              <div className="points">
                <h1  > <span><TroubleshootIcon style={{
                  color: "rgb(8, 22, 155)",
                  fontSize: "2.4rem",
                  padding: "0rem 1rem 0rem 0rem"
                }} /></span> Analyze sentiment of reviews using AI for better understanding about the quality</h1>
              </div>

              <div className="points">
                <h1  > <span><AutoGraphIcon style={{
                  color: "rgb(8, 22, 155)",
                  fontSize: "2.4rem",
                  padding: "0rem 1rem 0rem 0rem"
                }} /></span> Use AI/ML backed ranking algorithm to prioritize best products</h1>
              </div>

              <div className="points">
                <h1  > <span><GppGoodIcon style={{
                  color: "rgb(8, 22, 155)",
                  fontSize: "2.4rem",
                  padding: "0rem 1rem 0rem 0rem"
                }} /></span> Show Best product with Best quality with optimal price</h1>
              </div>
            </div>

          </div>
        </div>


      </div>

        <div className="developer-head">
          <h1>Developed And Designed By</h1>
        </div>
      <div className="developer-main">
        <div className="developer-member-main">
          <div className="developer-member">
          <img src={boyDeveloper} alt="" srcset="" />
            <h1>Akhand Pratap Tiwari</h1>
            <p>Reg No :- 21BCE11055</p>
          </div>

          <div className="developer-member">
          <img src={boyDeveloper} alt="" srcset="" />
            <h1>Anupam Dev Burman</h1>
            <p>Reg No :- 21BCE11049</p>
          </div>

          <div className="developer-member">
          <img src={boyDeveloper} alt="" srcset="" />
            <h1>Abhay Mishra</h1>
            <p>Reg No :- 21BCE11045</p>
          </div>

          <div className="developer-member">
          <img src={boyDeveloper} alt="" srcset="" />
            <h1>Aman Grover</h1>
            <p>Reg No :- 21BCE11058</p>
          </div>

          <div className="developer-member">
          <img src={girlDeveloper} alt="" srcset="" />
            <h1>Esther</h1>
            <p>Reg No :- 21BCE10815</p>
          </div>
        </div>
      </div>

      

    </>
  )
}

export default About
