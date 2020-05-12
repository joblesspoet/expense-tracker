import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';

export const GlobalContext = createContext();
const initialState = {
    transactions: []
}
const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer,initialState)

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = (data) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: data
        })
    }

    return (
    <GlobalContext.Provider value={{
                transactions: state.transactions, 
                deleteTransaction,addTransaction
            }} 
    >
        { children }
    </GlobalContext.Provider>)
}



export default GlobalProvider
