import cls from './designer.module.css'
import FirstMan from '../../assets/Designer/firstMan.jpg'
import SecondMan from '../../assets/Designer/secondMan.jpg'
import ThirdMan from '../../assets/Designer/thirdMan.jpg'
import {Link} from 'react-router-dom'
import PartnerForm from '../../Components/partnerForm'
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
                      <div className={cls.designer_card }>
                          <img src={ThirdMan}/>
                          <h2>Татьяна Любимова</h2>
                          <p>Маркетолог</p>
                          <div>
                              <button>Подробнее</button>
                          </div>
                      </div>
                </div>
            </div>


            <PartnerForm />
        </>
    )
}

export default Designer