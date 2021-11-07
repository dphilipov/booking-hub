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

    const displayHandler = (type, msg) => {
        setType(type);
        setMsg(msg);
        setIsDisplayed(true);
        const timer = setTimeout(() => {
            closeHandler();
            clearTimeout(timer);
        }, 5000); // close snackbar after 5 seconds
    };

    const closeHandler = () => {
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