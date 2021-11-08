// React, Hooks
import React, { useState } from "react";

const NotificationContext = React.createContext({
    isDisplayed: false,
    displayMsg: (type, msg) => { },
    onClose: () => { },
});

export default NotificationContext;

export const NotificationContextProvider = ({ children }) => {
    const [msg, setMsg] = useState('');
    const [type, setType] = useState('');
    const [isDisplayed, setIsDisplayed] = useState(false);

    let timer;

    const displayHandler = (type, msg) => {
        setType(type);
        setMsg(msg);
        setIsDisplayed(true);
        timer = setTimeout(() => {
            closeHandler();
        }, 3000); // close snackbar after 5 seconds
    };

    const closeHandler = () => {
        clearTimeout(timer);
        setIsDisplayed(false);
    };

    return (
        <NotificationContext.Provider
            value={{
                type,
                msg,
                isDisplayed,
                displayMsg: displayHandler,
                onClose: closeHandler,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};