import { useState } from "react";

function Post() {
    const [likes, setLikes] = useState(0);
    const [topic, setTopic] = useState("topic");
    const [text, setText] = useState("text");

    return(
        <>
            <h5>{topic}</h5>
            <p>{text}</p>
        </>
    );
}

export default Post;