import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { BrowserRouter } from 'react-router-dom';
import { AUTHOR } from "../constants/common";

const initChats = {
    id1: {
        name: 'Chat 1',
        messagees: [
            {text: 'Message 1', author: AUTHOR.bot },
            {text: 'Привет', author: AUTHOR.me}
        ]
    },
    id2: {
        name: 'Chat 2',
        messages: [{ text: 'Message from chat 2', author: AUTHOR.me}]
    }
};

const Router = () => {
    const [chats, setChats] = useState(initChats);
    
const addMessage = (chatId, message) => {
    setChats( {
        ...chats,
        [chatId]: {
            name: chats[chatId].name,
            messages: [...chats[chatId].messages, message]
        }
    });
};
return (
    <BrowserRouter>
    <ul className={'menu'}>
        <li><link to="/">Home</link></li>
    </ul>
    </BrowserRouter>
);
}


<Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/" element={<Profile />} />

</Routes>
 export default Routes;