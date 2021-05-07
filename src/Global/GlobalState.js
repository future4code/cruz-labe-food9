import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) =>{

    const [cart, setCart] = useState([]);

    const states = { cart };
    const setters = { setCart };

    return(
        <GlobalStateContext.Provider value={{states,setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;