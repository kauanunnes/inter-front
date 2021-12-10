import { HeaderWrapper, HeaderContainer, UserInfo } from './styles';
import logo from '../../assets/images/inter-logo.png'
import { useNavigate } from 'react-router-dom'
import UserCircle from '../UserCircle';

import useAuth from '../../hooks/useAuth'
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();

  const {user} = useAuth()

  const handleLogout = () => {
    navigate('/')
  }

  const [initials, setInitials] = useState(() => {
    if (user) {
      return `${user.firstName.substr(0, 1)}${user.lastName.substr(0, 1)}`
    }
    return ''
  })


  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} alt="" width={172} height={61} />
        <UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>Olá, <span className="primary-color font-bold">{user.firstName} {user.lastName}</span></p>
            <strong>{user.accountNumber}-{user.accountDigit}</strong>
            <br />
            <a className="primary-color font-bold" href="#" onClick={handleLogout}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header