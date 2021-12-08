import React from 'react';
import { Wrapper, Background, ButtonContainer, InputContainer } from './styles'
import background from '../../assets/images/home-page.png'
import logo from '../../assets/images/inter-logo.png'
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate()

    const handleToSignUp = () => {
      navigate('/dashboard')
    }

    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
              <img src={logo} alt="logo inter" width={172} height={61} />
              <InputContainer>
                <Input placeholder="NOME" type="text" />
                <Input placeholder="SOBRENOME" type="text" />
                <Input placeholder="EMAIL" type="text" />
                <Input placeholder="SENHA" type="password" />
                <Input placeholder="CONFIRMAR SENHA" type="password" />
              </InputContainer>
              <ButtonContainer>
                <Button type="button" onClick={handleToSignUp}>
                  CADASTRAR
                </Button>
                <p>Já tem uma conta? <Link to="/signin">Entre já!</Link></p>
              </ButtonContainer>
            </Card>            
        </Wrapper>
    )
}

export default Signup;