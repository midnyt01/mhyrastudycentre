import { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";
import { httpDeleteAdminById, httpGetAllAdmins } from "../../utils/nodejs/admin";

export const NavList = [
  {
    Id: 1,
    Title: "Main",
  },
  {
    Id: 2,
    Title: "Dashboard",
    Link: "/",
    Icon: "fa-house",
  },
  {
    Id: 3,
    Title: "Editor",
  },
  {
    Id: 4,
    Title: "Upload Course",
    Link: "/create-blog-post",
    Icon: "fa-laptop-code",
  },
  {
    Id: 5,
    Title: "All Course",
    Link: "/all-courses",
    Icon: "fa-laptop-code",
  },
  {
    Id: 6,
    Title: "Pages",
  },
  {
    Id: 7,
    Title: "Sample Paper",
    Link: "/admin-samplepaper",
    Icon: "fa-users",
  },
  {
    Id: 8,
    Title: "Leads",
    Link: "/leads",
    Icon: "fa-users",
  },
  {
    Id: 9,
    Title: "Reports",
    Link: "/reports",
    Icon: "fa-file-pen",
  },
  {
    Id: 10,
    Title: "Enquiries",
    Link: "/enquiries",
    Icon: "fa-phone",
  },
  {
    Id: 11,
    Title: "Create Account",
    Link: "/create-account",
    Icon: "fa-square-plus",
  },
  {
    Id: 12,
    Title: "Admin Management",
    Link: "/admin-management",
    Icon: "fa-people-roof",
  },
  {
    Id: 13,
    Title: "Site Settings",
    Link: "/site-settings",
    Icon: "fa-gear",
  },
];

export const AdminAuthContext = createContext({
  isAdminLogin: null,
  setIsAdminLogin: () => {},
  isSidebarOpen: null,
  setIsSidebarOpen: () => {},
  activeItem: null,
  setActiveItem: () => {},
  admins: [],
  setAdmins: () => {},
  handleRemoveAdmin: () => {},
});

export const AdminAuthProvider = ({ children }) => {
  const location = useLocation();

  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (window.innerWidth >= 800) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
    console.log("setting sidebar to true");
  }, []);

  useEffect(() => {
    // Get the current path from the URL
    const currentPath = location.pathname;

    // Find the item in the items array that matches the current path
    const currentItem = NavList.find((item) => item.Link === currentPath);

    // Update the activeItem state with the id of the matching item
    console.log("updating link");
    setActiveItem(currentItem ? currentItem.Link : activeItem);
  }, [location, activeItem]);

  useEffect(() => {
    const getAllAdmins = async () => {
      console.log("is admin login ?", isAdminLogin)
      if (isAdminLogin) {
        console.log("admin is login")
        const adminarray = await httpGetAllAdmins();
        console.log({adminarray});
        setAdmins(adminarray);
      }
    };
    getAllAdmins();
  }, [isAdminLogin]);

  const handleRemoveAdmin = async (AdminId) => {
    let adminremoved = await httpDeleteAdminById(AdminId);
    if (adminremoved.success) {
      const updatedAdmins = admins.filter((admin) => admin.AdminId !== AdminId);
      setAdmins(updatedAdmins);
    }
  }

  const value = {
    isAdminLogin,
    setIsAdminLogin,
    isSidebarOpen,
    setIsSidebarOpen,
    activeItem,
    setActiveItem,
    admins,
    setAdmins,
    handleRemoveAdmin,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
