import cls from './project.module.css'
import First from '../../assets/Slider/1.png'
import Third from '../../assets/Slider/3.png'
import Second from '../../assets/Slider/2.png'
import Four from '../../assets/Slider/4.png'


const Project = () =>{
    return (
        <>
            <div className={cls.project_title}>
                <p>Проекты</p>
            </div>

            <div className={cls.project_menu_banner}>
                <ul className={cls.project_menu_inline}>
                    <li>
                        Рестораны
                    </li>
                    <li>
                        Музеи и Галереи
                    </li>
                    <li>
                        Магазины
                    </li>
                    <li>
                        Офисы
                    </li>
                    <li>
                        Фасадное освещение 
                    </li>
                    <li>
                        Частные апартаменты
                    </li>
                    <li>
                        Отели
                    </li>
                    <li>
                        Кинотеатры
                    </li>
                </ul>
            </div>

            <div className={cls.project_banner_card}>
                <div className={cls.project_inline_card}>
                    <div className={cls.card}>
                        <img src={Four}/>
                        <div>
                            <h2>
                                Офис HTML Academy
                            </h2>
                            <p>
                                Москва Сретенский 6-р.д 1
                            </p>
                        </div>
                    </div>  
                    <div className={cls.card}>
                        <img src={Third}/>
                        <div>
                            <h2>
                                Культурный центр Андрея <br/> Вознесенского
                            </h2>
                            <p>
                                Санкт-Петербург , ул Кожевенная линия.
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Second}/>
                        <div>
                            <h2>
                                Академия стили "Kinky hair"
                            </h2>
                            <p>
                                Москва , Зубовский бульвар. д 2
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={First}/>
                        <div>
                            <h2>
                                Бизнес центр <br /> "Золотая долина" 
                            </h2>
                            <p>
                                Москва , наб. Марка Шагала д 1, корп 1
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Four}/>
                        <div>
                            <h2>
                                Офис HTML Academy
                            </h2>
                            <p>
                                Москва Сретенский 6-р.д 1
                            </p>
                        </div>
                    </div>  
                    <div className={cls.card}>
                        <img src={Third}/>
                        <div>
                            <h2>
                                Культурный центр Андрея <br/> Вознесенского
                            </h2>
                            <p>
                                Санкт-Петербург , ул Кожевенная линия.
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Second}/>
                        <div>
                            <h2>
                                Академия стили "Kinky hair"
                            </h2>
                            <p>
                                Москва , Зубовский бульвар. д 2
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={First}/>
                        <div>
                            <h2>
                                Бизнес центр <br /> "Золотая долина" 
                            </h2>
                            <p>
                                Москва , наб. Марка Шагала д 1, корп 1
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Four}/>
                        <div>
                            <h2>
                                Офис HTML Academy
                            </h2>
                            <p>
                                Москва Сретенский 6-р.д 1
                            </p>
                        </div>
                    </div>  
                    <div className={cls.card}>
                        <img src={Third}/>
                        <div>
                            <h2>
                                Культурный центр Андрея <br/> Вознесенского
                            </h2>
                            <p>
                                Санкт-Петербург , ул Кожевенная линия.
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Second}/>
                        <div>
                            <h2>
                                Академия стили "Kinky hair"
                            </h2>
                            <p>
                                Москва , Зубовский бульвар. д 2
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={First}/>
                        <div>
                            <h2>
                                Бизнес центр <br /> "Золотая долина" 
                            </h2>
                            <p>
                                Москва , наб. Марка Шагала д 1, корп 1
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

export default Project;