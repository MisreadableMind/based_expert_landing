import React from 'react';
import './styles.css';
const ChatContainer = ({ children }) => {
    return (
        <div className="chat-container">
            {children}
        </div>
    );
};

export default ChatContainer;
