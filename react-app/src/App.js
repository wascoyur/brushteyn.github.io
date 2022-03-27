import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = (props) => {
  return (
    <div className="main">
      <Header />
      <Nav />
      <Content posts={props.posts} addPost={props.addPost} />
    </div>
  );
}

export default App;
