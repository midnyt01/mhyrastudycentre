import React from 'react';  
import './admin-login-form.css'
import SFLogo from "../../assets/SF-logo.png"
import { useState } from 'react';
import { httpLoginAdmin } from '../../utils/nodejs/admin';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AdminAuthContext } from '../../context/admin/auth.context';
import { useFormik } from 'formik';
import { LoginSchema } from '../../schema/index.schema';
import styled from 'styled-components';


import {
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  Avatar,
  Container,
  CssBaseline,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const MainLogo = styled.img`
width: 150px;
`
const StyledBox = styled(Box)`
    width: 80%;
    @media (min-width: 800px) {
        width: 100%;
    }
`
const FailedMessage = styled.div`
  color: red;
`


const defaultFormFields = {
    Email: '',
    Password: ''
}

const AdminLoginForm = () => {
    const navigate = useNavigate()

    const {setIsAdminLogin} = useContext(AdminAuthContext)

    const [loginFailed, setLoginFailed] = useState({message:""})
    const {message} = loginFailed

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: defaultFormFields,
        validationSchema: LoginSchema,
        onSubmit : async (values) => {
            console.log({values})
            setLoginFailed({message: ""});
            const data = await httpLoginAdmin(values)
            console.log({data})
            if (data.success) {
            //save auth token and redirct to home
                localStorage.setItem('admin', data.authToken)
                setIsAdminLogin(true)
                navigate('/')
            } else {
                setLoginFailed({message: data})
            }
        }
    })


    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <MainLogo src={SFLogo} alt="main logg" />
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <FailedMessage>{message}</FailedMessage>
            <StyledBox component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Email"
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="Password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.Password && Boolean(errors.Password)}
                helperText={touched.Password && errors.Password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </StyledBox>
          </Box>
        </Container>
    )
}


  export default AdminLoginForm;  