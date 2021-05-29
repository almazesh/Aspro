import MainCard from './CatalogCards'
import cls from './Main.module.css'
import SliderCard from './SliderCard'
import Solve from './Solve'
const Main = () =>{
    return (
        <>
            <div className={cls.slider_parent}>
                <div className="swiper-container mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className={cls.slider_picture1}>
                                <div>
                                    <p className={cls.slider_title}>Свет, который делает  интерьер уютнее</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={cls.slider_picture2}>
                                <div>
                                    <p className={cls.slider_title}>Свет, который делает  интерьер уютнее</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className={cls.slider_picture3}>
                                <div>
                                    <p className={cls.slider_title}>Свет, который делает  интерьер уютнее</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
            <MainCard/>
            <SliderCard/>
            <Solve/>
        </>
    )
}

export default Main