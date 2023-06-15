import {useState} from "react";
import { Link, Outlet } from 'react-router-dom';
import './topbar.styles.css'
import AdminSidebar from '../sidebar.component'
import NotificationPanel from '../admin-notification/notification.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from "react";
import { AdminAuthContext } from "../../../context/admin/auth.context";
import { AdminNotificationsContext } from "../../../context/admin/admin-notifications.context";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  @media (min-width: 800px) {
    width: ${props => props.width};
  transition: all 0.35s ease-in-out;  
  }
`

const Topbar = () => {
  // const [ isSidenavOpen, setIsSidenavOpen ] = useState(false)

  const {isAdminLogin, setIsAdminLogin, isSidebarOpen, setIsSidebarOpen} = useContext(AdminAuthContext)
  const {notificationCount, isNotificationOpen, setIsNotificationOpen} = useContext(AdminNotificationsContext)


  const sidebarToggle = () => {
    console.log('working', isSidebarOpen)
    setIsSidebarOpen(!isSidebarOpen)
  }

  // notification panel
  const notificationToggle = () => {
    setIsNotificationOpen(!isNotificationOpen)
  }

  const handleLogOut = () => {
    localStorage.removeItem("admin")
    setIsAdminLogin(false)
  }

  return (
    <Container width={isSidebarOpen ? 'calc(100% - 281px)' : '100%'} >
      <div className='container'>
        <div className="nav admin-dark-bg">
        <AdminSidebar />
          <div className="nav-wrapper m-auto w-95 sm-w-90 pt-2 ">
            <span className='cta-btn-text f-size-1 cursor-p' onClick={sidebarToggle}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </span>
            <Link href='https://github.com' className='cta-btn-text decoration-none pl-2 f-weight-400 f-size-1'>Admin Panel</Link>
            <div className='navbar-right-icons'>
            <NotificationPanel notificationToggle={notificationToggle} />
              <span className='cta-btn-text f-size-1 pr-2' style={{cursor: 'pointer', position: 'relative'}} onClick={notificationToggle}>
                <FontAwesomeIcon icon="fa-solid fa-bell" />
                {(notificationCount > 0) && <div className='notification-count'>{notificationCount}</div>}
              </span>
              {
                isAdminLogin ? (
                  <Link to='/admin-login' onClick={handleLogOut} className='cta-btn-text f-size-1'>
                    <FontAwesomeIcon icon="fa-solid fa-power-off" />
                  </Link>
                ) : (
                  <Link to='/admin-login'  className='cta-btn-text f-size-1'>
                    <FontAwesomeIcon icon="fa-solid fa-user" />
                  </Link>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Container >
  );
};

export default Topbar;

