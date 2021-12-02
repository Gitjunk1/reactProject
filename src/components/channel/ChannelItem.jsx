
import s from "./ChannelItem.module.css";




export const ChannelItem = (props) => {

    return <div className={s.background}>
        <div className={s.overall}>
            <div className={s.logo}>
                <img className={s.logoImg} src={props.logoImg} alt="" />
            </div>
            <div  className={s.title} >
                <img className={s.titleimg} src={props.titleImg} alt="" />
            </div>
        </div>

    </div>

}