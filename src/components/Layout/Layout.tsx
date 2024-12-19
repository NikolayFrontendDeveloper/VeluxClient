import { Outlet, NavLink } from "react-router-dom"
import s from './styles.module.scss'

export default function Layout() {
    return (
        <>
            <header>
                <div className={s.layout_left_column}>
                    <NavLink to={'/'}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to={'/catalog'}>
                        <p>Catalog</p>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <p>Contact</p>
                    </NavLink>
                    <NavLink to={'/faq'}>
                        <p>FAQ</p>
                    </NavLink>
                </div>
                <div className={s.layout_center_column}>
                    <NavLink to={'/'}>
                        <img className={s.header_logo} src="/logo.jpg" alt="logo" />
                    </NavLink>
                </div>
                <div className={s.layout_right_column}>
                    <NavLink to={'/search'}>
                        <img src="/search.svg" alt="search" />
                    </NavLink>
                    <NavLink to={'/profile'}>
                        <img src="/profile.svg" alt="profile" />
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <img src="/cart.svg" alt="cart" />
                    </NavLink>
                </div>
            </header>
            <Outlet />
        </>
    )
}