import React from 'react'
import '../css/Subpage.scss'
import { mealncook_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Mealncook04 = ({ content }) => {
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
            <li><Link to="/mealncook">{mealncook_sub[0].title}</Link></li>
            <li><Link to="/mealncook/sub02">{mealncook_sub[1].title}</Link></li>
            <li><Link to="/mealncook/sub03">{mealncook_sub[2].title}</Link></li>
            <li style={{ fontWeight: 700 }}><Link to="/mealncook/sub04">{mealncook_sub[3].title}</Link></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h2>밀앤쿡의 상온제품</h2>
        <div className="nangdong">
          <div className="box">
            <img src={process.env.PUBLIC_URL + "/images/instant1.png"} alt="" />
            <div className="txt">
              <strong>매콤로제 롱볶이</strong>
              <p>매콤한 로제소스와 쫄깃한 면의 만남</p>
              <span>
                · 중량 212g
              </span>
              <Link to="/mealncook/sub04">구매하기</Link>
            </div>
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + "/images/instant2.png"} alt="" />
            <div className="txt">
              <strong>떡볶이 스낵 (매운마늘맛)</strong>
              <p>두끼떡볶이의 매운 마늘맛 소스로 맛을 낸 떡볶이 스낵</p>
              <span>
                · 중량 110g
              </span>
              <Link to="/mealncook/sub04">구매하기</Link>
            </div>
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + "/images/instant3.png"} alt="" />
            <div className="txt">
              <strong>로제 떡볶이맛 스낵</strong>
              <p>두끼 비법 떡볶이 소스로 맛을 낸 매콤달콤 로제맛 스낵</p>
              <span>
                · 중량 210g
              </span>
              <Link to="/mealncook/sub04">구매하기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mealncook04;