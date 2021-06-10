import cls from './project.module.css'
import First from '../../assets/Slider/1.png'
import Third from '../../assets/Slider/3.png'
import Second from '../../assets/Slider/2.png'
import Four from '../../assets/Slider/4.png'
import Form from '../../Components/form/form'
import {Link} from 'react-router-dom'
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
                    <Link to="/singleProject">
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
                    </Link>
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



            <Form />
        </>
    )
}

export default Project;