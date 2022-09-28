import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import '../css/MainStore.scss'

const KSTORE = [
    { id: 1, store: "오산대역점", add: "경기도 오산시 내삼미로 79번길 22, 2층 204호", date: "2022-08-31", tel: "031-372-2711", link: "/" },
    { id: 2, store: "부안점", add: "전북 부안군 부안읍 서외리 632, 102/103호", date: "2022-08-04", tel: "063-581-2771", link: "/" },
    { id: 3, store: "인천검단신도시점", add: " 인천시 서구 이음5로 66 서영아너시티 1차 2층 201호", date: "2022-08-01", tel: "032-568-9204", link: "/" }
]

const GSTORE = [
    { id: 1, store: "필리핀 SM CITY MARILAO점", add: "3019 MacArthur Hwy, Marilao, Bulacan", date: "2022-09-12", link: "/" },
    { id: 2, store: "필리핀 메가몰점", add: "Ortigas Center, Mandaluyong, 1555 Metro Manila", date: "2022-09-02", link: "/" },
    { id: 3, store: "베트남 빈컴 끼엔짱점", add: "910A Ngo Quyen, An Hai Bac, Son Tra, Da Nang 550000", date: "2022-09-01", link: "/" },
]

const MainStore = () => {
    return (
        <section className='MainStore'>
            <h2>NEW STORE</h2>
            <p>두끼 떡볶이의 새로 오픈한 매장을 소개합니다</p>
            <div className="inner">
                <div className="koreaStore">
                    <Slider
                        slidesToShow={1}
                        slidesToScroll={1}
                        vertical={true}
                    >
                        {
                            KSTORE.map(kstore => {
                                return (
                                    <figure key={kstore.id}>
                                        <div className={`store k_store0${kstore.id}`} key={kstore.id}>
                                        </div>
                                        <div className="des">
                                            <strong>{kstore.store}</strong>
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div className="globalStore">
                    <Slider
                        slidesToShow={1}
                        slidesToScroll={1}
                        vertical={true}
                    >
                        {
                            GSTORE.map(gstore => {
                                return (
                                    <figure key={gstore.id}>
                                        <div className={`store g_store0${gstore.id}`} key={gstore.id}>
                                        </div>
                                        <div className="des">
                                            <strong>{gstore.store}</strong>
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default MainStore