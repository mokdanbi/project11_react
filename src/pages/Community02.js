import React from 'react'
import '../css/Subpage.scss'
import { community_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import '../css/Community.scss'

const SNS = [
  { id: 1, title: "π₯λλΌ μ°-λ§λΌ νμ€ν°λ²π₯" },
  { id: 2, title: "β­μκ° MD - μμ€ μ‘°ν©μ μ°Ύμμβ­" },
  { id: 3, title: "π¨μλ³΄π¨μ€λ μΆμν λλΌ [λ§λΌν λ¬΄νλ¦¬ν]" },
  { id: 4, title: "λ‘λͺ¨ν μ΄λ²€νΈ 8νβΌ λλ½ μ λ©μΆ μ΄λ²€νΈβΌ" },
  { id: 5, title: "π₯λλΌ μ°-λ§λΌπ₯ NEW LINE UP" },
  { id: 6, title: "π₯λλΌ μ°-λ§λΌπ₯ λ€λ₯Έ κ³³ κ°μ§ λ§λΌ λλΌλ λ§λΌ μλ€!" },
  { id: 7, title: "π₯λλΌ μ°-λ§λΌπ₯ λ λ§μκ² λ¨Ήλ κ³΅μ λ μνΌ π" },
  { id: 8, title: "#λλΌνλ¦ μ΄λ²€νΈ πΈ λΉμ²¨μ λ°ν" },
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