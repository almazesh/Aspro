import cls from './singleCatalog.module.css';
import Linear from '../../../assets/lights/linear.jpg'
import Ring from '../../../assets/lights/ring.jpg'
import Circle from '../../../assets/lights/Circle.jpg'
import ManyUgol from '../../../assets/lights/Many.jpg'
import X from '../../../assets/lights/X.jpg'
import {Link, useParams} from 'react-router-dom'
import Clip from '../../../assets/Solve/paperclip.png'
import { useEffect , useState } from 'react';
import Loader from '../../../Components/Loader';

const SingleCatalog = () =>{
    const [category , setCategory] = useState(null)
    const { id } = useParams()

    useEffect(() =>{
        fetch(`http://217.25.90.3/api/category/${id}`)
        .then(res => res.json())
        .then(r =>{
            setCategory(r)
        })
    }, [setCategory])

    return (
        <>
            <div className={cls.catalog_title}>
                <p className={cls.title}>Квадратные светильники</p>
                {
                    category?.name && <p className={cls.square}>Каталог светильников {'>'} {category.name}</p>
                }
                
            </div>
            <div className={cls.catalog_banner}>
                <div className={cls.catalog_select_inline}>
                    <select>
                        <option>
                            Тип монтажа:
                        </option>
                    </select>
                    <select>
                        <option>
                            Место установки:
                        </option>
                    </select>
                    <select>
                        <option>
                            Степень защиты:
                        </option>
                    </select>
                    <select className={cls.catalog_decor}>
                        <option>
                            Декоративные элементы:
                        </option>
                    </select>
                </div>
            </div>

            <div className={cls.cards_parent}>
                <div className={cls.cards_inline}>
                     {
                        category ? (
                                <Link to="/single-product">
                                    <div className={cls.card}>
                                        <img src={Linear}/>
                                        <div className={cls.card_title}>
                                            <p>
                                                {category.name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                        ) : (category === null) ? (
                            <h1><Loader/></h1>
                        ) : (
                            <h1>Данные отсутствуют</h1>
                        )
                     }
                </div>
           </div>




           <div className={cls.work_banner}>
                <div className={cls.work_padding}>
                    <div className={cls.work_title}>
                        <h2>Не можете определиться с выбором?</h2>
                        <p>Обратитесь к нам, мы вам поможем!</p>
                    </div>

                    <div className={cls.form_block_center}>
                        <div className={cls.form_block_inline}>
                        <div className={cls.form_left_block}>
                            <form className={cls.form_right}>
                                <div>
                                    <input className={cls.firstInp} type="text" placeholder="Телефон или E-mail"/>
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
                                            Эксперты по светотехнике подберут <br/> периметральные светильники специально <br/> по вашу задачу.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            2.
                                        </span>
                                        <span>
                                            Вы получите проект освещения и <br/> профессиональную консультацию <br/> бесплатно
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


export default SingleCatalog; 