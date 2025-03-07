import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer>
      <br />
      <div className='about'>
      <h4>InsightStream</h4>
      <p>Elevate your news experience with InsightStream - where every headline opens the door to new knowledge and understanding!</p>
      </div>
        <div className='footer'>
            <ul>
              <li onClick={()=> navigate("/category/general")} >General</li>
              <li onClick={()=> navigate("/category/Technology")} >Technology</li>
              <li onClick={()=> navigate("/category/Science")} >Science</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/category/Lifestyle")} >Lifestyle</li>
              <li onClick={()=> navigate("/category/Health")} >Health</li>
              <li onClick={()=> navigate("/category/Fitness")} >Fitness</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/category/Business")} >Business</li>
              <li onClick={()=> navigate("/category/Stock Markets")} >Stock Markets</li>
              <li onClick={()=> navigate("/category/Exchanges")} >Exchanges</li>
            </ul>
            <ul>
              <li onClick={()=> navigate("/category/Geo-Politics")} >Geo-Politics</li>
              <li onClick={()=> navigate("/category/Wars")} >Wars</li>
              <li onClick={()=> navigate("/category/Current-Affairs")} >Current Affairs</li>
            </ul>
        </div>
        <hr />
        <p>InsightStream - &copy; 2025 - All rights reserved</p>
    </footer>
  )
}

export default Footer