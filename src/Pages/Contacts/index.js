import cls from './contact.module.css'
import {Link} from 'react-router-dom'
import Clip from '../../assets/Solve/paperclip.png'
const Contact = () =>{
    return(
        <>
            <div className={cls.contact_title}>
                <p>Контакты</p>
            </div>

            <div className={cls.contact_banner}>
                <div className={cls.contact_inline}>
                    <div className={cls.contact_left}>
                        <div className={cls.contact_left_inline}>
                            <div>
                                <p>Адрес</p>
                            </div>
                            <div>
                                <p>Санкт-Петербург,Набережная реки <br/> Карповки,д5,литера П</p>
                            </div>
                        </div>
                        <div className={cls.contact_left_inline2}>
                            <div>
                                <p>Телефон</p>
                            </div>
                            <div>
                                <p>8 (495)172 28 06 / 8 (812) 210 77 19</p>
                            </div>
                        </div>
                        <div className={cls.contact_left_inline3}>
                            <div>
                                <p>Почта</p>
                            </div>
                            <div>
                                <p>info@aspro.ru</p>
                            </div>
                        </div>
                        <div className={cls.contact_left_inline4}>
                            <div>
                                <p>Социальные сети</p>
                            </div>
                            <div className={cls.contacts_left_inline_social}>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                                <Link to=""><i className="fab fa-whatsapp"></i></Link>
                                <Link to=""><i className="fab fa-telegram-plane"></i></Link>
                            </div>
                        </div>
                        <div className={cls.contact_left_btn}>
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                    <div className={cls.contact_right}>
                        <div>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15974.020843695498!2d30.290241366899178!3d59.969427140777285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315a4bdf3f1b%3A0x1c8b299cbcd21256!2z0L3QsNCxLiDQoNC10LrQuCDQmtCw0YDQv9C-0LLQutC4!5e0!3m2!1sru!2skg!4v1622410134588!5m2!1sru!2skg"  allowfullscreen="" loading="lazy"></iframe>

                        </div>
                    </div>
                </div>
            </div>


            <div className={cls.work_banner}>
                <div className={cls.work_padding}>
                    <div className={cls.work_title}>
                        <h2>Получить обратную связь</h2>
                        <p>У вас есть идеи улучшить нашу компанию?</p>
                        <p>Присылайте свои идеи на info@aspro.ru или оставьте заявку,мы вам напишем!</p>
                    </div>

                    <div className={cls.form_block_center}>
                        <div className={cls.form_block_inline}>
                            <div className={cls.form_left_block}>
                                <form className={cls.forms}>
                                    <div>
                                        <input type="text" placeholder="Телефон"/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Комментарий"/>
                                        <img src={Clip}/>
                                    </div>
                                </form>
                            </div>
                            <div className={cls.form_right_block}>
                                <form className={cls.forms}>
                                    <div>
                                        <input type="text" placeholder="E-mail"/>
                                    </div>
                                    <div>
                                        <select>
                                            <option>
                                                Сфера деятельноси:
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

export default Contact