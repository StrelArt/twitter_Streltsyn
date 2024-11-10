const Avatar = ({size, user, avatar, setAvatar}) => {

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