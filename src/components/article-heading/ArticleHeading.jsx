import s from './ArticleHeading.module.css'


function ArticleHeading(props) {
    return (
    <div className={s.ArticleHeading}>
        <div className={s.title}>{props.title}</div>
    </div>
    );
}


export default ArticleHeading;