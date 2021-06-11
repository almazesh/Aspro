import { useState } from 'react'
import './productMenu.css'
import Aspro from '../../../../../assets/lights/Circle.jpg'
import Sertificate from '../../../../../assets/Product/sert.png'
import List from '../../../../../assets/Product/List.png'
import Pasport from '../../../../../assets/Product/pasport.png'


const ProductMenu = () =>{
    const [collapse , setCollapse] = useState(false)
    const showMenu = () => setCollapse(!collapse)
    return (
        <>
            <div className={collapse  ? 'product_list_banner activeMenu' : 'product_list_banner'}>
                    <ul className='navList'>
                        <li>
                            Светильник ASPRO RING D700x60x50 мм, 35W LED, 4000K, IP40, Ra80, Черный, Подвес 1,25 м 
                        </li>
                        <li>
                            67563 p.
                        </li>
                        <li>
                            <span>Подробнее</span>
                            <div className='info_square' onClick={showMenu}>
                                <p>+</p>
                            </div>
                        </li>
                    </ul>

                    <div className='collapse_banner'>
                        <div className='collapse_inline'>
                            <div className='first_block'>
                                <div>
                                    <img src={Aspro}/>
                                    <div>
                                        <p>
                                            Серия функциональных подвесных светодиодных светильников с периметральной засветкой CUBE торговой марки БОСМА.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='second_block'>
                                <div className='second_inline'>
                                    <ul className='left_second'>
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
                                    <ul className='right_second'>
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
                        
                            <div className="third_block">
                                <div>
                                    <button>Купить</button>
                                    <div className='inline_count'>
                                        <div className='count_square'>
                                            <p>-</p>
                                        </div>
                                        <div>
                                            <li>1 шт.</li>
                                        </div>
                                        <div className='count_square'>
                                            <p>+</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col_docs'>
                                    <div>
                                        <h1>Файлы</h1>

                                        <div className='col_docs_gramotes'>
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
                        </div>
                    </div>
                    
                </div>

                
        </>
    )
}

export default ProductMenu