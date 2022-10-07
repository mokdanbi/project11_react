import React from 'react'
import '../css/Subpage.scss'
import { mealncook_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Mealncook02 = ({ content }) => {
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
            <li style={{ fontWeight: 700 }}><Link to="/mealncook/sub02">{mealncook_sub[1].title}</Link></li>
            <li><Link to="/mealncook/sub03">{mealncook_sub[2].title}</Link></li>
            <li><Link to="/mealncook/sub04">{mealncook_sub[3].title}</Link></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h2>밀앤쿡의 냉동제품</h2>
        <div className="nangdong">
          <div className="box">
            <img src={process.env.PUBLIC_URL + "/images/product1.png"} alt="" />
            <div className="txt">
              <strong>달달쫄깃 쫄볶이</strong>
              <p>떡볶이와 쫄면의 쫄깃한 만남!</p>
              <span>
                1팩 기준 2인분<br />
                · 떡 200gㅣ소스 140gㅣ쫄면 150g
              </span>
              <Link to="/mealncook/sub02">구매하기</Link>
            </div>
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + "/images/product2.png"} alt="" />
            <div className="txt">
              <strong>매콤달콤 즉석떡볶이</strong>
              <p>매콤한 소스와 쫄깃한 떡, 탱탱한 어묵까지!</p>
              <span>
                1팩 기준 2-3인분<br />
                · 떡 320gㅣ소스 140gㅣ어묵 100g
              </span>
              <Link to="/mealncook/sub02">구매하기</Link>
            </div>
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + "/images/product3.png"} alt="" />
            <div className="txt">
              <strong>매콤고소 로제떡볶이</strong>
              <p>스파게티 면과 떡볶이의 절묘한 만남!</p>
              <span>
                1팩 기준 2인분<br />
                · 떡 240gㅣ스파게티면 150g | 소스 60g
              </span>
              <Link to="/mealncook/sub02">구매하기</Link>
            </div>
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + "/images/product6.png"} alt="" />
            <div className="txt">
              <strong>떡볶이를 품은 닭</strong>
              <p>부드러운 닭갈비와 쫄깃한 떡의 절묘한 만남!</p>
              <span>
                1팩 기준 2-3인분<br />
                · 양념육 500g | 밀떡 240g | 두끼매콤분말 30g
              </span>
              <Link to="/mealncook/sub02">구매하기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mealncook02;