import cls from './SliderCard.module.css'

const SliderCard = () =>{
    return (
        <>  
            <div className={cls.slider_parent}>
                <div className="swiper-container mySwiper1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h2>
                                        Офис HTML Academy
                                    </h2>
                                    <p>
                                        Москва Сретенский 6-р.д 1
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"/>
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
                                <img src="https://www.kovorkingi.ru/data/files/img/std/1000000/5000/4028-4k-centr-9d740e97ac97.jpg"/>
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
                                <img src="https://free4kwallpapers.com/uploads/originals/2015/10/11/well-furnished-office-wallpaper.jpg"/>
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
                                    <h1>
                                        Html Academy
                                    </h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h1>
                                        Html Academy
                                    </h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h1>
                                        Html Academy
                                    </h1>
                                </div>
                            </div>
                        </div>
                        
                        <div className="swiper-slide">
                            <div className={cls.card}>
                                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                                <div>
                                    <h1>
                                        Html Academy
                                    </h1>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={cls.swiper_next + " swiper-button-next"}></div>
                     <div className="swiper-button-prev"></div>
                </div>
            </div>
        </>
    )
}

export default SliderCard