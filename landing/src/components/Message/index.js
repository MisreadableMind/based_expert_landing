import React from 'react';

const Message = ({ sender, content }) => {
    return (
        <div className={`message ${sender}`}>
            <p>{content}</p>
        </div>
    );
};

export default Message;
