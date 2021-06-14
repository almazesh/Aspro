import cls from './partnerForm.module.css'
import Clip from '../../assets/Solve/paperclip.png'

const PartnerForm = () =>{
    return (
        <>
            <div className={cls.work_banner}>
                <div className={cls.work_padding}>
                    <div className={cls.work_title}>
                        <h2>Оставить заявку на партнёрство</h2>
                    </div>

                    <div className={cls.form_block_center}>
                        <div className={cls.form_block_inline}>
                            <div className={cls.form_left_block}>
                                <form className={cls.form_partner}>
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
                            <form className={cls.form_partner}>
                                    <div>
                                        <input type="text" placeholder="Телефон"/>
                                    </div>
                                    <div>
                                        <select>
                                             <option>Сфера деятельности</option>
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

export default PartnerForm