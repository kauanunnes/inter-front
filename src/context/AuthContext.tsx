import { AxiosResponse } from 'axios'
import {createContext, useEffect, useState, useCallback} from 'react'

import {SignInData, SignUpData, signIn, signUp, me} from '../services/resources/user'

interface UserDto {
  id: string,
  firstName: string,
  lastName: string,
  accountNumber: number,
  accountDigit: number,
  wallet: number,
  email: string,

}

interface ContextData {
  user: UserDto,
  userSignIn: (userData: SignInData) => Promise<UserDto> ,
  userSignUp: (userData: SignUpData) => Promise<UserDto>,
  me: () => Promise<AxiosResponse<UserDto, any>>
}

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider:React.FC = ({children}) => {

  const [user, setUser] = useState<UserDto>({} as UserDto)

  const getCurrentUser = async () => {
    const {data} = await me()
    setUser(data)
    return data as UserDto
  }

  const userSignIn = async (userData: SignInData) => {
    const {data} = await signIn(userData)

    if (data?.status === 'error') {
      return data
    }

    if (data.accessToken) {
      localStorage.setItem('@Inter:Token', data.accessToken)
    }
    return await getCurrentUser() as UserDto
  } 

  const userSignUp = async (userData: SignUpData) => {
    const {data} = await signUp(userData)
    localStorage.setItem('@Inter:Token', data.accessToken)
    return await getCurrentUser() as UserDto
  } 


  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, me}}>
      {children}
    </AuthContext.Provider>
  )
}
