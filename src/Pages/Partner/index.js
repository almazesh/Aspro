import cls from './partner.module.css'

const Partner = () =>{
    return (
        <>
            <div className={cls.partner_title}>
                <h1>Дружим с профессионалами</h1>
                <p className={cls.partner_p}>Мы прекрасно осознаем , что работа в рыночных условиях основана на взаимной поддержке профессионалов , поэтому постоянно нацелены на поиск надежных партнеров в сфере поставок светотехники,электротехники,проектирования и строительства.</p>
                <p>Если у вас есть к нам деловое предложение,то отправьте его на почту:info@aspro.com</p>

                <div className={cls.partner_title2}>
                    <h1>Стать нашим партнером</h1>
                    <p>
                        Если вы хотите стать нашим партнером и приобретать предлагаемую продукцию по специальным ценам,а также использовать дополнительные преимущества, то заполните карту партнера.
                    </p>
                    <div >
                        <button className={cls.partner_btn}>Оставить заявку</button>
                    </div>
                </div>

                <div className={cls.partner_advise}>
                    <h1>Мы предлагаем </h1>
                    <h2>Светотехникам и проектировщикам</h2>
                </div>

                <div className={cls.partner_list}>
                    <div>
                        <p>1.</p> <p>Широкий складской ассортимент оборудования с оптимальным соотношением цена-качество;</p>
                    </div>
                    <div>
                        <p>2.</p> <p>Исчерпывающую информацию о продуктах,ies-файлы,3d модели для расчетов;</p>
                    </div>
                    <div>
                        <p>3.</p> <p>Партнерские условия работы и простой сервис для сложных проектов Aspro light.</p>
                    </div>
                </div>

                 <div className={cls.partner_advise}>
                    <h2>Архитекторам и дизайнерам</h2>
                </div>

                <div className={cls.partner_list}>
                    <div>
                        <p>1.</p> <p>Наш опыт светотехнического проектирования в наших проектах;</p>
                    </div>
                    <div>
                        <p>2.</p> <p>Инженерный подход к решению задач;</p>
                    </div>
                    <div>
                        <p>3.</p> <p>Исчерпывающую информацию о предлагаемых продуктах, включая 3d модели светильников;</p>
                    </div>
                    <div>
                        <p>4.</p> <p>Интересные условия работы.</p>
                    </div>
                </div>


                <div className={cls.partner_advise}>
                    <h2>Строительным компаниям</h2>
                </div>

                <div className={cls.partner_list}>
                    <div>
                        <p>1.</p> <p>Доставка на ваш обьект за наш счет;</p>
                    </div>
                    <div>
                        <p>2.</p> <p>Помощь в проектировании и расчетах;</p>
                    </div>
                    <div>
                        <p>3.</p> <p>Выгодные условия сотрудничества.</p>
                    </div>
                   
                </div>


                <div className={cls.partner_advise}>
                    <h2>Электромонтажным организациям</h2>
                </div>


                <div className={cls.partner_list}>
                    <div>
                        <p>1.</p> <p>Надежное оборудование с гарантией от 3-лет;</p>
                    </div>
                    <div>
                        <p>2.</p> <p>Поддержание актуального ассортимента на складе;</p>
                    </div>
                    <div>
                        <p>3.</p> <p>Специальные ценовые условия.</p>
                    </div>
                   
                </div>
            </div>


            <div className={cls.work_banner}>
                <div className={cls.work_padding}>
                    <div className={cls.work_title}>
                        <h2>Оставить заявку на партнёрство</h2>
                        <p>Присылайте проект на info@aspro.ru или просто оставьте заявку.</p>
                    </div>

                    <div className={cls.form_block_center}>
                        <div className={cls.form_block_inline}>
                        <div className={cls.form_left_block}>
                            <form>
                                <div>
                                    <input type="text" placeholder="Телефон"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Комментарий"/>
                                    <i className="fa fa-user"></i>
                                </div>
                            </form>
                        </div>
                        <div className={cls.form_right_block}>
                            <form>
                                <div>
                                    <input type="text" placeholder=" E-mail"/>
                                </div>
                                <div>
                                    <select>
                                        <option>
                                            Сфера деятельности
                                        </option>
                                    </select>
                                </div>
                            </form>
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

export default Partner