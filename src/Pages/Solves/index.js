import cls from './solves.module.css'
import Mac from '../../assets/Solve/mac.jpg'
import Stol from '../../assets/Solve/stol.jpg'
import Cafe from '../../assets/Solve/cafe.jpg'
import {Link} from 'react-router-dom'
import Form from '../../Components/form/form'
import { useState , useEffect } from 'react'
import Loader from '../../Components/Loader'
const Solution = () =>{
    const [solve , setSolve] = useState(null)

    useEffect(() =>{
        fetch('http://217.25.90.3/api/decision/')
        .then(res => res.json())
        .then(base =>{
            setSolve(base)
        })
    } , [setSolve])
    return (
        <>
            <div className={cls.solve_title }>
                <p>Решения</p>
            </div>

            <div className={cls.solve_banner}>
                <div className={cls.solve_inline}>
                    {
                        (solve !== null && solve?.results.length !== 0) ? (
                            solve?.results.map(item=>(
                                <Link to='/single-solve' key={item.id}>
                                    <div className={cls.solve_card}>
                                        <img src={Mac}/>
                                        <div>
                                            <p>
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (solve === null) ? (
                            <h1><Loader/></h1>
                        )  : (
                            <h1>Данные отсутствуют</h1>
                        )
                    }
                </div>
            </div>
       
       
           <Form />
        </>

    )
}

export default Solution