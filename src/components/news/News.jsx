import s from './News.module.css';
import ArticleHeader from '../article-header/ArticleHeader';
import Label from '../label/Label';
import Time from '../time/Time';


function News(props) {
    return (
    <article className={s.news}>
        <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
        <ArticleHeader title={props.title}/>
        <Label label={props.label}/>
        <Time/>
    </article>
    );
  }
  
  export default News;