import React from 'react'
import styled from 'styled-components';




const DeleteCard = styled.div`
  scale: ${props => props.scale};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: white;
  width: 330px;
  height: 220px;
  border-radius: 10px;
  padding: 40px 50px;
  box-sizing: border-box;
  transition: all 0.25s ease 0s;
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
  100px 100px 80px rgba(0, 0, 0, 0.07)
;
`
const DeleteConfirmation = styled.div`
  
`

const DeleteOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  box-sizing: border-box;
  margin-top: 50px;
`;

const DeleteOption = styled.div`
  box-sizing: border-box;
  padding: 7px 0;
  width: 100px;
  text-align: center;
  color: white;
  background-color: ${props => (props.type ? '#00c200' : 'coral')};
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
`



const ConfirmDelete = ({confirmDelete, handleCancleDelete, handleConfirmDelete}) => {
  return (
    <DeleteCard scale={confirmDelete ? '1' : '0'} >
    <DeleteConfirmation>
      Are you sure you want to delete this customer ?
    </DeleteConfirmation>
    <DeleteOptionsContainer>
      <DeleteOption type={true} onClick={handleConfirmDelete} >Yes</DeleteOption>
      <DeleteOption type={false} onClick={handleCancleDelete} >Cancle</DeleteOption>
    </DeleteOptionsContainer>
  </DeleteCard>
  )
}

export default ConfirmDelete