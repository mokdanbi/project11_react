import React from 'react'
import '../css/Subpage.scss'
import { community_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Community.scss'

const SNS = [
  { id: 1, title: "🔥두끼 찐-마라 페스티벌🔥" },
  { id: 2, title: "⭐월간 MD - 소스 조합을 찾아서⭐" },
  { id: 3, title: "🚨속보🚨오늘 출시한 두끼 [마라탕 무한리필]" },
  { id: 4, title: "떡모파 이벤트 8탄 - ‼두뽀 저메추 이벤트‼" },
  { id: 5, title: "🔥두끼 찐-마라🔥 NEW LINE UP" },
  { id: 6, title: "🔥두끼 찐-마라🔥 다른 곳 가지 마라 두끼도 마라 있다!" },
  { id: 7, title: "🔥두끼 찐-마라🔥 더 맛있게 먹는 공식 레시피 📝" },
  { id: 8, title: "#두끼필름 이벤트 📸 당첨자 발표" },
]

const Community02 = ({ content }) => {
  const num = 5;
  return (
    <div className='Subpage'>
      <div className="subImg subImg06_2"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li><Link to="/community">{community_sub[0].title}</Link></li>
            <li style={{ fontWeight: 700 }}><Link to="/community/sub02">{community_sub[1].title}</Link></li>
            <li><Link to="/community/sub03">{community_sub[2].title}</Link></li>
            <li><Link to="/community/sub04">{community_sub[3].title}</Link></li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <h2>SNS</h2>
        <div className="sns">
          <ul>
            {
              SNS.map(sns => {
                return (
                  <li>
                    <img src={process.env.PUBLIC_URL + "/images/sns0" + sns.id + ".jpg"} alt="" />
                    <strong>{sns.title}</strong>
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


export default Community02;