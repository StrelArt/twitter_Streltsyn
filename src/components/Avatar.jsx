import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, avatar, setAvatar} = useContext(TwitterContext);

    const avatarOnClick = () => {
        const newAvatar = prompt('Enter new avatar image address:');
        if (newAvatar) {
            setAvatar(newAvatar);
        }
    };

    return (
        <img
            onClick={avatarOnClick}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={user.name}/>

    );
};

export default Avatar;