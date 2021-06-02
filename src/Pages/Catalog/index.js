import cls from './index.module.css';
import Linear from '../../assets/lights/linear.jpg'
import Ring from '../../assets/lights/ring.jpg'
import Circle from '../../assets/lights/Circle.jpg'
import ManyUgol from '../../assets/lights/Many.jpg'
import X from '../../assets/lights/X.jpg'
import Form from '../../Components/form/form';

const Katalog = () =>{
    return (
        <>
            <div className={cls.catalog_title}>
                <p>Каталог светильников</p>
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
                    <div className={cls.card}>
                        <img src={Linear}/>
                        
                        <div className={cls.card_title}>
                            <p>
                                Прямоугольные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Ring}/>
                        <div className={cls.card_title}>
                            <p>
                                Кольцевые <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Circle}/>
                        <div className={cls.card_title}>
                            <p>
                                Круглые <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={ManyUgol}/>
                        <div className={cls.card_title}>
                            <p>
                                Многоугольные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={X}/>
                        <div className={cls.card_title}>
                            <p>
                                Фигурные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Circle}/>
                        <div className={cls.card_title}>
                            <p>
                                Круглые <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={ManyUgol}/>
                        <div className={cls.card_title}>
                            <p>
                                Многоугольные <br /> светильники
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={X}/>
                        <div className={cls.card_title}>
                            <p>
                                Фигурные <br /> светильники
                            </p>
                        </div>
                    </div>
                    
                </div>
           </div>




          <Form />
        </>
    )
}


export default Katalog; 