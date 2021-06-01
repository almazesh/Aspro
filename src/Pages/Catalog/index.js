import cls from './index.module.css';
import Linear from '../../assets/lights/linear.jpg'
import Ring from '../../assets/lights/ring.jpg'
import Circle from '../../assets/lights/Circle.jpg'
import ManyUgol from '../../assets/lights/Many.jpg'
import X from '../../assets/lights/X.jpg'

const Katalog = () =>{
    return (
        <>
            <div className={cls.catalog_title}>
                <p>Каталог светильников</p>
            </div>
            <div className={cls.catalog_banner}>
                <div className={cls.catalog_select_inline}>
                    <select>
                        <option>
                            Тип монтажа:
                        </option>
                    </select>
                    <select>
                        <option>
                            Место установки:
                        </option>
                    </select>
                    <select>
                        <option>
                            Степень защиты:
                        </option>
                    </select>
                    <select className={cls.catalog_decor}>
                        <option>
                            Декоративные элементы:
                        </option>
                    </select>
                </div>
            </div>

            <div className={cls.cards_parent}>
                <div className={cls.cards_inline}>
                    <div className={cls.card}>
                        <img src={Linear}/>
                        
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Ring}/>
                        <div className={cls.card_title}>
                            <p>
                                Кольцевые <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Circle}/>
                        <div className={cls.card_title}>
                            <p>
                                Круглые <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={ManyUgol}/>
                        <div className={cls.card_title}>
                            <p>
                                Многоугольные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={X}/>
                        <div className={cls.card_title}>
                            <p>
                                Фигурные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Circle}/>
                        <div className={cls.card_title}>
                            <p>
                                Круглые <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={ManyUgol}/>
                        <div className={cls.card_title}>
                            <p>
                                Многоугольные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={X}/>
                        <div className={cls.card_title}>
                            <p>
                                Фигурные <br /> светильники
                            </p>
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


export default Katalog; 