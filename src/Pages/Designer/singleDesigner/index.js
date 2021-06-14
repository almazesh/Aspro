import cls from './singleDesigner.module.css'
import Man from '../../../assets/Designer/firstMan.jpg'
import { Link } from "react-router-dom";
import First from '../../../assets/Slider/1.png'
import Third from '../../../assets/Slider/3.png'
import Second from '../../../assets/Slider/2.png'
import Four from '../../../assets/Slider/4.png'
import PartnerForm from '../../../Components/partnerForm';
// const designersData = [
//     {
//         id: 1,
//         name: 'Max',
//         link: '/designers-partners/1',
//         job: 'Граф. дизайнер',
//         img: First
//     },
//     {
//         id: 2,z
//         name: 'Olga'
//     }
// ]

const singleDesigner = () =>{
    return (
        <>
            <div className={cls.designer_parent}>
                <div className={cls.designer_title}>
                    <h1>Дизайнеры и партнеры</h1>
                    <p>Дизайнеры {' > '} Максим Турский</p>
                </div>

                <div className={cls.designer_card_inline}>
                    <div className={cls.left_side}>
                        <img src={Man} />
                    </div>

                    <div className={cls.right_side}>
                        <div>
                            <h1>Максим Турский</h1>
                            <p>Графический дизайнер</p>
                            <div className={cls.right_text}>
                                <p>
                                    Имею творческий подход к работе, отработано чувство вкуса; характер жизнерадостный, целеустремленный, активный; жизненная установка – постоянное самосовершенствование и стремление к повышению квалификации.   
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={cls.right_inline}>
                                <p>E-mail:</p>
                                <p className={cls.second_p}>info@aspro.ru</p>
                            </div>
                            <div className={cls.right_inline}>
                                <p>Телефон:</p>
                                <p className={cls.second_p_b}>8(495) 172 28 06</p>
                            </div>
                        </div>
                        <div>
                            <div className={cls.designer_sociel_inline}>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                                <Link to=""><i className="fab fa-whatsapp"></i></Link>
                                <Link to=""><i className="fab fa-telegram-plane"></i></Link>
                            </div>
                        </div>
                    </div>
                </div> 



                <div className={cls.project_with_designer}>
                    <h1>Проекты с дизайнером</h1>
                </div>

                <div className={cls.project_inner}>
                    <div className={cls.project_inline}>
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
                    </div>
                </div>
            </div>



            {/* FORM */}


            <PartnerForm/>
        </>
    )

}

export default singleDesigner