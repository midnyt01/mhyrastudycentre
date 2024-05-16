import React, { useContext } from 'react';
import './admin-table.style.css'
import { AdminAuthContext } from '../../../context/admin/auth.context';

const AdminTable = ({ admins }) => {

  const {handleRemoveAdmin} = useContext(AdminAuthContext)

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Admin ID</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {admins.length > 0 && admins.map(admin => (
          <tr key={admin.AdminId}>
            <td>{admin.AdminId}</td>
            <td>{admin.FirstName}</td>
            <td>{admin.Email}</td>
            <td>
              {/* Conditionally render the button based on admin ID */}
              {admin.AdminId === 1 || admin.AdminId === 2 || admin.AdminId === 3 ? (
                <button disabled>Remove</button>
              ) : (
                <button onClick={() => handleRemoveAdmin(admin.AdminId)}>Remove</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;