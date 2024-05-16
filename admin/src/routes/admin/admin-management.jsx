import React, { useContext, useEffect, useState } from "react";
import AdminTable from "../../component/admin-panel-components/admin-table/admin-table";
import styled from "styled-components";
import Topbar from "../../component/admin-panel-components/admin-topbar/topbar.component";
import { AdminAuthContext } from "../../context/admin/auth.context";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto;
`;

const AdminManagement = () => {
  // const [admins, setAdmins] = useState([
  //   { AdminId: 1, FirstName: "John", Email: "john@example.com" },
  //   { AdminId: 2, FirstName: "Jane", Email: "jane@example.com" },
  // ]);

  const {admins, setAdmins} = useContext(AdminAuthContext)


  const handleRemoveAdmin = (adminId) => {
    const updatedAdmins = admins.filter((admin) => admin.id !== adminId);
    setAdmins(updatedAdmins);
  };

  return (
    <div>
      <Container>
        <Topbar />
        <Wrapper>
          <h2>Admin Management</h2>
          <AdminTable admins={admins} />
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminManagement;
