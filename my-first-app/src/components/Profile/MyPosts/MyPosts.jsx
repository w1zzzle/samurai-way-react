import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement = React.createRef(); // создаем ссылку на объект

    let addPost = () => {
        props.dispatch({ type: 'ADD-POST' });
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = { type : 'UPDATE-NEW-POST-TEXT', newText: text }
        props.dispatch(action)
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;
