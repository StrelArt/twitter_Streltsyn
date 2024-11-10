import Avatar from "./Avatar.jsx";


const Navigation = ({user, avatar, setAvatar}) => {
    return (
        <div className={'nav'}>
            <Avatar user={user} size={'small'} avatar={avatar} setAvatar={setAvatar} />

        </div>
    );
};

export default Navigation;