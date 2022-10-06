import React from 'react'
import '../css/Subpage.scss'
import { notice_sub } from '../component/NavData';
import { Link } from 'react-router-dom';


const EVENT = [
  { id: 1, title: "[EVENT] 두뽀의 저녁을 추천해주세요!", event: "지난이벤트" },
  { id: 2, title: "[발표] 고객만족도 설문조사 이벤트 8월 당첨자 발표", event: "상시이벤트" },
  { id: 3, title: "[발표] 두끼필름 이벤트 당첨자 발표", event: "지난이벤트" },
  { id: 4, title: "[EVENT] 두끼필름 - 두끼포즈로 네컷사진 찍으면 나만의 두끼쿠폰 완성!", event: "지난이벤트" },
  { id: 5, title: "[EVENT] 두마와 두뽀의 동작을 맞혀주세요!", event: "지난이벤트" },
  { id: 6, title: "[발표] 이냉치열 이벤트 당첨자 발표", event: "지난이벤트" },
  { id: 7, title: "[발표] 고객만족도 설문조사 이벤트 7월 당첨자 발표", event: "상시이벤트" },
  { id: 8, title: "[EVENT] 여름을 이겨내는 방법은?", event: "지난이벤트" },
]


const Notice02 = ({ content }) => {
  const num = 4;
  return (
    <div className='Subpage'>
      <div className="subImg subImg05_2"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li><Link to="/notice">{notice_sub[0].title}</Link></li>
            <li style={{ fontWeight: 700 }}><Link to="/notice/sub02">{notice_sub[1].title}</Link></li>
            <li><Link to="/notice/sub03">{notice_sub[2].title}</Link></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h2>EVENT</h2>
        <div className="event">
          <ul>
            {
              EVENT.map(ent => {
                return (
                  <li>
                    <b>{ent.event}</b>
                    <img src={process.env.PUBLIC_URL + "/images/event0" + ent.id + ".jpg"} alt="" />
                    <strong>{ent.title}</strong>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notice02