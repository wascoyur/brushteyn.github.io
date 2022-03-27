import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.myPosts__item}>
      <span>{props.id + 1 + ')'}</span>
      <img src={props.avaUrl} alt="img" />
      <span>{props.text}</span>
      <button>LIKE</button>
    </div>
  );
}

export default Post;
