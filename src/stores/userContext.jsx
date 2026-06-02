import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserContext = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <userContext.Provider value={{ isOpen, setIsOpen, handleClick }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
