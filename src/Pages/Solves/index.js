import cls from './solves.module.css'
import Mac from '../../assets/Solve/mac.jpg'
import Stol from '../../assets/Solve/stol.jpg'
import Cafe from '../../assets/Solve/cafe.jpg'
import {Link} from 'react-router-dom'
import Form from '../../Components/form/form'
const Solution = () =>{
    return (
        <>
            <div className={cls.solve_title }>
                <p>Решения</p>
            </div>

            <div className={cls.solve_banner}>
                <div className={cls.solve_inline}>
                    <Link to='/single-solve'>
                    <div className={cls.solve_card}>
                        <img src={Mac}/>
                        <div>
                            <p>Магазины <br/> и торговые центры</p>
                        </div>
                    </div>
                    </Link>
                    <div className={cls.solve_card}>
                        <img src={Stol}/>
                        <div>
                            <p>Бизнес центры</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Cafe}/>
                        <div>
                            <p>Рестораны и кафе</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Stol}/>
                        <div>
                            <p>Бизнес центры</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Cafe}/>
                        <div>
                            <p>Рестораныи и кафе</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Mac}/>
                        <div>
                            <p>Магазины <br/> и торговые центры</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Stol}/>
                        <div>
                            <p>Бизнес центры</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Cafe}/>
                        <div>
                            <p>Рестораны и кафе</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Stol}/>
                        <div>
                            <p>Бизнес центры</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Cafe}/>
                        <div>
                            <p>Рестораныи и кафе</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Stol}/>
                        <div>
                            <p>Бизнес центры</p>
                        </div>
                    </div>
                    <div className={cls.solve_card}>
                        <img src={Cafe}/>
                        <div>
                            <p>Рестораны и кафе</p>
                        </div>
                    </div>
                </div>
            </div>
       
       
           <Form />
        </>

    )
}

export default Solution