import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <img
                src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg"
                alt=""
            ></img>
            <div className={s.desctiptionBlock}>Ava + description</div>
        </div>
    );
};

export default ProfileInfo;
