import React from 'react'
import '../css/Subpage.scss'
import { menu_sub } from '../component/NavData';
import { Link } from 'react-router-dom';
import Menu01 from './Menu01';

const Menu = ({ content }) => {
  const num = 1;
  return (
    <div className='Subpage'>
      <div className="subImg subImg02"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li style={{ fontWeight: 700 }}><Link to="/menu">{menu_sub[0].title}</Link></li>
            <li><Link to="/menu/sub02">{menu_sub[1].title}</Link></li>
            <li><Link to="/menu/sub03">{menu_sub[2].title}</Link></li>
          </ul>
        </div>
      </div>
      <Menu01 />
    </div>
  )
}

export default Menu