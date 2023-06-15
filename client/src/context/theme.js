import React, { useContext } from 'react'
import { GlobalContext } from './global.context';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${props => props.theme == 'light' ? '#F3F3F3' : "#0c0c0c"};
    color: ${props => props.theme == 'light' ? 'black' : "white"};

    a {
        color: ${props => props.theme == 'light' ? 'black' : "white"};
    }
`;


const Theme = ({children}) => {

    const {theme} = useContext(GlobalContext)

  return (
    <Container theme={theme}>
        {children}
    </Container>
  )
}

export default Theme;