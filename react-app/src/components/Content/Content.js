import About from './About/About';
import s from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import Home from './Home/Home';
import Contacts from './Contacts/Contacts';
import {Routes, Route} from "react-router-dom";

const Content = (props) => {
  return (
      <div className={s.content}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Posts' element={<MyPosts posts={props.posts} addPost={props.addPost} />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Routes>
      </div>
  );
}

export default Content;
