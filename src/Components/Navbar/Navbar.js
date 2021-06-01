import cls from './Navbar.module.css'
import  Logo from  '../../assets/Navbar/logo.jpg' 
import Shop from '../../assets/Navbar/shopping-bag.png'
import Search from '../../assets/Navbar/loupe.png'
import Bars from '../../assets/Navbar/menu.png'
import {Link} from 'react-router-dom';
import sideBar from './sideBar/sideBar'
const Navbar = () =>{
    
    return (
        <>
            <nav>
                <div className={cls.navbar_background}>
                    <div className={cls.navbar_inline}>
                        <ul className={cls.navbar_logo}>
                            <li>
                                <Link to="/"><img src={Logo}/></Link>
                            </li>
                            <li className={cls.navbar_logo_item}>
                                Профессиональные световые решения.
                            </li>
                        </ul>
                        <ul className={cls.navbar_list}>
                            <li>
                                <Link to="/catalog">Каталог</Link>
                            </li>
                            <li>
                                <Link to="/solution">Решения</Link>
                            </li>
                            <li>
                                <Link to="/project">Проекты</Link>
                            </li>
                            <li>
                                <Link to="/partner">Партнерам</Link>
                            </li>
                            <li>
                                <Link to="/contact">Контакты</Link>
                            </li>
                        </ul>
                        <ul className={cls.navbar_right_icons}>
                            <li>
                                <Link to="">
                                    <img src={Shop}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <img src={Search}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="" >
                                    <img src={Bars}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar



