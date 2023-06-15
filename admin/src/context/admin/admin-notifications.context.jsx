import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AdminNotificationsContext = createContext({
    isNotificationOpen: null,
    setIsNotificationOpen: () => {},
    adminNotifications: [],
    setAdminNotifications: () => {},
    notificationCount: 0,
    setNotificationCount: () => {},
})

export const AdminNotificationsProvider = ({children}) => {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [adminNotifications, setAdminNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0)

    useEffect(() => {
        let count = adminNotifications.length;
        setNotificationCount(count)
    }, [adminNotifications])


    const value = {isNotificationOpen, setIsNotificationOpen, adminNotifications, setAdminNotifications, notificationCount, setNotificationCount}

    return (
        <AdminNotificationsContext.Provider value={value}>
            {children}
        </AdminNotificationsContext.Provider>
    )
}