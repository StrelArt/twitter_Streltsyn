import Avatar from "./Avatar.jsx";


const Stats = ({user, stats, avatar, setAvatar}) => {
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user} avatar={avatar} setAvatar={setAvatar} />
                {user.name}
            </div>
            <div className={'stats'}>
                <div>
                    Followers: {stats.followers}
                </div>
                <div>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;