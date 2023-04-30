import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} />);
    
    let newPostElement = React.createRef(); // создаем ссылку на объект

    let addPost = () => {
        let text = newPostElement.current.value; // обращаемся к html элементу 
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
