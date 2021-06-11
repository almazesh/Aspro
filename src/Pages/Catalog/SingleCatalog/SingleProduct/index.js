import cls from './singleProd.module.css'
import Banner from '../../../../assets/Product/singleProd.jpg'
import List from '../../../../assets/Product/List.png'
import Sertificate from '../../../../assets/Product/sert.png'
import Pasport from '../../../../assets/Product/pasport.png'
import ProductMenu from './ProductMenu/index'
import SliderCard from '../../../Main/SliderCard'
import Clip from '../../../../assets/Solve/paperclip.png'
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

                           
                            
                        </div>
                        <div className={cls.temp_inline}>
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
                            </ul>
                            <div>
                                <p> <span>&times;</span> Сбросить фильтры</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.product_right}>
                        <div>
                            <p>Каталог светильников {' > '} Квадратные светильники {' > '} ASPRO QUADRO</p>
                        </div>
                        <div className={cls.product_right_slider_parent}>
                            <div className={cls.product_right_img}>
                                <img src={Banner}/>
                            </div>

                            <div className={cls.product_right_docs}>
                                <div>
                                    <img src={List}/>
                                </div>
                                <div>
                                    <img src={Pasport}/>
                                </div>
                                <div>
                                    <img src={Sertificate}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductMenu />

                <div className={cls.product_description}>
                    <h1>Описание</h1>
                    <p>
                        Серия функциональных подвесных светодиодных светильников с периметральной засветкой CUBE торговой марки БОСМА. Продуманный современный дизайн в сочетании с высокой эффективностью позволяет формировать уникальную и комфортную атмосферу в любом помещении. Важной особенностью технологии изготовления светильников серии CUBE является применение технологии сварки при изготовлении корпуса светильника, что позволяет получить цельнометаллический корпус без просветов в углах светильника. Разработано и производится в России.
                    </p>
                </div>

                <div className={cls.product_oportunity}>
                    <h1>Дополнительные возможности</h1>

                    <div className={cls.child_oportunity}>
                        <div>
                            <li>1.</li>
                            <p>Изготовление светильников по индивидуальным размерам;</p>
                        </div>
                        <div>
                            <li>2.</li>
                            <p>Увеличение длины подвеса и кабеля подключения;</p>
                        </div>
                        <div>
                            <li>3.</li>
                            <p>Покраска корпуса в любой цвет по таблице RAL;</p>
                        </div>
                    </div>
                </div>




                <div className={cls.technic_char}>
                    <h1>Технические характеристики</h1>
                    <div className={cls.technic_inline}>
                        <ul className={cls.left_tech}>
                            <li>Тип корпуса:</li>
                            <li>Цвет корпуса:</li>
                            <li>Мощность:</li>
                            <li>Световой поток:</li>
                            <li>Цветовая температура:</li>
                            <li>Домминирование:</li>
                            <li>Размеры:</li>
                            <li>IP:</li>
                            <li>Тип ПРА:</li>
                            <li>Высота подвеса:</li>
                            <li>Гарантийный срок:</li>
                        </ul>
                        <ul className={cls.right_tech}>
                            <li>CUBE 60 / CUBE 04</li>
                            <li>Белый / Серый / Черный</li>
                            <li>
                                44 Вт
                            </li>
                            <li>4090 лм</li>
                            <li>3000 K / 4000 K / 4000 К</li>
                            <li>Нет / DALI / 1-10V</li>
                            <li>200x1200 мм</li>
                            <li>40</li>
                            <li>Драйвер</li>
                            <li>3 м</li>
                            <li>60 месяцев</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className={cls.product_project_title_inline}>
                <div></div>
                <h1>Проекты</h1>
                <p>Смотреть все категории</p>
            </div>
            <SliderCard />


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

export default singleProd