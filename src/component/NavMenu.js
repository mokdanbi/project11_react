import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { title: "브랜드", link: "/sub01" },
    { title: "메뉴", link: "/sub02" },
    { title: "매장안내", link: "/sub03" },
    { title: "창업문의", link: "/sub04" },
    { title: "공지사항", link: "/sub05" },
    { title: "커뮤니티", link: "/sub06" },
    { title: "밀앤쿡", link: "/sub07" }
]

const NavMenu = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}>
                            <NavLink to={it.link}>
                                {it.title}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavMenu