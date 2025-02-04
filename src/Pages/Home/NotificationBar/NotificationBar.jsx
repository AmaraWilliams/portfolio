import React, { useState } from 'react';
import '../NotificationBar/NotificationBar.css'

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="notification-bar">
        <span>This site is undergoing revision and some links may not work.</span>
        <button className="close-btn" onClick={handleClose}>X</button>
      </div>
    )
  );
};

export default NotificationBar;
