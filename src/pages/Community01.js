import React from 'react'
import '../css/Community.scss'

const NEWS = [
  { id: 1, title: "두끼 마라탕도 무한리필… 한정 프로모션 전개", content: "신아일보", date: "2022-09-20", link: "http://www.shinailbo.co.kr/news/articleView.html?idxno=1600524" },
  { id: 2, title: "떡볶이로 연 매출 2000억원…월급 루팡의 인생역전", content: "매일경제", date: "2022-09-17", link: "https://www.mk.co.kr/premium/behind-story/view/2022/09/32469/" },
  { id: 3, title: "두끼, 셀프 쿠폰 만들기 두끼필름 진행", content: "CBC News", date: "2022-08-31", link: "http://www.cbci.co.kr/news/articleView.html?idxno=432117" },
  { id: 4, title: "두끼, 국내외 신규매장 오픈 소식", content: "여성소비자신문", date: "2022-08-23", link: "http://www.wsobi.com/news/articleView.html?idxno=172391" },
  { id: 5, title: "프랜차이즈 브랜드의 노하우 담은 떡볶이 HMR 출시 이어져...", content: "디지털조선일보", date: "2022-08-05", link: "http://digitalchosun.dizzo.com/site/data/html_dir/2022/08/05/2022080580192.html" },
  { id: 6, title: "허닭프렌즈, 두끼 운영사 다른과 업무협약", content: "아시아경제", date: "2022-08-05", link: "https://view.asiae.co.kr/article/2022080509070997201" },
]

const Community01 = () => {
  return (
    <div className='container'>
      <h2>NEWS</h2>
      <ul className='com'>
        {
          NEWS.map(news => {
            return (
              <li key={news.id}>
                <a href={news.link} target="blank_">
                  <strong>{news.title}</strong>
                  <p>{news.content}</p>
                  <span>{news.date}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Community01;