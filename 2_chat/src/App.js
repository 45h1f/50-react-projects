import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
function App() {
    const projectID = 'f7686c29-486b-4970-81df-fac80cf2df5e';
    if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
        <ChatEngine
        height={'100vh'}
        width={'100vw'}
        projectID={projectID}
        userName={'ashif'}
        userSecret={'123456'}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        onNewMessage={()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        ></ChatEngine>
    </div>
  );
}

export default App;
