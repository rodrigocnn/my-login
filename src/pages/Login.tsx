import React, {FormEvent, useContext, useState} from 'react';
import { Flex, Input, Button, Stack} from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext';
import {Redirect } from "react-router-dom";

function Login() {

  const [email, setEmail ] =  useState('');
  const [password, setPassword] = useState('');
  const {  signIn, isAuthenticated } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent){
    event.preventDefault()
    const data ={
      email, 
      password
    }
     await signIn(data)
   
  }

  if(isAuthenticated){
    return <Redirect to="/dasboard"/>
  }

  return (
   <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center" > 
      <Flex 
        onSubmit={handleSubmit}
        as="form" 
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
        >
          <Stack spacing="4">
            <Input 
              onChange={(e)=>setEmail(e.target.value)}
              name="email" 
              type="email" 
              focusBorderColor='pink.500'
              bgColor="gray.900"
              borderColor="gray.600"
              placeholder="Email"
            
              />
            <Input 
              onChange={(e)=>setPassword(e.target.value)}
              name="password" 
              type="password" 
              focusBorderColor='pink.500' 
              borderColor="gray.600"
              bgColor="gray.900"
              placeholder="Senha"
            />
            <Button type="submit" mt="6" colorScheme="pink">Entrar </Button>
          </Stack>
      </Flex> 

   </Flex>
  );
}

export default Login;