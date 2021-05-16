import React, {useState} from 'react'
import {Header} from '../header'
import styled from 'styled-components'
import {Modal} from '../../components/modal'

const Container = styled.div`
    padding: 0 150px;

    @media screen and  (max-width:960px) {
        padding: 0px 50px;
    }
`
function Layout({children}) {

    const [showModal, setShowModal] = useState(false)

    return (
        <Container>
            <Header onPressAuth={() => setShowModal(!showModal)} />
            {children}
         <Modal isOpen={showModal} onClose={() => setShowModal(false)} type='login' />
        </Container>
    )
}

export default Layout
