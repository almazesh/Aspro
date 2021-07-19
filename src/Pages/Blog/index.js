import cls from './blog.module.css'
import PartnerForm from '../../Components/partnerForm/index'
const Blog = () =>{
    return (
        <>
            <div className={cls.blog_banner}>
                <div className={cls.blog_title}>
                    <h1>Блог</h1>
                    <p>Если у вас есть к нам деловое предложение, то отправьте его на почту: info@aspro.ru</p>
                </div>
                <div className={cls.blog_two_inline}>
                    <div className={cls.blog_left}>
                        <div className={cls.left_banner}></div>
                        <p>Международная выставка «Искусство света» – это проект, миссией которого является открытие и поддержка талантливых светодизайнеров, формирующих российское современное искусство.</p>
                      </div>
                    <div className={cls.blog_right}>
                        <div className={cls.right_banner}></div>
                        <p>Это не фуд-корт или базар: по словам создателей теперь это самый крупный фуд-молл в мире, претендующий на звание нового символа столицы.</p>
                    </div>
                </div>


                <div className={cls.blog_four_inline}>
                    <div className={cls.blog_card}>
                        <div className={cls.card_one}></div>
                        <p>Энтузиазм и эксперимент – вот два слова, которые наиболее точно характеризуют двухдневный фестиваль света и световой культуры LumiFest 2015. </p>
                    </div>
                    <div className={cls.blog_card}>
                        <div className={cls.card_two}></div>
                        <p>Совсем недавно под лозунгом «Так оживает пространство: цифровой – индивидуальный – сетевой» отгремела крупнейшая шестидневная выставка светотехники Light + Building 2016 во Франкфурте.</p>
                    </div>
                    <div className={cls.blog_card}>
                        <div className={cls.card_three}></div>
                        <p>Представляем вводную статью рубрики, которую мы хотим посвятить широкому кругу вопросов управления освещением.</p>
                    </div>
                    <div className={cls.blog_card}>
                        <div className={cls.card_four}></div>
                        <p>На многие вещи, связанные с повседневной деятельностью человека, зачастую влияет качество света—это давно известный факт. </p>
                    </div>
                </div>
            </div>


            <PartnerForm />
        </>
    )
}

export default Blog