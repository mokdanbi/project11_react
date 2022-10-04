import React from 'react'
import { brand_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Brand.scss'

const Brand02 = ({ content }) => {
    return (
        <div>
            <div className='Subpage'>
                <div className="subImg subImg01_2"></div>
                <div className="navBar">
                    <div className="inner">
                        <div className="title">
                            {content[0].title}
                        </div>
                        <ul className="list">
                            <li><Link to="/brand">{brand_sub[0].title}</Link></li>
                            <li style={{ fontWeight: 700 }}><Link to="/brand/sub02">{brand_sub[1].title}</Link></li>
                            <li><Link to="/brand/sub03">{brand_sub[2].title}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='container'>
                    <h2>CEO 인사말</h2>
                    <div className="ceo">
                        <div className="img">
                            <img src={process.env.PUBLIC_URL + "/images/ceo.jpg"} alt="" />
                        </div>
                        <div className="txt">
                            <strong>안녕하세요.
                                (주)다른 두끼 떡볶이 대표 김관훈, 박도근입니다.</strong>
                            <p>두끼 떡볶이는 대한민국 대표 간식 떡볶이의 올바른 이해와 누구나 좋아하는 떡볶이의 끝없는 진화의 모습을 보여드리기 위해 만들어진 브랜드입니다.<br />
                                떡볶이 명인을 꿈꾸며 본질을 이해하기 위해 10년이 넘게 전국에 소문난 떡볶이를 찾아다니면서 수백번, 수천번 그 맛을 보고 기록하였으며,
                                해외에서도 떡볶이를 만들어 판매하는 곳은 언제나 여행의 한 일부분이기도 하였습니다.<br />
                                그렇게 많은 떡볶이의 맛을 찾아다니면서 가장 크게 느낀점은 바로 떡볶이의 진정한 맛집은 특별한 레시피에서 태어나는것이 아닌
                                어릴때부터 내가 즐기고 친구들과 함께 행복해하며 맛있게 먹었던 떡볶이의 맛이 바로 진정한 맛집이라는 것을 깨달았습니다.<br />
                                맛있게 즐길수 있는 떡볶이, 그리고 그 이상의 즐거움을 드리는 두끼가 되겠습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand02