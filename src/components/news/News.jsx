import s from './News.module.css';
import ArticleHeader from '../article-header/ArticleHeader';
import Label from '../label/Label';
import Time from '../time/Time';


function News(props) {
    return (
    <article className={s.news}>
        <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
        <ArticleHeader title={props.title}/>
        <div className={s.wrapper}>
        <Label label={props.label}/>
        <Time/>
        </div>
    </article>
    );
  }
  
  export default News;