import React from 'react'
import '../css/Subpage.scss'
import { community_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Community.scss';
import { GoBook, GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";


const Community04 = ({ content }) => {
  const num = 5;
  return (
    <div className='Subpage'>
      <div className="subImg subImg06_4"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li><Link to="/community">{community_sub[0].title}</Link></li>
            <li><Link to="/community/sub02">{community_sub[1].title}</Link></li>
            <li style={{ fontWeight: 700 }}><Link to="/community/sub03">{community_sub[2].title}</Link></li>
            <li><Link to="/community/sub04">{community_sub[3].title}</Link></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h2>CUSTOMER SERVICE</h2>
        <div className="customer">
          <div className="box">
            <GoDeviceMobile className='icon' />
            <p>전화: 1670 - 7719</p>
            09:00 ~ 18:00(주말·공휴일 휴무)
          </div>
          <div className="box">
            <GoDeviceDesktop className='icon' />
            <p>인터넷 : https://dookki.co.kr</p>
            통합시스템에 일괄 접수
          </div>
          <div className="box">
            <GoBook className='icon' />
            <p>공정거래위원회 고시 소비자 분쟁해결</p>
            기준에 의거하여 공정하게 처리
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community04;