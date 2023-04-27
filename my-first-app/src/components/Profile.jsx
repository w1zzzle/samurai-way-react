import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg"></img>
      <div>Ava + description</div>
      <div className={s.posts}>My post
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile;