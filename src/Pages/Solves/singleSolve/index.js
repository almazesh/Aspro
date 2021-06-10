import cls from './singleProduct.module.css'
import Linear from '../../../assets/lights/linear.jpg'
import Ring from '../../../assets/lights/ring.jpg'
import Circle from '../../../assets/lights/Circle.jpg'
import ManyUgol from '../../../assets/lights/Many.jpg'
import X from '../../../assets/lights/X.jpg'
import SliderCard from '../../Main/SliderCard'
import Clip from '../../../assets/Solve/paperclip.png'
const singleSolve = () =>{
    return (
        <>
            <div className={cls.slider_parent}>
                <div className="swiper-container mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className={cls.slider_picture1}>
                                <div>
                                    <p className={cls.slider_title1}>Решения для ресторанов, <br/> кафе и баров</p>
                                    <p className={cls.slider_title_span1}>Решения  {' > '}Решения для ресторанов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.swiper_button_next +" swiper-button-next"}></div>
                    <div className={cls.swiper_button_prev + " swiper-button-prev"}></div>
                </div>
            </div>

            <div className={cls.solve_banner}>
                    <div className={cls.solve_inline}>
                        <div className={cls.solve_left}>
                            <div>
                                <p>Качественные световые решение в ресторанах,кафе и барах:</p>
                            </div>
                        </div>
                        <div className={cls.solve_right}>
                        <div className={cls.solve_right_inline}>
                            <div>
                                <h2>Создают</h2>
                                <p>узнаваемый образ и <br/>влияют на имидж заведения</p>
                            </div>
                            <div>
                                <h2>воздействуют</h2>
                                <p>на восприятие цвета и <br/>вкуса</p>
                            </div>
                            <div>
                                <h2>зонируют</h2>
                                <p>помещение и выгодно <br/>подчеркивают детали интерьера</p>
                            </div>
                            <div>
                                <h2>формируют</h2>
                                <p>атмосферу <br/>гостеприимства и задают настроение</p>
                            </div>
                            <div>
                                <h2>обеспечивают</h2>
                                <p>комфортную работу<br/>персонала</p>
                            </div>
                            <div>
                                <h2>меняются</h2>
                                <p>в зависимости от<br/>времени суток и <br/> привлекают клиентов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={cls.solve_description}>
                <div>
                    <h2>Описание</h2>
                    <p className={cls.solve_text}>
                         Серия функциональных подвесных светодиодных светильников с периметральной засветкой CUBE торговой марки БОСМА. Продуманный современный дизайн в сочетании с высокой эффективностью позволяет формировать уникальную и комфортную атмосферу в любом помещении. Важной особенностью технологии изготовления светильников серии CUBE является применение технологии сварки при изготовлении корпуса светильника, что позволяет получить цельнометаллический корпус без просветов в углах светильника. Разработано и производится в России.
                    </p>
                </div>
            </div>

            <div className={cls.solve_advise}>
                <h2>Рекомендуемые модели</h2>
            </div>



            <div className={cls.cards_parent}>
                <div className={cls.cards_inline}>
                    <div className={cls.card}>
                        <img src={Linear}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro prymou
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Ring}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro ringo
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Circle}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro ellipse
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={ManyUgol}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro fellipse
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={X}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro figgro
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={Circle}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro ellipse
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={ManyUgol}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro fellipse
                            </p>
                        </div>
                    </div>
                    <div className={cls.card}>
                        <img src={X}/>
                        <div className={cls.card_title}>
                            <p>
                                Aspro figgro
                            </p>
                        </div>
                    </div>
                    
                </div>
           </div>


           <div className={cls.solve_project}>
                <div></div>
                <h2>Проекты</h2>
                <p>Смотреть все категории</p>
           </div>
           <SliderCard />
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
       
        </>
    )
}

export default singleSolve