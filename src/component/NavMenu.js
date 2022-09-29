import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { brand_sub, community_sub, franchise_sub, mealncook_sub, menu_sub, notice_sub, store_sub } from './NavData'

const NAVLINK = [
    { title: "브랜드", link: "/brand" },
    { title: "메뉴", link: "/menu" },
    { title: "매장안내", link: "/store" },
    { title: "창업문의", link: "/franchise" },
    { title: "공지사항", link: "/notice" },
    { title: "커뮤니티", link: "/community" },
    { title: "밀앤쿡", link: "/mealncook" }
]

const NavMenu = () => {
    return (
        <ul>
            <li>
                <Link to="/brand">브랜드</Link>
                <ul>
                    {
                        brand_sub.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>
                                        {it.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
            <li>
                <Link to="/menu">메뉴</Link>
                <ul>
                    {
                        menu_sub.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>
                                        {it.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
            <li>
                <Link to="/store">매장안내</Link>
                <ul>
                    {
                        store_sub.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>
                                        {it.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
            <li>
                <Link to="/franchise">창업문의</Link>
                <ul>
                    {
                        franchise_sub.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>
                                        {it.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
            <li>
                <Link to="/notice">공지사항</Link>
                <ul>
                    {
                        notice_sub.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>
                                        {it.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
            <li>
                <Link to="/community">커뮤니티</Link>
                <ul>
                    {
                        community_sub.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>
                                        {it.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
            <li>
                <Link to="/mealncook">밀앤쿡</Link>
                <ul>
                    {
                        mealncook_sub.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <Link to={it.link}>
                                        {it.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </li>

            {/* {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}>
                            <NavLink to={it.link}>
                                {it.title}
                            </NavLink>
                        </li>
                    )
                })
            } */}
        </ul>
    )
}

export default NavMenu