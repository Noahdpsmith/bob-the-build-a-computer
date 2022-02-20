import React, { createContext, useContext } from "react";

// create context
const BuildContext = createContext();

// create context provider
const BuildContextProvider = (props) => {
    console.log(props);
    return (
        <BuildContext.Provider value={12345}>
            {props.children}
        </BuildContext.Provider>
    )
}

// setup useContext helper to use the global context

const useBuildContext = () => useContext(BuildContext);

export { BuildContextProvider, useBuildContext };


// https://courses.bootcampspot.com/courses/744/external_tools/249