import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { httpGetAllLeadsInfo, httpGetAllSamplePaperQueries } from "../../utils/nodejs/admin";
import { AdminAuthContext } from "./auth.context";

export const CustomersContext = createContext({
  studentRows: [],
  setStudentRows: () => {},
  leadRows: [],
  setLeadRows: () => {},
});

export const CustomersProvider = ({ children }) => {
  const { isAdminLogin } = useContext(AdminAuthContext);
  const [studentRows, setStudentRows] = useState([]);
  const [leadRows, setLeadRows] = useState([]);

  useEffect(() => {
    const getStudentsArray = async () => {
      if (isAdminLogin) {
        const studentsArray = await httpGetAllSamplePaperQueries();
        console.log(studentsArray);
        setStudentRows(studentsArray);
      }
    };
    getStudentsArray()
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

  const value = {leadRows, setLeadRows, studentRows, setStudentRows };

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
