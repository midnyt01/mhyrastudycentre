import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { CustomerColumn } from '../../../tabledata';
import { useState } from 'react';
import ConfirmDelete from '../delete-confirm/delete-confirm.component';
import { useContext } from 'react';
import { CustomersContext } from '../../../context/admin/customers.context';

const Container = styled.div`
width: 100%;
position: relative;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 50px;
  box-sizing: border-box;
  padding: 30px 10px;
  @media (min-width: 800px) {
    width: 90%;
  }
`;
const StyledBox = styled(Box)`
  box-shadow:
    0.4px 2px 1.6px rgba(0, 0, 0, 0.017),
    0.9px 4.5px 3.6px rgba(0, 0, 0, 0.024),
    1.6px 7.9px 6.3px rgba(0, 0, 0, 0.03),
    2.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    3.9px 19.3px 15.5px rgba(0, 0, 0, 0.04),
    6px 30.1px 24.1px rgba(0, 0, 0, 0.046),
    10px 50px 40px rgba(0, 0, 0, 0.053),
    20px 100px 80px rgba(0, 0, 0, 0.07);
`;

const StyledDataGrid = styled(DataGrid)`
  .MuiDataGrid-row:nth-child(even) {
    background-color: rgb(223, 239, 255);
  }

  .MuiDataGrid-row:nth-child(odd) {
    background-color: #fff;
  }

  .MuiDataGrid-colCellTitle {
    background-color: #3f51b5;
    color: #fff;
  }
`;

const TitleContainer = styled.div``;

const Title = styled.h1`
    margin-bottom: 10px;
`;
const Subtitle = styled.p`
  margin-top: 0;
  text-decoration: underline;
  color: coral;
  margin-bottom: 30px;
`
const DeleteCell = styled.div`
  box-sizing: border-box;
  padding: 7px 20px;
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  cursor: pointer;
`

const AdminCustomer = () => {
  const { customerRows, setCustomerRows } = useContext(CustomersContext);
  console.log({customerRows})

  const [deleteId, setDeleteId] = useState(null);
  const [confirmDelete, setIsConfirmDelete] = useState(false);

  const handleDelete = (id) => {
    setIsConfirmDelete(!confirmDelete)
    setDeleteId(id)
    // setData(data.filter((item) => item.id !== id));
  };

  const handleConfirmDelete = () => {
    setCustomerRows(customerRows.filter((item) => item.UserId !== deleteId));
    setIsConfirmDelete(false);
  }
  const handleCancleDelete = () => {
    setIsConfirmDelete(false);
  }
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <DeleteCell>
            <div className="deleteButton"
              onClick={() => handleDelete(params.row.UserId)}
            >
              Delete
            </div>
          </DeleteCell>
        );
      },
    },
  ];

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Customers</Title>
          <Subtitle>View and manage your customers</Subtitle>
        </TitleContainer>
        <StyledBox sx={{ height: 630, width: "100%" }}>
          <StyledDataGrid
            rows={customerRows}
            getRowId={(row) => row.UserId}
            columns={CustomerColumn.concat(actionColumn)}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </StyledBox>
      </Wrapper>
        <ConfirmDelete confirmDelete={confirmDelete} handleConfirmDelete={handleConfirmDelete} handleCancleDelete={handleCancleDelete} />
    </Container>
  );
};

export default AdminCustomer;