import React, {useState} from 'react'
import {
    Modal as CModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Input,
  } from "@chakra-ui/react"

function Modal({isOpen, onClose, type}) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
        email,
        password
    })
}
   
    return (
        <>
      
      

      <CModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{type === 'login' ? 'Login Below' : "Register Now"}</ModalHeader>
          <ModalBody>
          <form onSubmit={handleSubmit} id='login'>
          <Input placeholder="Email" mb='5' onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type='submit' form='login' variant="ghost">{type === 'login' ? "Login" : 'Register'}</Button>
          </ModalFooter>
        </ModalContent>
      </CModal>
    </>
    )
}

export default Modal
