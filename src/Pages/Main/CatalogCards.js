import cls from './CatalogCards.module.css'
import Linear from '../../assets/lights/linear.jpg'
import Ring from '../../assets/lights/ring.jpg'
import Circle from '../../assets/lights/Circle.jpg'
import ManyUgol from '../../assets/lights/Many.jpg'
import X from '../../assets/lights/X.jpg'
import Clip from '../../assets/Solve/paperclip.png'
import {Link} from 'react-router-dom'
import { useState , useEffect} from 'react'
import Loader from '../../Components/Loader'
const MainCard = () =>{

    const [data , setData] = useState(null)

    useEffect(() =>{
        fetch('http://217.25.90.3/api/category/')
        .then(res => res.json())
        .then(r =>{
            setData(r)
        })
    }, [setData])
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
                            <li>10 лет <br/> гарантия</li>
                            <p>На светильники</p>
                        </div>
                        <div>
                            <li>Кастомизация <br/> под проект</li>
                            <p>Изменения размера,цвета,формы под Ваши требования</p>
                        </div>
                    </div>
                </div>


                <div className={cls.catalog_title}>
                    <div className={cls.catalog_title_inline}>
                        <div></div>
                        <p>Каталог светильников</p>
                        <Link to="/catalog"><span>Смотреть все категории</span></Link>
                    </div>
                </div>
            </div>

           <div className={cls.cards_parent}>
                <div className={cls.cards_inline}>
                    {
                        (data !== null && data?.results.length !== 0) ? (
                            data?.results.map(item =>(
                                <Link key={item.id} to={`/singleCatalog/${item.id}`}>
                                    <div  className={cls.card} key={item.id}>
                                        <img src={Linear}/>
                                        <div className={cls.card_title}>
                                            <p>
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )) 
                        ) : (data === null) ? (
                            <h1 style={{textAlign:'center'}}><Loader/></h1>
                        ) : (
                            <div>
                                 <h1>Данные отсутствуют</h1>
                            </div>
                        )
                    }
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
        
            <div className={cls.project_banner}>
                <div className={cls.project_title}>
                    <div></div>
                    <h2>Проекты</h2>
                    <Link to="/singleProject"><p>Смотреть все категории</p></Link>
                </div>
            </div>
       
        </>
    )
}

export default MainCard