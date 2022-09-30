import React from 'react'
import '../css/Subpage.scss'
import { notice_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Notice = ({ content }) => {
  const num = 4;
  return (
    <div className='Subpage'>
      <div className="subImg subImg05"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li style={{ fontWeight: 700 }}><Link to="/notice">{notice_sub[0].title}</Link></li>
            <li><Link to="/notice/sub02">{notice_sub[1].title}</Link></li>
            <li><Link to="/notice/sub03">{notice_sub[2].title}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notice