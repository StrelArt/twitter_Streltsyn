import Stats from "./Stats.jsx";


const Sidebar = ({user, stats, avatar, setAvatar}) => {
    return (
        <div className={'sidebar'}>
            <Stats user={user} stats={stats} avatar={avatar} setAvatar={setAvatar} />
        </div>
    );
};

export default Sidebar;