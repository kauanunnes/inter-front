import { HeaderWrapper, HeaderContainer, UserInfo } from './styles';
import logo from '../../assets/images/inter-logo.png'
import { useNavigate } from 'react-router-dom'
import UserCircle from '../UserCircle';

import useAuth from '../../hooks/useAuth'

const Header = () => {
  const navigate = useNavigate();

  const {user} = useAuth()

  const handleLogout = () => {
    navigate('/')
  }
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} alt="" width={172} height={61} />
        <UserInfo>
          <UserCircle initials="KN" />
          <div>
            <p>Olá, <span className="primary-color font-bold">{user.firstName} {user.lastName}</span></p>
            <strong>05392111-1</strong>
            <br />
            <a className="primary-color font-bold" href="#" onClick={handleLogout}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header