import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    
    user:{
        
        _id:"6157f05bc8ac291293a013fc",
        username:"mouli",
        email:"mouli@gmail.com",
        password:"$2b$10$Je9lM9WxqmKSQJhMR7Yn/eYOvfFN7UM5ziHddknO1gArdQJwy866m",
        profilePicture:"profile/mouli.jpg",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false,
        city:"Siliguri"
        
    },
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)
    
    return (
        <AuthContext.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}