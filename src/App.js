/*import logo from './logo.svg';*/
import './App.css';
import React, {useEffect, useState} from "react";
import { AUTHOR } from "./constants/common";
import Message from './Message';
import List from './List';
import Button from './components/Button';
import SendIcon from '@mui/icons-material/Send';
import Header from './components/Header';

import { Routes } from 'react-router-dom';




function App() {
const [messageList, setMessageList] = useState([]);
const [value, setValue] = useState('');



const handleClick = () => {
    if (value !== '') {
        const newMessage = {text: value, author: AUTHOR.me};
        setMessageList([...messageList, newMessage]);
        setValue('');
    }
}
const handleInput = (event) => {
    setValue(event.target.value);
}

useEffect( () => {
    let timerId;
    if (messageList.length > 0
        && messageList[messageList.length - 1].author !== AUTHOR.bot) {
            timerId = setInterval( () => {
                setMessageList([...messageList, newMessage]);
            }, 1500);
            const newMessage ={text: 'Ну, здравствуй!', author: AUTHOR.bot}
        }
        return () => {
            if (timerId)
            clearInterval(timerId);
        }
})

    return ( 
        <div className = "App">
         <Header />
        <header className = "App-header">
        <Routes />
        <List />
        <div className='messages'>
        <Message />
       
       
        <p className="Message-header">Сообщения</p>
        {messageList.map((element, index) => (
        <div key={index}>
            <p>{element.text}</p>
            <p>{element.author}</p>
        </div>))}
        <div className="input-block">
        <input autoFocus placeholder={'Сообщение'}  value={value} onChange={handleInput}/>
        <SendIcon onClick={handleClick}/>
         
        </div></div>
        </header> 
     1
        </div>
    );
   
}

export default App;