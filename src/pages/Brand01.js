import React from 'react'
import '../css/Brand.scss'

const Brand01 = () => {
    return (
        <div className='container'>
            <h2>BRAND VISION</h2>
            <div className="vision">
                <div className="img">
                    <img src={process.env.PUBLIC_URL + "/images/vision.png"} alt="" />
                </div>
                <div className="tit">
                    <ul>
                        <li>고객 만족</li>
                        <li>직원 만족</li>
                        <li>가맹 만족</li>
                    </ul>
                    <p>1위 기업</p>
                </div>
            </div>
            <div className="content">
                <div className="des">
                    <h3>리빙 브랜드</h3>
                    <p>사람들은 항상 1등을 기억합니다.
                        다수의 모방 업체들이 생겨나고 있지만, 1등의 전략을 따라해서는 1등을 이길 수 없습니다.
                        두끼는 앞으로도 업계를 선도하고, 나아가서는 한국을 대표하는 프랜차이즈 기업이 되도록 최선을 다하겠습니다.</p>
                </div>
                <div className="des">
                    <h3>즉석떡볶이 무한리필<br />레스토랑 NO.1 브랜드
                    </h3>
                    <p>대한 민국최고의 즉석 떡볶이 브랜드
                        2014년 1호점(고대 안암점) 오픈 이후 2015년 하반기에 본격적으로 가맹사업을 시작한
                        (주) 다른 두끼 떡볶이는 현재 (19년도 7월 기준) 국내 200호개점 이상의 매장을 운영중입니다.

                        두끼 떡볶이는 고객에게 단순히 떡볶이를 먹는 식당이 아닌,
                        그 이상의 가치를 제공하기 위해 노력하는, 대한민국 최고의 즉석떡볶이 브랜드가 되겠습니다.</p>
                </div>
                <div className="des">
                    <h3>세계가 인정하는<br />NO.1 브랜드
                    </h3>
                    <p>2015년 중국 상해 매장 오픈을 시작으로 대만, 싱가폴, 말레이시아. 베트남, 인도네시아, 미국 등 해외진출에 박차를 가하고 있습니다.
                        두끼떡볶이는 앞으로도 우리의 음식문화를 글로벌 브랜드로 성장하기 위해 끊임없이 노력하겠습니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Brand01