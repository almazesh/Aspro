import cls from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cls.root}>
            <div className={cls.ldsRipple}><div></div><div></div></div>
        </div>
    )
}

export default Loader