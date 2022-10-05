import React from 'react'
import '../css/Subpage.scss'
import { menu_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Menu.scss'

const Menu03 = ({ content }) => {
    const num = 1;
    return (
        <div>
            <div className='Subpage'>
                <div className="subImg subImg02_3"></div>
                <div className="navBar">
                    <div className="inner">
                        <div className="title">
                            {content[num].title}
                        </div>
                        <ul className="list">
                            <li><Link to="/menu">{menu_sub[0].title}</Link></li>
                            <li><Link to="/menu/sub02">{menu_sub[1].title}</Link></li>
                            <li style={{ fontWeight: 700 }}><Link to="/menu/sub03">{menu_sub[2].title}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container'>
                <h2>GUIDE</h2>
                <div className="guide">
                    <div className="box">
                        <h3>이용안내</h3>
                        <p>매장 이용은 1시간 30분입니다.</p>
                    </div>
                    <div className="box">
                        <h3>매장 이용금액</h3>
                        <ul>
                            <li>
                                <strong>일반</strong>
                                <p>9,900원</p>
                            </li>
                            <li>
                                <strong>학생</strong>
                                <p>8,900원</p>
                            </li>
                            <li>
                                <strong>소인</strong>
                                <p>5,900원</p>
                            </li>
                            <li>매장상황에 따라 가격이 상이할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>환경 부담금</h3>
                        <p>식사 후 음식을 어묵그릇 이상<br /> 남기시면 환경부담금 2,000원이<br /> 발생하게 됩니다.</p>
                    </div>
                    <div className="box">
                        <h3>메뉴 / 음료 / 디저트</h3>
                        <p>매장에 있는 음식은 무제한으로 이용이 가능합니다.
                            음료와 디저트 또한 무한리필로 이용 가능하며, 매장마다 디스펜서가 상이할 수 있습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Menu03