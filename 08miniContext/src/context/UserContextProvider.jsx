import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){

    // children is any html which comes.
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;