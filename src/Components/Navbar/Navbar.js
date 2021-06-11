import './Navbar.css'
import  Logo from  '../../assets/Navbar/logo.jpg' 
import Logo2 from '../../assets/Navbar/logW.png'
import Shop from '../../assets/Navbar/shopping-bag.png'
import Search from '../../assets/Navbar/loupe.png'
import Bars from '../../assets/Navbar/menu.png'
import {Link} from 'react-router-dom';
import { useState } from 'react'
import {sideData , secondData ,NavList} from './SideData'


const Navbar = () =>{
    const [sideBars , setsideBars] = useState(false)
    const showSideBar = () =>  setsideBars(!sideBars);
    const [search , setSearch] = useState(false)
    const showSearch = () => setSearch(!search)
    return ( 
        <>      
            <div className={ sideBars ? "side_banner active" : 'side_banner'}>
                <div className='side_body'>
                        <div className='side_logo_inline'>
                            <Link to='/'>
                                 <img src={Logo2}/>
                            </Link>
                            <span onClick={showSideBar}>&times;</span>
                        </div>  
                        <div className='side_inline_list'>
                            <div>
                                <div className='side_list'>
                                    {sideData.map((item , index) =>{
                                        return (
                                            <li key={index}>
                                                <Link to={item.path}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </div>
                                <div className='side_order'>
                                    {secondData.map((item , index) =>{
                                        return(
                                            <p key={index}>
                                                <Link to={item.path}>
                                                    {item.title}
                                                </Link>
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                  <div className='side_list'>
                                        {NavList.map((item , index) =>{
                                            return (
                                                <li key={index}>
                                                    <Link to={item.path}>
                                                        {
                                                            item.title
                                                        }
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                  </div>
                            </div>
                        </div>
                        <div className='get_price'>
                            <h1>Получить прайс на почту</h1>
                        </div>
                        <div className='form_nav'>
                            <input type='email' placeholder='E-mail'/>
                            <button>Получить</button>
                        </div>

                        <div className='social_inner'>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                                <Link to=""><i className="fab fa-whatsapp"></i></Link>
                                <Link to=""><i className="fab fa-telegram-plane"></i></Link>
                        </div>

                        <div className='side_addres'>
                            <p>
                                Москва <br />
                                8(495) 172 28 06
                            </p>
                            <p>
                                Санкт-Петербург <br />
                                8(812) 210 77 19
                            </p>
                        </div>

                        <div className='side_email'>
                            <p>info@aspro.ru</p>
                        </div>
                </div>
           </div>
            <nav>
                <div className='navbar_background'>
                    <div className='navbar_inline'>
                        <ul className='navbar_logo'>
                            <li>
                                <Link to="/"><img src={Logo}/></Link>
                            </li>
                            
                        </ul>
                        <ul className='navbar_logo_item'>
                             <li >
                                Профессиональные световые решения.
                            </li>
                        </ul>
                        <ul className='navbar_list'>
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
                        <ul className='navbar_right_icons'>
                            <li>
                                <Link to="/bucket">
                                    <img src={Shop}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="" onClick={showSearch}>
                                    <img src={Search}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" >
                                    <img src={Bars} className='burger' onClick={showSideBar}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className={search ?  'search_block activeSearch' : 'search_block'}>
                <div>
                    <input type='search' placeholder='Поиск' className='search'/>
                    <span onClick={showSearch}>&times;</span>
                </div>
            </div>

            
        </>
    )
}

export default Navbar



