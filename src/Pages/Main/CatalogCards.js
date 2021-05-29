import cls from './CatalogCards.module.css'

const MainCard = () =>{
    return (
        <>
            <div className={cls.catalog_parent}>
                <div className={cls.catalog_inline}>
                    <div className={cls.catalog_first_card}>
                        <div >
                            <p>ASPRO Light - российский производитель светильников для коммерческих и частных интерьеров.</p>
                        </div>
                    </div>
                    <div className={cls.catalog_right_block}>
                        <div>
                            <li>Полный цикл производства</li>
                            <p>От идеи и разработки до сборки и упаковки</p>
                        </div>
                        <div>
                            <li>10 лет гарантия</li>
                            <p>На светильники</p>
                        </div>
                        <div>
                            <li>Кастомизация под проект</li>
                            <p>Изменения размера,цвета,формы под Ваши требования</p>
                        </div>
                    </div>
                </div>


                <div className={cls.catalog_title}>
                    <div className={cls.catalog_title_inline}>
                        <div></div>
                        <p>Каталог светильников</p>
                        <span>Смотреть все категории</span>
                    </div>
                </div>
            </div>

           <div className={cls.cards_parent}>
                <div className={cls.cards_inline}>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src="https://www.lampatron.ru/media/design-lamps/design-lamps-fial-b648.jpg"/>
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные светильники
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
        
            <div className={cls.project_banner}>
                <div className={cls.project_title}>
                    <div></div>
                    <h2>Проекты</h2>
                    <p>Смотреть все категории</p>
                </div>
            </div>
       
        </>
    )
}

export default MainCard