import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img className={s.header}
                src="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg"
                alt=""
            ></img>
            <div className={s.desctiptionBlock}>
                <img src={props.profile.photos.large} />
                Ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
