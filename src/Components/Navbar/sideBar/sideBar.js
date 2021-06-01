import cls from './sideBar.module.css'
import Logo from '../../../assets/Navbar/logW.png'
const sideBar = () =>{
    return (
        <>
           <div className={cls.side_banner}>
                <div className={cls.side_body}>
                    <div className={cls.side_logo_inline}>
                        <img src={Logo}/>
                        <span>&times;</span>
                    </div>
                </div>
           </div>
        </>
    )
}

export default sideBar