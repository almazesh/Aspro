import cls from './SliderCard.module.css'
import First from '../../assets/Slider/1.png'
import Third from '../../assets/Slider/3.png'
import Second from '../../assets/Slider/2.png'
import Four from '../../assets/Slider/4.png'
import { Link } from 'react-router-dom'


const SliderCard = () =>{
    return (
        <>  
            <div className={cls.slider_parent}>
                <div className="swiper-container mySwiper1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Link to='/singleProject'>
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
                        </div>
                        <div className="swiper-slide">
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
                        </div>
                        
                        <div className="swiper-slide">
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
                        </div>

                        <div className="swiper-slide">
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
                        
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h2>
                                        Html Academy
                                    </h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h2>
                                        Html Academy
                                    </h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h2>
                                        Html Academy
                                    </h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h2>
                                        Html Academy
                                    </h2>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={cls.swiper_next + " swiper-button-next"}></div>
                     <div className={cls.swiper_prev +  " swiper-button-prev"}></div>
                </div>
            </div>
        </>
    )
}

export default SliderCard