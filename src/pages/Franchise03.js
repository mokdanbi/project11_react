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
                <div className="form">
                    <div className='ftit'>상담자 정보</div>
                    <div><p>제목</p><input type="text" /></div>
                    <div><p>이름</p><input type="text" /></div>
                    <div><p>연락처</p><input type="text" /></div>
                    <div><p>점포유무</p>
                        <label for="yes">있음</label>
                        <input id="yes" type="radio" value="있음" name="yn" />&nbsp;
                        <label for="no">없음</label>
                        <input id="no" type="radio" checked value="없음" name="yn" />
                    </div>
                    <div><p>두끼매장방문</p>
                        <label for="yes">있음</label>
                        <input id="yes" type="radio" value="있음" name="yn" />&nbsp;
                        <label for="no">없음</label>
                        <input id="no" type="radio" checked value="없음" name="yn" />
                    </div>
                    <div><p>외식업 경험</p>
                        <label for="yes">있음</label>
                        <input id="yes" type="radio" value="있음" name="yn" />&nbsp;
                        <label for="no">없음</label>
                        <input id="no" type="radio" checked value="없음" name="yn" />
                    </div>
                    <div><p>신청인원</p><input type="text" /></div>
                    <div className='ftit'>창업 희망 정보</div>
                    <div><p>희망지역</p><input type="text" /></div>
                    <div><p>문의내용</p><textarea name="mb_msg" rows="5" cols="24"></textarea> </div>
                </div>
            </div>
        </div>
    )
}

export default Franchise03;