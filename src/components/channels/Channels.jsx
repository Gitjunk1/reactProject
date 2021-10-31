import s from './Channels.nodule.css'
// import thumbnail  from "./../../assets/img/foxNews.jpg";





function Channels(props) {
    return (
    <article className={s.channels}>
       <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
    </article>
    );
  }
  
  export default Channels;