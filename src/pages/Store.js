import React from 'react'
import '../css/Subpage.scss'
import { store_sub } from '../component/NavData';
import { Link } from 'react-router-dom';

const Store = ({ content }) => {
  const num = 2;
  return (
    <div className='Subpage'>
      <div className="subImg subImg03"></div>
      <div className="navBar">
        <div className="inner">
          <div className="title">
            {content[num].title}
          </div>
          <ul className="list">
            <li style={{ fontWeight: 700 }}><Link to="/store">{store_sub[0].title}</Link></li>
            <li><Link to="/store/sub02">{store_sub[1].title}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Store;