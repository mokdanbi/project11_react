import React from 'react'
import '../css/Mealandcook.scss'

const Mealncook01 = () => {
  const num = 6;
  return (
    <div className='container'>
      <h2>Meal &amp; Cook</h2>
      <div className="mnc">
        <div className="img">
          <img src={process.env.PUBLIC_URL + "/images/mnc01.png"} alt="" />
        </div>
        <div className="txt">
          <img src={process.env.PUBLIC_URL + "/images/mnc_logo.png"} alt="" />
          <strong>두끼 밀앤쿡은<br />
          소비자가 인정한 브랜드, 두끼의 가정간편식 브랜드입니다.<br />
          어디서든 간편하게 조리해 드실 수 있는<br/>
          다양한 HMR 제품을 만나보세요.</strong>
          <p>온·오프라인으로 냉동제품 및 냉장제품 판매중이며<br/>
          뜨거운 인기에 힘입어 다양한 제품군을 선보일 예정입니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Mealncook01;