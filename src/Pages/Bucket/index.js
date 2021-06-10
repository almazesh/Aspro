import cls from './bucket.module.css'
import { Link } from 'react-router-dom'
const Bucket = () =>{
    return (
        <>
            <div className={cls.bucket_title}>
                <h1>Корзина</h1>
                <p>
                      Похоже, на данный момент у вас нет сохраненных моделей. <br/>
                      Чтобы начать добавлять в избранное, перейдите на страницу продукта и нажмите кнопку «Купить».           
                </p>
                
                <div className={cls.bucket_back}>
                    <Link to="/">Вернуться на "Главную"</Link>
                </div>
            </div>

        </>
    )
}

export default Bucket