import cls from './solves.module.css'
import Mac from '../../assets/Solve/mac.jpg'
import Stol from '../../assets/Solve/stol.jpg'
import Cafe from '../../assets/Solve/cafe.jpg'

const Solution = () =>{
    return (
        <>
            <div className={cls.solve_title }>
                <p>Решения</p>
            </div>

            <div className={cls.solve_banner}>
                <div className={cls.solve_inline}>
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
       
       
            <div className={cls.work_banner}>
                <div className={cls.work_padding}>
                    <div className={cls.work_title}>
                        <h2>Возьмем ваш проект в работу!</h2>
                        <p>Присылайте проект на info@aspro.ru или просто оставьте заявку.</p>
                    </div>

                    <div className={cls.form_block_center}>
                        <div className={cls.form_block_inline}>
                        <div className={cls.form_left_block}>
                            <form>
                                <div>
                                    <input type="text" placeholder="Телефон или E-mail"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Комментарий"/>
                                    <i className="fa fa-user"></i>
                                </div>
                            </form>
                        </div>
                        <div className={cls.form_right_block}>
                            <div>
                                <ul>
                                    <li>
                                        <span>
                                            1.
                                        </span>
                                        <span>
                                            Сделаем подробный светотехнический <br/> расчет
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            2.
                                        </span>
                                        <span>
                                            Оптимизируем смету
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            3.
                                        </span>
                                        <span>
                                            Подберем аналоги!
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className={cls.form_button}>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>  
        </>

    )
}

export default Solution