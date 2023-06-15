import { createContext, useEffect, useState } from "react";
import Redface from "../assets/angry-bird-face-red.jpg"
import Blueblue from "../assets/angry-bird-face-blue.jpg"
import Greenface from "../assets/angry-bird-face-green.jpg"
import Yellowface from "../assets/angry-bird-face-yellow.jpg"
import Blackface from "../assets/angry-bird-face-black.jpg"

const USER_ICON_ARRAY = [Redface, Blueblue, Yellowface,Blackface]

export const GlobalContext = createContext({
  theme: null,
  setTheme: () => {},
  isSidebarOpen: null,
  setIsSidebarOpen: () => {},
  notification: [],
  setNotification: () => {},
  addNotifiction: () => {},
  removeNotification: () => {},
  isProfileInfoOpen: false,
  setIsProfileInfoOpen: () => {},
  isServiceCardOpen: false,
  setIsServiceCardOpen: () => {},
  userFace: null,
  isLogin: false,
  setIsLogin: () => {},
  userInfo: null,
});

export const GlobalProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [notification, setNotification] = useState([]);
  const [isProfileInfoOpen, setIsProfileInfoOpen] = useState(false);
  const [isServiceCardOpen, setIsServiceCardOpen] = useState(false);
  const [userFace, setUserFace] = useState("")
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({Name:"", Email:""});

  
  useEffect(() => {
    if (localStorage.getItem('admin')) {
      setIsLogin(true)
    }
  }, [])

  useEffect(() => {
    let newUser = {
        Name: localStorage.getItem('sf-user-name'),
        Email: localStorage.getItem('sf-user-email')
    }
    setUserInfo(newUser)
  },[isLogin])


//user faces
  useEffect(() => {
    function chooseRandomFace(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    setUserFace(chooseRandomFace(USER_ICON_ARRAY))
  }, [])

  useEffect(() => {

  },[])

  //add notification

  const addNotifiction = (id, type, message) => {
    let newNotification = {
      id,
      type,
      message,
    };
    setNotification([newNotification, ...notification]);
    setTimeout(() => {
      let notificationArray = notification.filter((noti) => {
        return noti.id != id;
      });
      setNotification(notificationArray);
    }, 3000);
  };

  //remove Notification

  const removeNotification = (id) => {
    let notificationArray = notification.filter((noti) => {
      return noti.id != id;
    });
    setNotification(notificationArray);
  };

  const value = {
    theme,
    setTheme,
    notification,
    setNotification,
    isSidebarOpen,
    setIsSidebarOpen,
    addNotifiction,
    removeNotification,
    isProfileInfoOpen,
    setIsProfileInfoOpen,
    isServiceCardOpen,
    setIsServiceCardOpen,
    userFace,
    isLogin,
    setIsLogin,
    userInfo,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
