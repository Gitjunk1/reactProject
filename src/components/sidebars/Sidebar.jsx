import s from './Sidebar.module.css';
import ArticleSidebar from '../article-sidebar/ArticleSidebar';

function Sidebar (props) {
   return (
   <article className={s.sidebar}>
      <img className={s.thumbnailImg} src={props.thumbnail} alt="" />
      <img className={s.iconImg} src={props.iconImg} alt="" />
      <img className={s.iconImg1} src={props.iconImg1} alt="" />
      <ArticleSidebar title={props.title}/>
   </article>
   );

}

export default Sidebar;
