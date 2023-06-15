import styled from "styled-components";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Topbar from "../../component/admin-panel-components/admin-topbar/topbar.component";
import { LeadsColumns } from "../../tabledata";
import { useState } from "react";
import LeadMessage from "../../component/admin-panel-components/lead-message/lead-message.component";
import { useEffect } from "react";
import { useContext } from "react";
import { CustomersContext } from "../../context/admin/customers.context";



const Container = styled.div``;

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

const TitleContainer = styled.div``;

const Title = styled.h1`
    margin-bottom: 10px;
`;
const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  text-decoration: underline;
  color: coral;
`

const StyledBox = styled(Box)`
box-shadow:
  0.4px 2px 1.6px rgba(0, 0, 0, 0.017),
  0.9px 4.5px 3.6px rgba(0, 0, 0, 0.024),
  1.6px 7.9px 6.3px rgba(0, 0, 0, 0.03),
  2.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  3.9px 19.3px 15.5px rgba(0, 0, 0, 0.04),
  6px 30.1px 24.1px rgba(0, 0, 0, 0.046),
  10px 50px 40px rgba(0, 0, 0, 0.053),
  20px 100px 80px rgba(0, 0, 0, 0.07)
;`

const StyledDataGrid = styled(DataGrid)`
  max-height: 630px;
  .MuiDataGrid-row:nth-child(even) {
    background-color: rgb(223, 239, 255);
  }

  .MuiDataGrid-row:nth-child(odd) {
    background-color: #fff;
  }
`;

const ActionCell = styled.div`
  box-sizing: border-box;
  padding: 7px 20px;
  border: 1px solid green;
  border-radius: 5px;
  color: green;
  cursor: pointer;
`

const Leads = () => {

  const {leadRows} = useContext(CustomersContext)

  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [leadMessage, setLeadMessage] = useState(null);


  const handleViewMessage = (message) => {
    setIsMessageOpen(!isMessageOpen)
    setLeadMessage(message)
    // setData(data.filter((item) => item.id !== id));
  };

  const handleCloseMessage = () => {
    setIsMessageOpen(false);
  }





  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <ActionCell>
            <div className="deleteButton"
              onClick={() => handleViewMessage(params.row.Message)}
            >
              View Message
            </div>
          </ActionCell>
        );
      },
    },
  ];


  return (
    <Container>
      <Topbar />
      <Wrapper>
        <TitleContainer>
          <Title>Leads</Title>
          <Subtitle>View and manage your leads</Subtitle>
        </TitleContainer>
        {
          (leadRows.length != 0) ? (
            <StyledBox sx={{ height: 630, width: "100%" }}>
          <StyledDataGrid
            rows={leadRows}
            getRowId={(row) => row.LeadId}
            columns={LeadsColumns.concat(actionColumn)}
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
          ) : (
            <div>Loading...</div>
          )
        }
      </Wrapper>
      <LeadMessage isMessageOpen={isMessageOpen} leadMessage={leadMessage} handleCloseMessage={handleCloseMessage} />
    </Container>
  );
};

export default Leads;
