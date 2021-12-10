import React, {useEffect, useState} from 'react';

import { Wrapper, Background, ButtonContainer, InputContainer } from './styles'
import background from '../../assets/images/home-page.png'
import logo from '../../assets/images/inter-logo.png'
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth'

const Signin= () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const {userSignIn} = useAuth()

  const handleToSignIn = async () => {
    const data = {
      email,
      password
    }
    
    const response = await userSignIn(data)

    if (response.id) {
      navigate('/dashboard')
      return
    }
  }


    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
              <img src={logo} alt="logo inter" width={172} height={61} />
              <InputContainer>
                <Input placeholder="EMAIL" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="SENHA" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
              </InputContainer>
              <ButtonContainer>
                <Button type="submit" onClick={handleToSignIn}>
                  ENTRAR
                </Button>
                <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se já</Link></p>
              </ButtonContainer>
            </Card>            
        </Wrapper>
    )
}

export default Signin;