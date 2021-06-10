import cls from './designer.module.css'
import FirstMan from '../../assets/Designer/firstMan.jpg'
import SecondMan from '../../assets/Designer/secondMan.jpg'
import ThirdMan from '../../assets/Designer/thirdMan.jpg'
import Clip from '../../assets/Solve/paperclip.png'
import {Link} from 'react-router-dom'
const Designer = () =>{
    return (
        <>
            <div className={cls.designer_title}>
                <h2>Дизайнеры - партнеры</h2>
                <p>За эстетику оформления сайта и текстов отвечают именно они. Креативные и талантливые сотрудники грамотно составляют описание товаров, делают фото и картинки к позициям. Это необходимо, чтобы клиент точно представлял, какой именно придет продукт. Также работники придумывают скидки и акции, которые радуют покупателей
                .</p>
                <p className={cls.designer_p}>
                Если у вас есть к нам деловое предложение, то отправьте его на почту: info@aspro.ru
                </p>
            </div>


            <div className={cls.designer_banner}>
                <div className={cls.designer_inline}>
                      <Link to="/single-designer">
                        <div className={cls.designer_card}>
                                <img src={FirstMan}/>
                                <h2>Максим Турский</h2>
                                <p>Графический дизайнер</p>
                                <div>
                                    <button>Подробнее</button>
                                </div>
                        </div>  
                      </Link>
                      <div className={cls.designer_card}>
                          <img src={SecondMan}/>
                          <h2>Ольга Киреева</h2>
                          <p>Руководитель отдела маркетинга </p>
                          <div>
                              <button>Подробнее</button>
                          </div>
                      </div>
                      <div className={cls.designer_card}>
                          <img src={ThirdMan}/>
                          <h2>Татьяна Любимова</h2>
                          <p>Маркетолог</p>
                          <div>
                              <button>Подробнее</button>
                          </div>
                      </div>
                </div>
            </div>


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

export default Designer