import React from 'react'
import '../css/Subpage.scss'
import { mealncook_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Mealncook = ({ content }) => {
  const num = 6;
  return (
    <div className='Subpage'>
      <div className="subImg subImg07"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li style={{ fontWeight: 700 }}><Link to="/mealncook">{mealncook_sub[0].title}</Link></li>
            <li><Link to="/mealncook/sub02">{mealncook_sub[1].title}</Link></li>
            <li><Link to="/mealncook/sub03">{mealncook_sub[2].title}</Link></li>
            <li><Link to="/mealncook/sub04">{mealncook_sub[3].title}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Mealncook;