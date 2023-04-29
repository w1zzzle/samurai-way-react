import s from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/213245707/original/66a67e36fe8227d15c8c310cc112b60e74af5d6f/design-avatar-cartoon-for-business-gaming-social-media.jpg" alt=""></img>
      {props.message}
      <div>
      <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;