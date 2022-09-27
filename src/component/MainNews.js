import React from 'react'

const NEWS = [
    { id: 1, title: "두끼 마라탕도 무한리필… 한정 프로모션 전개", link: "/" },
    { id: 2, title: "월급 루팡에서 연 매출 2천억 대표로 인생 역전 [남돈남산]", link: "/" },
    { id: 3, title: "두끼, 셀프 쿠폰 만들기 ‘두끼필름’ 진행", link: "/" },
    { id: 4, title: "두끼, 국내외 신규 매장 오픈 소식 알려", link: "/" },
]

const NOTICE = [
    { id: 1, title: "공지 두끼 찐-마라 페스티벌: 다른 곳 가지 마라 두끼도 마라 있다!", link: "/" },
    { id: 2, title: "공지 두끼필름 - 두끼포즈로 사진 찍으면 나만의 두끼쿠폰 완성!", link: "/" },
    { id: 3, title: "2022 즐거운 한가위 보내세요.", link: "/" },
    { id: 4, title: "2022년 추석 연휴 매장별 운영일 안내", link: "/" },
]

const MainNews = () => {
    return (
        <section className="MainNews">
            <h2>DOOKKI NEWS</h2>
            <p>두끼 떡볶이의 다양한 소식을 알아보세요</p>
            <div className="news">
                <ul>
                    {
                        NEWS.map(news => {
                            return (
                                <li>
                                    {news.title}
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>

                </ul>
            </div>
        </section>
    )
}

export default MainNews