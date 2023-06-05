import React, { useState, SyntheticEvent } from "react";
import {
  Paper,
  Typography,
  Button,
  TextField,
  Divider,
  Box,
  InputAdornment,
  IconButton,
  Autocomplete,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
export const NAME_PATTERN = /^[a-zA-Z]+$/;
const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(NAME_PATTERN, { message: "First name must be letters." })
    .required("First name is required."),
  lastName: Yup.string()
    .matches(NAME_PATTERN, { message: "Last name must be letters." })
    .required("Last name is required."),
  email: Yup.string()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      message: "Please enter a valid email address",
    })
    .required("Please enter a valid email address"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      { message: "Password must be alphanumeric and minimum 8 characters" }
    )
    .required("Password must be alphanumeric and minimum 8 characters"),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Confirm password dit not match.')
    .required('Confirm password is required'),
    country_code:Yup.string().required('Country code is required.'),
    job_role:Yup.string().required('Job role is required'),
    phone: Yup
    .string()
    .matches(/^\d{10}$/, { message: "Phone number must be 10 digit" })
    .required("Phone number must be 10 digit"),
    isTermsAccepted:Yup.string().required("Terms and conditions are required")

});
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//! form input types
interface FormInputs {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  alt_email: string;
  country_code: string;
  phone: string;
  job_role: string;
  isTermsAccepted: boolean;
}


export default function SignupForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(validationSchema),
  });
  //! password visibilty state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //! password visibilty handlers
  const togglePasswordVisibility = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };
  // console.log('error state', errors)
  //!handle submit
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
     toast.success('Registered successfully.')
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "500px",
          height: "auto",
          margin: "auto",
          mt: "7rem",
          display: "grid",
          gap: "1rem",
          placeItems: "center",
          p: 2,
          mb: 10,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "light",
          }}
        >
          Join Uphire
        </Typography>
        <Button
          fullWidth
          variant="contained"
          startIcon={
            <GoogleIcon
              sx={{
                left: 10,
                top: 10,
                translate: "transform(-50%,-50%)",
                position: "absolute",
              }}
            />
          }
        >
          Continue with Google
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={
            <AppleIcon
              sx={{
                left: 10,
                top: 10,
                translate: "transform(-50%,-50%)",
                position: "absolute",
              }}
            />
          }
        >
          Continue with Apple
        </Button>
        <Divider sx={{ width: "100%" }} orientation="horizontal">
          Or
        </Divider>

        {/* //*form  */}
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // p:2,
            // columnGap: "10rem",
            // border: "1px solid red",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* frist and last  name block */}
            <Stack
              sx={{
                width: "100%",
                height: "100%",
                mb: 1,
              }}
              direction={"row"}
              spacing={2}
            >
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    size="small"
                    {...field}
                    sx={{ width: "100%", height: "30%" }}
                    variant="outlined"
                    label="First Name"
                    placeholder="First Name"
                    error={Boolean(errors.firstName?.message)}
                    helperText={errors.firstName && errors.firstName?.message}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    size="small"
                    {...field}
                    sx={{ width: "100%", height: "70%" }}
                    variant="outlined"
                    label="Last Name"
                    placeholder="Last Name"
                    error={Boolean(errors.lastName?.message)}
                    helperText={errors.lastName && errors.lastName?.message}
                  />
                )}
              />
            </Stack>
            {/* //* user name block */}
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="User Name"
                  placeholder="User Name"
                  error={Boolean(errors.userName?.message)}
                  helperText={errors.userName && errors.userName?.message}
                  size="small"
                  sx={{ mt: 2 }}
                />
              )}
            />
            {/* //* email block */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Email"
                  type="email"
                  placeholder="demo@gmail.com"
                  error={Boolean(errors.email?.message)}
                  helperText={errors.email && errors.email?.message}
                  size="small"
                  sx={{ mt: 2 }}
                />
              )}
            />
            {/* //* password block */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  error={Boolean(errors.password?.message)}
                  helperText={errors.password && errors.password?.message}
                  size="small"
                  sx={{ mt: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {!showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {/* //* confirm block */}
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  error={Boolean(errors.confirmPassword?.message)}
                  helperText={
                    errors.confirmPassword && errors.confirmPassword?.message
                  }
                  size="small"
                  sx={{ mt: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {!showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            {/* //* alt email block */}
            <Controller
              name="alt_email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Alternative email"
                  type="email"
                  placeholder="demo@gmail.com"
                  error={Boolean(errors.alt_email?.message)}
                  helperText={errors.alt_email && errors.alt_email?.message}
                  size="small"
                  sx={{ mt: 2 }}
                />
              )}
            />
            {/* //* phone number block */}
            <Stack direction={"row"} spacing={1} mt={2}>
              <Controller
                name="country_code"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    id="tags-standard2"
                    options={[
                     "+91",'+92','+93','+94','+95','+96','+97','+98'
                    ]}
                    value={field.value || ""} // Set the value of Autocomplete based on the field's value
                  onChange={(event, newValue) => {
                    field.onChange(newValue); // Update the field's value when an option is selected
                  }}
                    // getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...field}
                        variant="outlined"
                        placeholder="Country Code"
                        size="small"
                        error={Boolean(errors.country_code?.message)}
                        helperText={errors.country_code && errors.country_code?.message}
                      />
                    )}
                  />
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    label="phone"
                    type="text"
                    placeholder="phone number"
                    error={Boolean(errors.phone?.message)}
                    helperText={errors.phone && errors.phone?.message}
                    size="small"
                    sx={{ mt: 2 }}
                  />
                )}
              />
            </Stack>
            {/* //* job role block */}
            <Controller
              name="job_role"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  id="tags-standard123"
                  options={[
                       "Web developer ","Android developer","Nodejs developer","Java developer"
                  ]}
                  // getOptionLabel={(option) => option.title}
                  value={field.value || ""} // Set the value of Autocomplete based on the field's value
                  onChange={(event, newValue) => {
                    field.onChange(newValue); // Update the field's value when an option is selected
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Job Role"
                      size="small"
                      sx={{ mt: 2 }}
                      error={Boolean(errors.job_role?.message)}
                      helperText={errors.job_role && errors.job_role?.message}
                    />
                  )}
                />
              )}
            />

            {/* //* terms and policy block */}
            <Controller
              name="isTermsAccepted"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} color="primary" />}
                  label={
                    <Typography variant="body2" color="textPrimary">
                      I accept the
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ margin: "1px" }}
                      >
                        Policy
                      </a>
                      and
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Terms
                      </a>
                    </Typography>
                  }
                
                />
              )}
            />
            <Box sx={{ width: "100%" }}>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#f23c0f",
                  width: "100%",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#f23c0f",
                    color: "white",
                  },
                }}
              >
                Create your account
              </Button>
            </Box>
          </form>
        </Box>
        <Typography
          // variant="h6"
          sx={{
            fontWeight: "light",
          }}
        >
          Allready have an account?{" "}
          <span>
            <Link href={"/login"}>Login</Link>
          </span>
        </Typography>
      </Paper>
      <ToastContainer/>
    </>
  );
}
