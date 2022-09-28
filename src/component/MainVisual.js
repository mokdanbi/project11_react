import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MAINSLIDE = [
    { id: 1, title: "즉석떡볶이 무한리필 레스토랑 NO.1", content: "고객에게 단순히 떡볶이를 먹는 식당이 아닌, 그 이상의 가치를 제공하는 대한민국 최고의 즉석떡볶이 브랜드가 되겠습니다." },
    { id: 2, title: "Global Dookki", content: "해외에서도 강한 즉석떡볶이 브랜드 두끼, 글로벌 매장 110개점 돌파!" },
    { id: 3, title: "두끼 찐-마라 페스티벌", content: "떡볶이와 튀김, 진짜 마라탕까지 두끼에서 취향껏 즐겨보세요." }
]

const MainVisual = () => {
    return (
        <section className='Main'>
            <div className="MainVisual">
                <Swiper className='MainSlider'>
                    {
                        MAINSLIDE.map((slide, idx) => {
                            return (
                                <SwiperSlide className={`itm itm0${slide.id}`} key={slide.id}>
                                    <div className="slideTxt">
                                        <h2>{slide.title}</h2>
                                        <p>{slide.content}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default MainVisual