import React from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import theme from '../../theme';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 25px 0;
  align-items: center;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const NavLink = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #23262f;
  font-size: 13px;
  cursor: pointer;
  margin-right: 40px;
  line-height: 1.2;

  &:hover {
    color: blue;
  }

  :last-child {
    margin-right: 0;
  }
`;
const ButtonContainer = styled.div`
  height: 100%;
  align-self: center;
`;
const NavButton = styled(Button)`
  border-radius: 15px;
`;

const Logo = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #23262f;
  font-size: 27px;
`;

// const Line = styled.div`
//     width: 10%;
//     height: 10%;
//     background-color: red;
// `;

const navLinks = [
  {
    id: 1,
    name: 'Discover',
  },
  {
    id: 2,
    name: 'Something',
  },
];

function Header({ onPressAuth, isLoggedIn }) {
  return (
    <HeaderContainer>
      <HeaderRow>
        <Logo>Imagr</Logo>
        {/* <Line />  */}
        <NavContainer>
          {navLinks.map((n) => {
            return <NavLink key={n.id}>{n.name}</NavLink>;
          })}
        </NavContainer>
        <ButtonContainer>
          <NavButton
            onClick={onPressAuth}
            colorScheme={isLoggedIn ? 'red' : 'blue'}
            size="md"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </NavButton>
        </ButtonContainer>
      </HeaderRow>
    </HeaderContainer>
  );
}

export default Header;
