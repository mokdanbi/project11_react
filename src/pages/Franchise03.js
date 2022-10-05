import React from 'react';
import '../css/Subpage.scss';
import { franchise_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Franchise.scss';

const Franchise03 = ({ content }) => {
    const num = 3;
    return (
        <div className='Subpage'>
            <div className="subImg subImg04_3"></div>
            <div className="navBar">
                <div className="inner">
                    <div className="title">
                        {content[num].title}
                    </div>
                    <ul className="list">
                        <li><Link to="/franchise">{franchise_sub[0].title}</Link></li>
                        <li><Link to="/franchise/sub02">{franchise_sub[1].title}</Link></li>
                        <li style={{ fontWeight: 700 }}><Link to="/franchise/sub03">{franchise_sub[2].title}</Link></li>
                    </ul>
                </div>
            </div>
            <div className='container'>
                <h2>사업설명회</h2>
                <div className="fran">
                    <div className='mail'>회원가입 없이 작성 가능하며, 24시간 이내로 본사영업팀이 연락 드리겠습니다.<br />
                        전화로 문의 주시면 더 간편합니다! (문의 번호 1670-7719)</div>
                </div>
            </div>
        </div>
    )
}

export default Franchise03;