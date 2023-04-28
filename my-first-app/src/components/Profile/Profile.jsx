import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg" alt=""></img>
      <div>Ava + description</div>
      <MyPosts />
    </div>
  );
}

export default Profile;