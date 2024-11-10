import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";


const Body = ({user, stats, avatar, setAvatar}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} stats={stats} avatar={avatar} setAvatar={setAvatar} />
            <Content user={user} stats={stats} />
        </div>
    );
};

export default Body;