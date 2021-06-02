import Clip from '../../assets/Solve/paperclip.png'
import cls from './form.module.css'
const Form  = () =>{
    return (
        <>
            <div className={cls.work_banner}>
                <div className={cls.work_padding}>
                    <div className={cls.work_title}>
                        <h2>Возьмем ваш проект в работу!</h2>
                        <p>Присылайте проект на info@aspro.ru или просто оставьте заявку.</p>
                    </div>

                    <div className={cls.form_block_center}>
                        <div className={cls.form_block_inline}>
                        <div className={cls.form_left_block}>
                            <form className={cls.form}>
                                <div>
                                    <input type="text" placeholder="Телефон или E-mail"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Комментарий"/>
                                    <img src={Clip}/>
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

export default Form;