import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";


const Body = ({user, stats}) => {
    return (
        <div className={'body'}>
            <Sidebar user={user} stats={stats} />
            <Content user={user} stats={stats} />
        </div>
    );
};

export default Body;