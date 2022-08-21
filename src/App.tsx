import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type MessageType = {
    message: string,
    addPostCallback: (message: string) => void
}

function App(props: any) {
    return (
          <div className='app-wrapper'>
              <Header />
              <Navbar />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={() => <Dialogs state={props.state.dialogsPage}/>}/>

                  <Route path='/profile'
                         render={() =>
                             <Profile
                                 profilePage={props.state.profilePage}
                                 addPost = {props.addPost}
                                 updateNewPostText={props.updateNewPostText} // 8
                             />
                         }/>
              </div>
          </div>)
}

export default App;
