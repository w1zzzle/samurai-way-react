import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 6},
        {id: 2, message: "It's my first post", likesCount: 15}
    ]

    let postsElements = posts
        .map((p) => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
