import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' like_count='3'/>
        <Post message="It's my first post" like_count='5'/>
      </div>
    </div>
  );
}

export default MyPosts;