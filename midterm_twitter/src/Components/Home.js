import { Link } from 'react-router-dom';
import Post from './Post';
import posts from './Posts';

function Home() {
    console.log(posts);
    posts.forEach((e)=>{document.getElementById("main").appendChild(<Post></Post>)});
    return(
        <>
            <nav><span>Search<input type='text'></input></span><Link to="/Profile">Profile</Link></nav>
            <div id="main">
            </div>
            <Link to="Post/New">New post</Link>
        </>
    )
}

export default Home;