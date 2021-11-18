// import Channel from "./Channels"
import s from "./channelItem.module.css";
// import foxLogo from '../../assets/img/foxNews/foxLogo.png'
// import foxBackground from '../../assets/img/foxNews/foxBackground.png'
// import foxTitle from '../../assets/img/foxNews/foxTitle.png'



export const ChannelItem = (props) => {

    return <div className={s.background}>
        <img className={s.backgroundImg} src={props.backgroundImg} alt="" />
        <div className={s.logo}>
            <img className={s.logoImg} src={props.logoImg} alt="" />
            </div>
        <div  className={s.title} >
            <img className={s.titleimg} src={props.titleImg} alt="" />
        </div>
    

    </div>

}