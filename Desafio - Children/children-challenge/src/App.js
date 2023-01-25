// import logo from './logo.svg';
import './App.css';
import Post from './components/Post/post';
import PostContent from './components/PostContent/postconent';
import PostContent2 from './components/PostContent2/postContent2';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Post children={<PostContent text='Esse aqui é o conteúdo que substituí o children'/>}/>
        <Post children={<PostContent children={<PostContent2 title='Esse aqui é o conteúdo que substituí o children'/>} text='É possível adicionar mais de uma tag'/>}/>
        <Post children={<PostContent text='Kenzie'/>}/>       
      </div>
    </div>
  );
}

export default App;
