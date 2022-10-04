import React from 'react'
import { brand_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Brand.scss'

const Brand02 = ({ content }) => {
    return (
        <div>
            <div className='Subpage'>
                <div className="subImg subImg01_3"></div>
                <div className="navBar">
                    <div className="inner">
                        <div className="title">
                            {content[0].title}
                        </div>
                        <ul className="list">
                            <li><Link to="/brand">{brand_sub[0].title}</Link></li>
                            <li><Link to="/brand/sub02">{brand_sub[1].title}</Link></li>
                            <li style={{ fontWeight: 700 }}><Link to="/brand/sub03">{brand_sub[2].title}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='container'>
                    <h2>HISTORY</h2>
                    <div className="year">
                        2022
                    </div>
                    <div className="history">
                        <div className="month">
                            09
                        </div>
                        <ul>
                            <li>베트남 빈컴 끼엔짱점 오픈</li>
                            <li>필리핀 메가몰점 오픈</li>
                        </ul>
                    </div>
                    <div className="history">
                        <div className="month">
                            08
                        </div>
                        <ul>
                            <li>부안점 오픈</li>
                            <li>오산대역점 오픈</li>
                        </ul>
                    </div>
                    <div className="history">
                        <div className="month">
                            07
                        </div>
                        <ul>
                            <li>2022 매일경제 100대 프랜차이즈 선정</li>
                            <li>베트남 박닝 빈컴점 오픈</li>
                            <li>베트남 냐트량 롯데 마트점 오픈</li>
                            <li>베트남 6군 메가마켓점 오픈</li>
                            <li>태국 프롬나드점 오픈</li>
                        </ul>
                    </div>
                    <div className="history lasthistory">
                        <div className="month">
                            06
                        </div>
                        <ul>
                            <li>두끼 7주년 화끈한 프로모션 Part.1 - 추억의 레트로 뽑기 진행</li>
                            <li>베트남 7군 롯데마트점 오픈</li>
                            <li>베트남 미터점 오픈</li>
                            <li>베트남 박리우점 오픈</li>
                            <li>말레이시아 Setia City Mall점 오픈</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand02