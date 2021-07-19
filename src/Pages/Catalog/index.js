import cls from './index.module.css';
import Linear from '../../assets/lights/linear.jpg'
import Ring from '../../assets/lights/ring.jpg'
import Circle from '../../assets/lights/Circle.jpg'
import ManyUgol from '../../assets/lights/Many.jpg'
import X from '../../assets/lights/X.jpg'
import Form from '../../Components/form/form';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Loader from '../../Components/Loader';
const Katalog = () =>{
    const [category , setCategory] = useState(null)
    useEffect(() =>{
        fetch('http://217.25.90.3/api/category/')
        .then(res => res.json())
        .then(r => {
            setCategory(r)
        } , [setCategory])
    })
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
                    {
                        (category && category?.results.length !== 0) ? (
                            category?.results.map(item =>(
                                <Link to={`/singleCatalog/${item.id}`} >
                                    <div className={cls.card}>
                                        <img src={Linear}/>
                                        
                                        <div className={cls.card_title}>
                                            <p>
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (category === null) ? (
                            <Loader />
                        ) : (
                            <h1>Данные отсутствуют</h1>
                        )
                    }                    
                </div>
           </div>




          <Form />
        </>
    )
}


export default Katalog; 