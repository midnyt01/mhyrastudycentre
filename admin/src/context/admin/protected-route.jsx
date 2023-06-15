import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { AdminAuthContext } from "./auth.context"
import styled from "styled-components";


const Container = styled.div`
  @media (min-width: 800px) {
    margin-left: ${props => props.left};
    transition: all 0.35s ease-in-out;
  }
`

export const ProtectedRoute = ({children}) => {

    const {isSidebarOpen} = useContext(AdminAuthContext)

    //Original Code

    const {isAdminLogin, setIsAdminLogin} = useContext(AdminAuthContext)
    
    useEffect(()=> {
        if (localStorage.getItem("admin")) {
            setIsAdminLogin(true)
        }
    },[isAdminLogin])


    if (localStorage.getItem("admin")) {
      return (
        <Container left={isSidebarOpen ? '280px': '0px'} >
            {children}
        </Container>
    )
        
    }
    return <Navigate to="/admin-login" />

    //Temp Code

    
}