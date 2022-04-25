import { createContext, ReactNode, useState } from "react";
import { api } from './../services/api';

type signICredentials ={
    email: string,
    password:string
}

type AuthContextData ={
    signIn(credentials: signICredentials): Promise<void>
    isAuthenticated: boolean
}

type AuthProviderProps ={
    children: ReactNode
}

type User = {
    email:string,
    permissions: string[],
    roles: string[]
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider( { children }: AuthProviderProps){
    
    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user

    async function signIn({ email, password}: signICredentials){
       
        try {
            const response = await api.post('sessions', {email, password})
            const { token, refreshToken,  permissions, roles} = response.data
            sessionStorage.setItem('token', JSON.stringify(token));
            setUser({email,permissions, roles})
         
        } catch (error) {
            console.log('Erro signIn', error)
        }
    }

    return(
        <AuthContext.Provider value={{signIn ,  isAuthenticated}}>
            { children }
        </AuthContext.Provider>
    )

}