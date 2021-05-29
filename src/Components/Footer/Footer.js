import cls from './Footer.module.css'
import {Link} from 'react-router-dom'
const Footer = () =>{
    return (
        <>
            <footer>
                <div className={cls.footer_banner}>
                    <div className={cls.footer_inline}>
                        <ul>
                            <p>Продукция</p>
                            <li>
                                <Link to="">Линейные</Link>
                            </li>
                            <li>
                                <Link to="">Фигурные</Link>
                            </li>
                            <li>
                                <Link to="">Магнитная трековая система</Link>
                            </li>
                            <li>
                                <Link to="">Трековые</Link>
                            </li>
                            <li>
                                <Link to="">Встраиваемые</Link>
                            </li>
                            <li>
                                <Link to="">Накладные</Link>
                            </li>
                            <li>
                                <Link to="">Крупногабаритные</Link>
                            </li>
                            <li>
                                <Link to="">Напольные</Link>
                            </li>
                            <li>
                                <Link to="">Уличные</Link>
                            </li>
                            <li>
                                <Link to="">Архитектурные</Link>
                            </li>
                            <li>
                                <Link to="">Управление светом и компоненты</Link>
                            </li>
                            
                        </ul>

                        <ul>
                            <p>Компания</p>
                            <li>
                                <Link to="">О компании</Link>
                            </li>
                            <li>
                                <Link to="">Решения</Link>
                            </li>
                            <li>
                                <Link to="">Проекты</Link>
                            </li>
                            <li>
                                <Link to="">Контакты</Link>
                            </li>
                            <li>
                                <Link to="">Партнерам</Link>
                            </li>
                            <li>
                                <Link to="">Оплата и доставка</Link>
                            </li>
                            <li>
                                <Link to="">Сервис и гарантия</Link>
                            </li>
                            <li>
                                <Link to="">файлы для скачивания</Link>
                            </li>
                            <li>
                                <Link to="">Блог</Link>
                            </li>
                        </ul>

                        <ul className={cls.footer_contacts}>
                            <p>Контакты</p>
                            <li>
                                <Link to="">Адреса филиалов</Link>
                            </li>
                            <li>
                                <Link to="">Санкт-Петербург <br/> 8 (812) 210 77 19</Link>
                            </li>
                            <li>
                                <Link to="">Москва <br/> 8 (495) 172 28 06</Link>
                            </li>
                            <li>
                                <Link to="">info@aspro.ru</Link>
                            </li>
                        </ul>

                        <ul>
                            <p>Получить прайс на почту</p>

                            <li className={cls.footer_input_inline}>
                                <div>
                                    <input type="text" placeholder="E-email"/>
                                </div>
                                <div>
                                    <button>Получить</button>
                                </div>
                            </li>

                            <li className={cls.inline_social}>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                                <Link to=""><i className="fab fa-whatsapp"></i></Link>
                                <Link to=""><i className="fab fa-telegram-plane"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={cls.footer_last}>
                    <ul className={cls.footer_last_inline}>
                        <li>
                            @ aspro 2021 Копирование материалов с сайта запрещено
                        </li>
                        <li>
                            <Link to="">Юридическая информация</Link>
                        </li>
                        <li>
                            <Link to="">Политика конфеденциальности</Link>
                        </li>
                        <li>
                            <Link to="">Cookie файлы</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;