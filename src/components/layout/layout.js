import React, { useState } from 'react';
import { Header } from '../header';
import styled from 'styled-components';
import { Modal } from '../../components/modal';
import authApi from '../../firebase';

const Container = styled.div`
  padding: 0 140px;
  padding-bottom: 150px;

  @media screen and (max-width: 960px) {
    padding: 0px 50px;
  }
`;

function Layout({ children, isLoggedIn }) {
  const [showModal, setShowModal] = useState(false);

  const handleAuth = async () => {
    if (isLoggedIn) {
      await authApi.logOutUser();
    } else {
      setShowModal(!showModal);
    }
  };

  return (
    <Container>
      <Header isLoggedIn={isLoggedIn} onPressAuth={() => handleAuth()} />
      {children}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </Container>
  );
}

export default Layout;
