import s from './Heading.module.css';
import ArticleHeading from '../article-heading/ArticleHeading';


function Heading (props) {
   return (
   <article className={s.heading}>
      <img className={s.iconImg} src={props.iconImg} alt="" />
       <ArticleHeading title={props.title}/>
      <img className={s.iconImg1} src={props.iconImg1} alt="" />
   </article>
   );

}

export default Heading;