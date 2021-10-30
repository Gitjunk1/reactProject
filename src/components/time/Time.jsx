import s from './Time.module.css';
import clockIcon from "./../../assets/img/clock.svg";


function Time(props) {
    return (
        <div className={s.Time}>
              <img className={s.timeIcon} src={clockIcon} alt="" />
              <span className={s.timeText}>2:00 pm</span>
            </div>
    );
        }


  export default Time;