import React from "react";
import "./admin-create-account-form.styles.css";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { httpCreateAdmin } from "../../../utils/nodejs/admin";
import { useContext } from "react";
import { AdminAuthContext } from "../../../context/admin/auth.context";
import { useFormik } from 'formik';
import styled from "styled-components";
import { RegistrationSchema } from "../../../schema/index.schema";


import {
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  Avatar,
  Container,
  CssBaseline,
} from '@mui/material';

const StyledBox = styled(Box)`
    width: 80%;
    @media (min-width: 800px) {
        width: 100%;
    }
`
const Message = styled.div`
  color: ${props => props.type ? 'green' : 'red'};
`

const defaultFormFields = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  Confirm_Password: "",
};

const AdminCreateAccountForm = () => {
  const navigate = useNavigate();

  const { isAdminLogin, setIsAdminLogin } = useContext(AdminAuthContext);

  const [registrationMessage, setRegistrationMessage] = useState({success: false, message: ""})
  const {success, message} = registrationMessage;

  
  const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
    initialValues: defaultFormFields,
    validationSchema: RegistrationSchema,
    onSubmit : async (values) => {
      const {FirstName, LastName, Email, Password} = values;

        //will be done after connecting to backend

        setRegistrationMessage({success: false, message: ""});
        const data = await httpCreateAdmin({FirstName, LastName, Email, Password})
        if (data.success) {
        //save auth token and redirct to home
            setRegistrationMessage({success: true, message: "New admin account created successfully"})
            resetForm();
            setTimeout(() => {
              setRegistrationMessage({success: null, message: ""})
            }, 1000);
        } else {
            setRegistrationMessage({success: false, message: data})
        }
    }
})


  return (
    <Container component="main" maxWidth="xs" style={{marginTop: '85px'}}>
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Account
          </Typography>
          <Message type={success} >{message}</Message>
          <StyledBox component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="FirstName"
                  required
                  fullWidth
                  id="FirstName"
                  label="First Name"
                  type="text"
                  value={values.FirstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.FirstName && Boolean(errors.FirstName)}
                  helperText={touched.FirstName && errors.FirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="LastName"
                  autoComplete="family-name"
                  type="text"
                  value={values.LastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.LastName && Boolean(errors.LastName)}
                  helperText={touched.LastName && errors.LastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="Email"
                  autoComplete="email"
                  type="email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Email && Boolean(errors.Email)}
                  helperText={touched.Email && errors.Email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Password && Boolean(errors.Password)}
                  helperText={touched.Password && errors.Password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirm_Password"
                  label="Confirm_Password"
                  type="password"
                  id="Confirm_Password"
                  autoComplete="confirm-password"
                  value={values.Confirm_Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Confirm_Password && Boolean(errors.Confirm_Password)}
                  helperText={touched.Confirm_Password && errors.Confirm_Password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
          </StyledBox>
        </Box>
      </Container>
  );
};

export default AdminCreateAccountForm;
