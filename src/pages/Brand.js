import React from 'react'
import '../css/Subpage.scss'
import { brand_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import Brand01 from './Brand01';

const Brand = ({ content }) => {
  const num = 0;
  return (
    <div className='Subpage'>
      <div className="subImg subImg01"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li style={{ fontWeight: 700 }}><Link to="/brand">{brand_sub[0].title}</Link></li>
            <li><Link to="/brand/sub02">{brand_sub[1].title}</Link></li>
            <li><Link to="/brand/sub03">{brand_sub[2].title}</Link></li>
          </ul>
        </div>
      </div>
      <Brand01 />
    </div>
  )
}

export default Brand