import cls from './Solve.module.css'
const Solve = () =>{
    return (
        <>
            <div className={cls.solve_banner}>
                <div className={cls.solve_inline}>
                    <div className={cls.solve_left_block}>
                        <div>
                            <h1>Отраслевые <br/> решения</h1>
                        </div>
                        <div className={cls.solve_left_watch}>
                            <span>Смотреть все категории</span>
                        </div>
                        <div>
                            <p>
                                Посмотрите решения для освещения различных типов обьектов. В них описаны особенности ,которые выжно учесть при создании систем освещения для формирования комфортно среды
                            </p>
                        </div>
                    </div>
                    <div className={cls.solve_right_block}>
                        <div className={cls.solve_right_block_inline}>
                            <div className={cls.solve_card}>
                                <img src="https://www.officelovin.com/wp-content/uploads/2019/10/lechte-corporation-office-mm-1.jpg"/>
                                <div>
                                    <p>Магазины <br/> и торговые центры</p>
                                </div>
                            </div>
                            <div className={cls.solve_card}>
                                <img src="https://i.pinimg.com/originals/8d/28/7f/8d287ff6d856f13aa9d88c7ea19fa32f.jpg"/>
                                <div>
                                    <p>Бизнес центры</p>
                                </div>
                            </div>
                            <div className={cls.solve_card}>
                                <img src="https://i.pinimg.com/originals/a1/97/8c/a1978cf1a76a475b7df92d7aca6ef334.jpg"/>
                                <div>
                                    <p>Рестораны и кафе</p>
                                </div>
                            </div>
                            <div className={cls.solve_card}>
                                <img src="https://officesnapshots.com/wp-content/uploads/2020/02/itoki-corporation-offices-tokyo-9-700x467.jpg"/>
                                <div>
                                    <p>Магазины <br/> и торговые центры</p>
                                </div>
                            </div>
                            <div className={cls.solve_card}>
                                <img src="http://retaildesignblog.net/wp-content/uploads/2017/05/Zigvy-Corporation-Office-by-ARCH.A-StudiO-Ho-Chi-Minh-City-Vietnam.jpg"/>
                                <div>
                                    <p>Магазины <br/> и торговые центры</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solve