import cls from './singleProd.module.css'

const singleProd = () =>{
    return (
        <>
            <div className={cls.product_title}>
                <h1>ASPRO QUADRO</h1>
            </div>
            

            <div className={cls.product_banner}>
                <div className={cls.product_inline}>
                    <div className={cls.product_left}>
                        <div className={cls.product_left_inline}>
                            <ul>
                                <h3>Тип корпуса:</h3> 
                                <li>
                                    <input type="checkbox" checked/>
                                    <label>Все</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>Куб 04</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>Куб 05</label>
                                </li>
                            </ul>
                            <ul>
                                <h3>Цвет корпуса:</h3> 
                                <li>
                                    <input type="checkbox" checked/>
                                    <label>Все</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>Белый</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>Черный</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>Серый</label>
                                </li>
                            </ul>
                            <ul>
                                <h3>Мощность:</h3> 
                                <li>
                                    <input type="checkbox" checked/>
                                    <label>Все</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>44 Bт</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>45 Bт</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>46 Bт</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>47 Bт</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>48 Bт</label>
                                </li>
                            </ul>

                            <ul>
                                <h3>Световой поток:</h3> 
                                <li>
                                    <input type="checkbox" checked/>
                                    <label>Все</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4090 лм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4250 лм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4380 лм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4520 лм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4670 лм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4730 лм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4890 лм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4960 лм</label>
                                </li>
                            </ul>

                            <ul>
                                <h3>Доммирование:</h3> 
                                <li>
                                    <input type="checkbox" checked/>
                                    <label>Все</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>MDV</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>DALI</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>Нет</label>
                                </li>
                            </ul>
                            <ul>
                                <h3>Размеры:</h3> 
                                <li>
                                    <input type="checkbox" checked/>
                                    <label>200x1200 мм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>340x1200 мм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>490x1200 мм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>605x1510 мм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>625x625 мм</label>
                                </li>

                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>625x1200 мм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>775x775 мм</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>1200x1200 мм</label>
                                </li>
                                
                            </ul>

                            <ul>
                                <h3>Цветовая температура:</h3> 
                                <li>
                                    <input type="checkbox" checked/>
                                    <label>Все</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>3000 K</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked disabled/>
                                    <label>4000 K</label>
                                </li>
                                <ul>
                                <li>
                                    <p>&times;</p>
                                </li>
                                </ul>
                            </ul>
                            
                        </div>
                    </div>
                    <div className={cls.product_right}>
                        <div>
                            <p>Каталог светильников "" Квадратные светильники "" ASPRO QUADRO</p>
                        </div>
                        <div className={cls.product_right_slider_parent}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default singleProd