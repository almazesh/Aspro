import './Navbar.css'
import  Logo from  '../../assets/Navbar/logo.jpg' 
import Logo2 from '../../assets/Navbar/logW.png'
import Shop from '../../assets/Navbar/shopping-bag.png'
import Search from '../../assets/Navbar/loupe.png'
import Bars from '../../assets/Navbar/menu.png'
import {Link} from 'react-router-dom';
import { useState } from 'react'
import {sideData , secondData} from './SideData'

const Navbar = () =>{
    const [sideBars , setsideBars] = useState(false)
    const showSideBar = () =>  setsideBars(!sideBars);
    return (
        <>      
            <div className={ sideBars ? "side_banner active" : 'side_banner'}>
                <div className='side_body'>
                    <div className='side_logo_inline'>
                        <img src={Logo2}/>
                        <span onClick={showSideBar}>&times;</span>
                    </div>  
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
                                <Link to="#" >
                                    <img src={Bars} className='burger' onClick={showSideBar}/>
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



