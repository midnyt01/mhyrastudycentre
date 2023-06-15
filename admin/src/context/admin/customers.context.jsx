import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { httpGetAllCustomersInfo, httpGetAllLeadsInfo } from "../../utils/nodejs/admin";
import { AdminAuthContext } from "./auth.context";

export const CustomersContext = createContext({
  customerRows: [],
  setCustomerRows: () => {},
  leadRows: [],
  setLeadRows: () => {},
});

export const CustomersProvider = ({ children }) => {
  const { isAdminLogin } = useContext(AdminAuthContext);
  const [customerRows, setCustomerRows] = useState([]);
  const [leadRows, setLeadRows] = useState([]);

  useEffect(() => {
    const getCustomersArray = async () => {
      if (isAdminLogin) {
        const customersArray = await httpGetAllCustomersInfo();
        console.log(customersArray);
        setCustomerRows(customersArray);
      }
    };
    getCustomersArray()
  }, [isAdminLogin]);

    useEffect(() => {
    const getLeadArray = async () => {
      if (isAdminLogin) {
        const leadsArray = await httpGetAllLeadsInfo();
        setLeadRows(leadsArray);
      }
    };
    getLeadArray()
  }, [isAdminLogin]);

  const value = {leadRows, setLeadRows, customerRows, setCustomerRows };

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
