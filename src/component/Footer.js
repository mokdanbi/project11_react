import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='Footer'>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        className="marquee"
      >
        <img src={process.env.PUBLIC_URL + "/images/marquee.png"} alt="" />
      </Marquee>
      <div className="inner">
        <dl>
          <dd>738-86-00021 경기도 성남시 수정구 성남대로 1540 DM빌딩 2층</dd>
          <dt>COPYRIGHT &copy; 다른. CO., LTD. ALL RIGHTS RESERVED.</dt>
        </dl>
        <div className="personal">
          <Link to="/">개인정보취급방침</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;