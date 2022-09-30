import React from 'react'
import '../css/Subpage.scss'
import { franchise_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import Franchise01 from './Franchise01';

const Franchise = ({ content }) => {
  const num = 3;
  return (
    <div className='Subpage'>
      <div className="subImg subImg04"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li style={{ fontWeight: 700 }}><Link to="/franchise">{franchise_sub[0].title}</Link></li>
            <li><Link to="/franchise/sub02">{franchise_sub[1].title}</Link></li>
            <li><Link to="/franchise/sub03">{franchise_sub[2].title}</Link></li>
          </ul>
        </div>
      </div>
      <Franchise01 />
    </div>
  )
}

export default Franchise