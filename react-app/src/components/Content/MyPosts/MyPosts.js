import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let allPosts = props.posts.map(function(item, i) {
    return <Post id={i} avaUrl={item.avaUrl} text={item.text} key={i} />
  });

  let newPostElement = React.useRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    if (!text) {
      return;
    }

    props.addPost(text);    
    newPostElement.current.value = "";    
  }

  return (
    <div className={s.myPosts}>
      <div className={s.myPosts__header}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.myPosts__body}>
        { allPosts }
      </div>
    </div>
  );
}

export default MyPosts;
