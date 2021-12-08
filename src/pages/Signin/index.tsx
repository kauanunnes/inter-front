import React from 'react';
import { Wrapper, Background, ButtonContainer, InputContainer } from './styles'
import background from '../../assets/images/home-page.png'
import logo from '../../assets/images/inter-logo.png'
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const Signin= () => {

    const navigate = useNavigate()

    const handleToSignIn = () => {
      navigate('/dashboard')
    }

    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
              <img src={logo} alt="logo inter" width={172} height={61} />
              <InputContainer>
                <Input placeholder="EMAIL" type="text" />
                <Input placeholder="SENHA" type="password" />
              </InputContainer>
              <ButtonContainer>
                <Button type="button" onClick={handleToSignIn}>
                  ENTRAR
                </Button>
                <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se já</Link></p>
              </ButtonContainer>
            </Card>            
        </Wrapper>
    )
}

export default Signin;