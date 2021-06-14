import cls from './company.module.css'
import PartnerForm from '../../Components/partnerForm/index'
const Company = () =>{
    return (
        <>  
            <div className={cls.company_banner}>
                <div className={cls.company_inline}>
                    <div className={cls.company_left}>
                        <h1>О компании</h1>
                        <p>ASPRO Light – российский производитель светильников для коммерческих и частных интерьеров. </p>
                        <p>Профессиональные световые решения.</p>
                    </div>
                    <div className={cls.company_right}>
                        <div className={cls.slider_parent}>
                        <div className="swiper-container mySwiper3">
                            <div className="swiper-wrapper">
                                <div className={cls.first_slide + " swiper-slide"}>Slide 1</div>
                                <div className={cls.first_slide + " swiper-slide"}>Slide 2</div>
                            </div>
                                <div className={cls.button_next + " swiper-button-next"}></div>
                                <div className={cls.button_prev + " swiper-button-prev"}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cls.company_aspro}>
                    <h1>ASPRO Light</h1>
                    <p>С 2013 года мы создаем свет от разработки концепции и назначения светильника, до создания системы освещения объекта. </p>
                    <p>Светильники ASPRO Light создают комфортную атмосферу любого пространства и дополняют интерьеры за счет современного индивидуального дизайна.</p>
                </div>


                <div className={cls.company_base}>
                    <h1>Данные о нас</h1>
                </div>


                <div className={cls.company_list}>
                    <ul>
                        <li>Год основания</li>
                        <li>Команда</li>
                        <li>Что делаем</li>
                        <li>Что освещаем</li>
                        <li>Где присутствуем</li>
                        <li>Производим</li>
                        <li>Освещаем</li>
                    </ul>
                    <ul>
                        <li>2013 год</li>
                        <li>50+ специалистов</li>
                        <li>производим профессиональное светотехническое оборудование, разрабатываем и реализуем проекты освещения.</li>
                        <li>объекты торговли, выставочные пространства, рестораны, бары и кафе, офисные пространства, жилые интерьеры, фасады зданий.</li>
                        <li>офисы продаж в Москве и Санкт-Петербурге.
                        Производственные площадки в России и Азии.</li>
                        <li>60 000 светильников в год.</li>
                        <li>100 000 кв. м площадей в год.</li>
                    </ul>
                </div>



                <div className={cls.company_sert}>
                    <h1>Сертификаты</h1>

                    <div className={cls.company_sert_inline}>
                        <div className={cls.sert_card}></div>
                        <div className={cls.sert_card}></div>
                        <div className={cls.sert_card}></div>
                        <div className={cls.sert_card}></div>
                    </div>
                </div>



                <div className={cls.company_foot_text}>
                    <h2>Поставка светотехнического оборудования</h2>
                    <p>Мы предлагаем только надежное оборудование с высокими светотехническими и эксплуатационными характеристиками и уникальным дизайном.</p>
                    <p>Мы тщательно выбираем производителей прежде, чем ввести их продукцию в нашу продуктовую линейку.</p>
                    <p>Для нас крайне важно, чтобы поставляемое оборудование отвечало самым высоким требованиям.</p>
                </div>

                <div className={cls.company_foot_text}>
                    <h2>Проектирование систем освещения</h2>
                    <p>Мы проектируем системы LED-освещения. В наших интересах разработать готовое решение, которое действительно станет вашим активом.</p>
                    <p>Ответственность за качество световой среды на вашем объекте наши специалисты возьмут на себя.</p>
                </div>

                <div className={cls.company_foot_text}>
                    <h2>Проектирование систем управления освещением</h2>
                    <p>Мы добиваемся чрезвычайно высокой энергоэффективности и степени автоматизации систем LED-освещения за счет внедрения передовых решений в области управления светом.</p>
                    <p>Работаем с интерфейсами DALI, DMX-512, KNX и прочими. Управление светодиодным освещением - наша сильная сторона.</p>
                </div>
            </div>

            <PartnerForm/>
        </>
    )
}
export default Company