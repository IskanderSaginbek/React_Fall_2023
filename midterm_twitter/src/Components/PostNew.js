import { useContext, useState } from "react";
import posts from './Posts';

function PostNew() {
    const [topic, setTopic] = useState("topic");
    const [text, setText] = useState("text");

    return(
        <>
            <h1>New Post</h1>
                <label>Topic</label><br/>
                <input type="text" value={topic} onChange={(e)=>{setTopic(e.target.value)}}></input>
                <br/><br/>
                <label>Text</label><br/>
                <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
                <br/>
                <button onClick={()=>{let i = 0;
                                        posts.length > 0 ? i = posts[posts.length-1].id+1:i=0;
                                        posts.push(
                                            {
                                                "id": i,
                                                "topic": topic,
                                                "text": text
                                            }
                                        );
                                        console.log(i,topic,text);}}>Create</button>
        </>
    )
}

export default PostNew;