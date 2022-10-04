import React from 'react'
import '../css/Subpage.scss'
import { menu_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Menu.scss'

const Menu02 = ({ content }) => {
    const num = 1;
    return (
        <div>
            <div className='Subpage'>
                <div className="subImg subImg02_2"></div>
                <div className="navBar">
                    <div className="inner">
                        <div className="title">
                            {content[num].title}
                        </div>
                        <ul className="list">
                            <li><Link to="/menu">{menu_sub[0].title}</Link></li>
                            <li style={{ fontWeight: 700 }}><Link to="/menu/sub02">{menu_sub[1].title}</Link></li>
                            <li><Link to="/menu/sub03">{menu_sub[2].title}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2>DELIVERY</h2>
                <div className="del">
                    <div className="selfbar">
                        <div className="img">
                            <img src={process.env.PUBLIC_URL + "/images/delivery01.png"} alt="" />
                        </div>
                        <div className="tit">
                            <h3>가성비를 가득 담아 <span>취향껏 골라먹는 두끼</span></h3>
                            <p>두끼 딜리버리를 이용해 이제 집에서도 간편하게 두끼를 즐기세요</p>
                        </div>
                    </div>
                    <div className="selfbar">
                        <div className="img">
                            <img src={process.env.PUBLIC_URL + "/images/delivery02.png"} alt="" />
                        </div>
                        <div className="tit">
                            <h3>오직 배달로만 즐길 수 있는 <span>비조리 메뉴</span></h3>
                            <p>두끼 딜리버리를 이용해 취향에 맞게 비조리 떡볶이 메뉴를 즐겨보세요.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Menu02