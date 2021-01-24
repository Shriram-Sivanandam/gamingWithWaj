//building the data layer
//used to track the liked games and display them on the liked page

import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

//build a provider so that we can wrap the entire app in the provider and give acess to the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);