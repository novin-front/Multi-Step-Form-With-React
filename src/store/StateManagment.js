import React,{useContext,useReducer} from 'react';

import {reducer,initState} from './reducer';

export const stateContext = React.createContext();

export const StateManager = ({children}) =>(
    <stateContext.Provider value={useReducer(reducer,initState)}>
        {children}
    </stateContext.Provider>
)

export const useStateData = ()=> useContext(stateContext);