import React from 'react'
import '../css/Menu.scss'

const Menu01 = () => {
    return (
        <div className='container'>
            <h2>SELF BAR</h2>
            <div className="selfbar">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + "/images/selfbar.png"} alt="" />
                </div>
                <div className="tit">
                    <h3>내가 원하는 <span>토핑을 내 맘대로!</span></h3>
                    <p>두끼에서는 다양한 종류의 떡과 소스, 야채 등을 자신의 스타일에 맞게 드실 수 있습니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Menu01