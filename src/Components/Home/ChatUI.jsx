import React from 'react';
import './ChatUI.css';

const ChatUI = () => {
  return (
    <div className="chat-ui">
      <div className="header">
        <h1>Chat</h1>
        <span className="ui-kit">UI kit.</span>
        <div className="buttons">
          <button className="btn btn-outline-primary">free</button>
          <button className="btn btn-outline-primary">variants</button>
          <button className="btn btn-outline-primary">auto layout</button>
        </div>
      </div>
      <div className="avatars">
        <div className="avatar" style={{ backgroundImage: 'url(avatar1.jpg)' }}></div>
        <div className="avatar" style={{ backgroundImage: 'url(avatar2.jpg)' }}></div>
        <div className="avatar" style={{ backgroundImage: 'url(avatar3.jpg)' }}></div>
      </div>
      <div className="chat-messages">
        <div className="message">
          <div className="message-header">Jav <span>Engineering</span></div>
          <div className="message-content">I'm down! Any ideas??</div>
        </div>
        <div className="message">
          <div className="message-header">Team Unicorns</div>
          <div className="message-content">Hi team 👋</div>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
