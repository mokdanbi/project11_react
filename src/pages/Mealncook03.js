import React from 'react'
import '../css/Subpage.scss'
import { mealncook_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Mealncook03 = ({ content }) => {
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
            <li style={{ fontWeight: 700 }}><Link to="/mealncook/sub03">{mealncook_sub[2].title}</Link></li>
            <li><Link to="/mealncook/sub04">{mealncook_sub[3].title}</Link></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h2>밀앤쿡의 냉장제품</h2>
        <div className="nangzang">
          <img src={process.env.PUBLIC_URL + "/images/kit1.png"} alt="" />
          <div className="txt">
          <span>이마트 독점 판매!</span>
          <strong>어메이징 두끼 매콤달달 떡볶이</strong>
          <p>즉석밥이 포함되어 두배로 풍성한 매콤달달 떡볶이</p>
          <Link to="/mealncook/sub03">구매하기</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mealncook03;