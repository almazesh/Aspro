import cls from './Solve.module.css'
import Mac from '../../assets/Solve/mac.jpg'
import Stol from '../../assets/Solve/stol.jpg'
import Cafe from '../../assets/Solve/cafe.jpg'
import { Link } from 'react-router-dom'

const Solve = () =>{
    return (
        <>
            <div className={cls.solve_banner}>
                <div className={cls.solve_inline}>
                    <div className={cls.solve_left_block}>
                        <div>
                            <h1>Отраслевые <br/> решения</h1>
                        </div>
                        <div className={cls.solve_left_watch}>
                            <span>Смотреть все категории</span>
                        </div>
                        <div>
                            <p>
                                Посмотрите решения для освещения различных типов обьектов. В них описаны особенности ,которые выжно учесть при создании систем освещения для формирования комфортно среды
                            </p>
                        </div>
                    </div>
                    <div className={cls.solve_right_block}>
                        <div className={cls.solve_right_block_inline}>
                            <Link to="/solution">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solve