import React from 'react'
import '../css/Notice.scss'

const NOTICE = [
  { id: 1, title: "알레르기 유발식품 안내", content: "두끼 알레르기 유발식품 성분표 업데이트", date: "2022-09-19" },
  { id: 2, title: "두끼 찐-마라 페스티벌: 다른 곳 가지 마라 두끼도 마라 있다!", content: "9월 19일부터 10월 31일까지 두끼 찐-마라를 만나 보세요!", date: "2022-09-01" },
  { id: 3, title: "2022년 추석 연휴 매장별 운영일 안내", content: "매장 상황에 따라 운영일은 변동될 수 있으니 방문 전 매장확인 후 방문 부탁드립니다.", date: "2022-09-01" },
  { id: 4, title: "두끼떡볶이, 2022 매일경제 100대 프랜차이즈 선정!", content: "두끼를 사랑해주시는 고객 여러분께 감사의 말씀을 전합니다.", date: "2022-07-13" },
  { id: 5, title: "두끼에 D.I.Y 디저트를 더하다!!!", content: "일부 매장은 순차적으로 도입될 예정입니다.", date: "2022-07-01" },
  { id: 6, title: "두끼 7주년 프로모션 - 추억의 레트로 뽑기", content: "화끈하게 77,000명에게 드립니다!", date: "2022-06-08" },
]

const Notice01 = () => {
  return (
    <div className='container'>
      <h2>NOTICE</h2>
      <ul className='ntc'>
        {
          NOTICE.map(ntc =>{
            return (
              <li key={ntc.id}>
                <strong>{ntc.title}</strong>
                <p>{ntc.content}</p>
                <span>{ntc.date}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Notice01;