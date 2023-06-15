import { Link } from 'react-router-dom';

import './notification-bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { AdminNotificationsContext } from '../../../context/admin/admin-notifications.context';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  position: absolute;
  right: 25px;
  width: 300px;
  max-height: 400px;
  top: ${props => props.top};
  visibility: ${props => props.visibility};
  opacity: ${props => props.opacity};
  z-index: 10;
  border-radius: 10px;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow:
  1.4px 1.1px 2.2px rgba(0, 0, 0, 0.028),
  3.3px 2.7px 5.3px rgba(0, 0, 0, 0.04),
  6.3px 5px 10px rgba(0, 0, 0, 0.05),
  11.2px 8.9px 17.9px rgba(0, 0, 0, 0.06),
  20.9px 16.7px 33.4px rgba(0, 0, 0, 0.072),
  50px 40px 80px rgba(0, 0, 0, 0.1)
;
`


const NotificationPanel = () => {

  const {isNotificationOpen, setIsNotificationOpen, notificationCount, setNotificationCount , adminNotifications, setAdminNotifications} = useContext(AdminNotificationsContext)

  const handleClearNotification = () => {
    setAdminNotifications([])
    setTimeout(() => {
      setIsNotificationOpen(false)
    }, 300);
  }

  const findAndRemove = (id) => {
    let newArray = adminNotifications
    for (let i = 0; i < newArray.length; i++) {
      if (adminNotifications[i].messageId === id) {
        newArray.splice(i, 1);
        break;
      }
    }
    setIsNotificationOpen(false)
    setAdminNotifications(newArray)
    let count = notificationCount;
    count--
    setNotificationCount(count)
  }



  return (
    <Container top={`${isNotificationOpen ? '60px' : '50px'}`} opacity={`${isNotificationOpen ? '1' : '0'}`} visibility={`${isNotificationOpen ? 'visible' : 'hidden'}`} >
      <div className='notification'>
        <ul className='pt-3 pb-2 pr-2'>
          <span onClick={()=> setIsNotificationOpen(false)} className='notification-close f-size-1'>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </span>
            {
              (adminNotifications.length === 0) ? (
                <p>
                  no new notification
                </p>
              ) : (
                <div>
                  {
                    adminNotifications.map((notification) => {
                      const {messageId, message, messageLink } = notification;
                      return (
                        <li key={messageId} onClick={() => findAndRemove(messageId)} value={messageId} ><Link to={messageLink}>{message}</Link></li>
                      )
                    })
                  }
                </div>
              )
            }
        <div onClick={handleClearNotification}>Clear All</div>
        </ul>
      </div>
    </Container>
  );
};

export default NotificationPanel;