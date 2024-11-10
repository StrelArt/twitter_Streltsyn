import './App.css'

import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',

    });

    const [avatar, setAvatar] = useState('https://gravatar.com/avatar/000?d=monsterid');

    const [stats, setStats] = useState({
        followers: 10,
        following: 100,
    });


    return (

        <div className={'app'}>
            <Navigation user={user} avatar={avatar} setAvatar={setAvatar}/>
            <Body user={user} stats={stats} avatar={avatar} setAvatar={setAvatar}/>
        </div>

    )
}

export default App
