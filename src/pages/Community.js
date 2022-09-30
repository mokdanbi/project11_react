import React from 'react'
import '../css/Subpage.scss'
import { community_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Community = ({ content }) => {
  const num = 5;
  return (
    <div className='Subpage'>
      <div className="subImg subImg06"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li style={{ fontWeight: 700 }}><Link to="/community">{community_sub[0].title}</Link></li>
            <li><Link to="/community/sub02">{community_sub[1].title}</Link></li>
            <li><Link to="/community/sub03">{community_sub[2].title}</Link></li>
            <li><Link to="/community/sub04">{community_sub[3].title}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Community