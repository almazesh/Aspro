import cls from './project.module.css'
import First from '../../assets/Slider/1.png'
import Third from '../../assets/Slider/3.png'
import Second from '../../assets/Slider/2.png'
import Four from '../../assets/Slider/4.png'
import Form from '../../Components/form/form'
import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react'
import Loader from '../../Components/Loader'
const Project = () =>{
    const [project , setProject] = useState(null)
    useEffect(() =>{
        fetch('http://217.25.90.3/api/projects/')
        .then(res => res.json())
        .then(r =>{
            setProject(r)
        })
    } , [setProject])
    return (
        <>
            <div className={cls.project_title}>
                <p>Проекты</p>
            </div>

            <div className={cls.project_menu_banner}>
                <ul className={cls.project_menu_inline}>
                    <li>
                        Рестораны
                    </li>
                    <li>
                        Музеи и Галереи
                    </li>
                    <li>
                        Магазины
                    </li>
                    <li>
                        Офисы
                    </li>
                    <li>
                        Фасадное освещение 
                    </li>
                    <li>
                        Частные апартаменты
                    </li>
                    <li>
                        Отели
                    </li>
                    <li>
                        Кинотеатры
                    </li>
                </ul>
            </div>

            <div className={cls.project_banner_card}>
                <div className={cls.project_inline_card}>
                    {
                        (project !== null && project?.results.length !== 0) ? (
                            project?.results.map(item => (
                                <Link to="/singleProject" key={item.id}>
                                    <div className={cls.card}>
                                        <img src={item.image}/>
                                        <div>
                                            <h2>
                                                {item.name}
                                            </h2>
                                            <p>
                                                {item.description
                                                }
                                            </p>
                                        </div>
                                    </div>  
                                </Link>
                            ))
                        ) : (project === null) ? (
                            <h1><Loader /></h1>
                        ) : (
                            <h1>Данные отсутствуют.</h1>
                        )
                    }
                </div>
            </div>



            <Form />
        </>
    )
}

export default Project;