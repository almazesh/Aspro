import cls from './singleProject.module.css'
import Form from '../../../Components/form/form'
const singleProject = () =>{
    return (
        <>
            <div className={cls.slider_parent}>
                <div className="swiper-container mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className={cls.slider_picture1}>
                                <div className={cls.banner_title}>
                                    <p className={cls.slider_title}>Офис HTML Academy</p>
                                    <p className={cls.slider_title_span}>Проекты {' > '} Офис "HTML Academy"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.swiper_button_next +" swiper-button-next"}></div>
                    <div className={cls.swiper_button_prev +" swiper-button-prev"}></div>
                </div>
            </div>

            <div className={cls.singleProject_banner}>
                <div className={cls.singleProject_inline}>
                    <div className={cls.singleProject_left}>
                        <div className={cls.left_inline2}>
                            <div>
                                <p className={cls.left_list}>Адрес</p>
                            </div>
                            <div>
                                <p className={cls.right_list}>Санкт-Петербург, Набережная реки <br/> Карповки, д.5,литера П</p>
                            </div>
                        </div>
                        <div className={cls.left_inline3}>
                            <div>
                                <p className={cls.left_list}>Дизайн интерьера</p>
                            </div>
                            <div>
                                <p className={cls.right_list}>Екатерина Турбина (www.kateturbina.com)</p>
                            </div>
                        </div>
                        <div className={cls.left_inline4}>
                            <div>
                                <p className={cls.left_list}>Выполненные работы</p>
                            </div>
                            <div>
                                <p className={cls.right_list}>Светотехнический расчет,подбор оборудования, <br/> поставка оборудования</p>
                            </div>
                        </div>
                        <div className={cls.left_inline5}>
                            <div>
                                <p className={cls.left_list}>Мененджер проекта</p>
                            </div>
                            <div>
                                <p className={cls.right_list}>Дина Кусаинова</p>
                            </div>
                        </div>
                        <div className={cls.left_inline6}>
                            <div>
                                <p className={cls.left_list}>Инженер-светотехник</p>
                            </div>
                            <div>
                                <p className={cls.right_list}>Руслан Ковенков</p>
                            </div>
                        </div>
                        <div className={cls.left_inline7}>
                            <div>
                                <p className={cls.left_list}>Площадь</p>
                            </div>
                            <div>
                                <p className={cls.right_list}>856 кв.м</p>
                            </div>
                        </div>
                        <div className={cls.left_inline8}>
                            <div>
                                <p className={cls.left_list}>Год</p>
                            </div>
                            <div>
                                <p className={cls.right_list}>2019</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.singleProject_right}>
                        <div>
                            <p>
                                Проект офиса HTML Academy.  Компания занимается онлайн-курсами для разработчиков разного уровня. Для начинающих — интерактивные курсы по веб-разработке; для тех, кто хочет сменить профессию — профессиональные курсы по вёрстке, React.js, PHP и Node.js.
                            </p>
                        </div>
                        <div>
                            <p>
                              Пространство организовано по принципу Open Space и разделено на несколько функциональных зон: рабочие группы, лаундж-зоны, кухня, переговорные. Общее настроение задает монохромная цветовая палитра. Доминирующий цвет — белый, с включением ярких желтых элементов. Дизайнеру удалось создать функциональный и лаконичный интерьер, который можно с легкостью трансформировать под потребности компании.
                            </p>
                        </div>
                        <div>
                            <p>
                            Освещение поддерживает дизайн-концепцию проекта. Над рабочими столами и в проходах использованы линейные светильники aledo. Отражающийся от белых поверхностей свет увеличивает пространство, подчеркивает минималистичный образ и создает ощущение дополнительного воздуха. В лаундж-зонах задействованы трековые светильники UNE, диммируемые по TRIAC. В офисной кухне — JACK 50.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <Form />
        </>
    )
}

export default singleProject