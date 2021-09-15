import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

const GlobalState = (props) =>{

    const [cart, setCart] = useState([]);
    const [id,setId]=useState(0);

    const states = { cart ,id};
    const setters = { setCart,setId };

    return(
        <GlobalStateContext.Provider value={{states,setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;