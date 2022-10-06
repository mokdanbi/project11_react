import React from 'react'
import '../css/Subpage.scss'
import { notice_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Notice03 = ({ content }) => {
  const num = 4;
  return (
    <div className='Subpage'>
      <div className="subImg subImg05_3"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li><Link to="/notice">{notice_sub[0].title}</Link></li>
            <li><Link to="/notice/sub02">{notice_sub[1].title}</Link></li>
            <li style={{ fontWeight: 700 }}><Link to="/notice/sub03">{notice_sub[2].title}</Link></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h2>청년희망 창업지원</h2>
        <div className="grant">
          <img src={process.env.PUBLIC_URL + "/images/grant.jpg"} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Notice03