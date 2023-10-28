import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Post from './Components/Post';
import PostNew from './Components/PostNew';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <header><Link to="/">Twitter clone</Link></header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Post/New' element={<PostNew />}/>
        <Route path='/Post/:id' element={<Post />}/>
        <Route path='/Profile' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;