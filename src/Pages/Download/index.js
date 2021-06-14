import cls from './download.module.css'
import Light from '../../assets/lights/Circle.jpg'
import List from '../../assets/Product/List.png'
import Sertificate from '../../assets/Product/sert.png'
import Pasport from '../../assets/Product/pasport.png'
import PartnerForm from '.././../Components/partnerForm/index'
const Download = () =>{
    return (
        <>
            <div className={cls.download_banner}>
                <div className={cls.download_title}>
                    <h1>Скачать файлы</h1>
                    <p>Если у вас есть к нам деловое предложение, то отправьте его на почту: info@aspro.ru</p>
                </div>
                <div className={cls.download_inline}>
                    <div className={cls.download_card}>
                        <img src={Light}/>
                    </div>
                    <div className={cls.download_card}>
                        <img src={Light}/>
                    </div>
                    <div className={cls.download_card}>
                        <img src={Light}/>
                    </div>
                </div>

                <div className={cls.download_pocket}>
                    <h1>Пакет проектировщика</h1>

                    <div className={cls.download_docs}>
                        <img src={List}/>
                        <img src={Pasport}/>
                        <img src={Sertificate}/>
                    </div>
                </div>
            </div>

            <PartnerForm />
        </>
    )
}

export default Download