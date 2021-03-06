import cls from './order.module.css'
import PartnerForm from '../../Components/partnerForm/index'
const Order = () =>{
    return (
        <>
            <div className={cls.order_banner}>
                <div className={cls.order_title}>
                    <h1>Доставка по Городам</h1>
                    <p>Если у вас есть к нам деловое предложение, то отправьте его на почту: info@aspro.ru</p>
                </div>

                <div className={cls.order_moscow}>
                    <h1>Доставка по Москве</h1>
                    <div>
                        <p>Стоимость доставки в пределах КАД — 600 руб.</p>
                        <p>При сумме заказа от 35 000 руб, доставка в пределах КАД — бесплатно</p>
                    </div>
                    <div>
                        <p>Минимальная сумма заказа 10 000 руб.</p>
                        <p>Возможность и стоимость доставки за пределы КАД согласовывайте с нашими специалистами;</p>
                    </div>

                </div>

                <div className={cls.order_call}>
                    <h3>Самовывоз</h3>
                    <p>Вы можете получить свой заказ в нашем офисе по адресу Измайловский пр. 31/163.</p>
                    <p>
                        (Мы свяжемся с вами, после перемещения вашего заказа в шоу-рум. Как правило, это происходит на следующий день после получения оплаты на наш расчетный счет).
                    </p>
                    <div>
                        <p>Стоимость доставки по Москве и Московской области согласовывайте с нашими специалистами.</p>
                        <p>Минимальная сумма заказа 10 000 руб.</p>
                    </div>
                </div>

                <div className={cls.order_other}>
                    <h1>Доставка по другим странам России</h1>
                    <p>В другие города России доставка осуществляется транспортными компаниями:</p>
                </div>

                <div className={cls.order_street}>
                    <h2>“Карго”</h2>
                    <p>тел.: 8 (812) 326 80 80</p>
                    <p>cargo-express.ru/</p>
                </div>

                <div className={cls.order_bussines}>
                    <h2>“Деловые линии”</h2>
                    <p>тел.: 8 (812) 448 88 88</p>
                    <p>spb.dellin.ru</p>
                </div>

                <div className={cls.order_terminal}>
                    <h3>Доставка до терминалов отправки в Санкт-Петербурге бесплатная и осуществляется только при наличии 100% оплаты.</h3>
                    <p>Услуги транспортной компании оплачиваются напрямую при получении. Стоимость зависит от габаритов, веса и расстояния, на которое отправляется груз.</p>
                    <p>
                        Вы можете выбрать любую другую транспортную компанию.
                    </p>
                    <p>
                         Доставка до таких терминалов отправки в Санкт-Петербурге (не более 10 км. от МКАД) - 600 руб.
                    </p>
                </div>

                <div className={cls.order_cell}>
                    <h1>Оплата</h1>
                    <h2>Для Корпоративных клиентов</h2>
                    <p>После подбора оборудования мы выставим вам счёт, на основании которого вы произведете оплату;</p>
                </div>

                <div className={cls.order_often}>
                    <h2>Для частных клиентов</h2>
                    <div>
                        <p>В Санкт-Петербурге Вы можете оплатить ваш заказ банковской картой или наличными:</p>
                        <p>
                            в нашем офисе - Измайловский пр. д.31/163, цокольный этаж;
                        </p>
                        <p>
                            в нашем шоу-руме - Красногвардейская площадь, д. 3Е, этаж 3, секция Е3 087.
                        </p>
                    </div>

                    <div>
                        <p>В Москве Вы можете оплатить ваш заказ наличными в нашем офисе по адресу:</p>
                        <p>м. Павелецкая, Шлюзовая наб., д. 8, стр. 1, 1 этаж, офис 201а.</p>
                    </div>
                    <div>
                        <p>
                            Если вы находитесь в другом регионе, то мы выставим вам счёт, и вы сможете оплатить его в любом отделении Сбербанка, или используя ваш интернет-банк (при условии поддержки онлайн переводов юр. лицам вашим банком).
                        </p>
                    </div>
                </div>
            </div>  
        
            <PartnerForm />
        </>
    )
}

export default Order