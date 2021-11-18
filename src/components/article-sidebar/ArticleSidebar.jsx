import s from './ArticleSidebar.module.css'


function ArticleSidebar(props) {
    return (
    <div className={s.ArticleSidebar}>
        <div className={s.title}>{props.title}</div>
    </div>
    );
}


export default ArticleSidebar;