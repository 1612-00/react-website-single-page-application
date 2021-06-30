import React from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(1, 0, 0),
  },
  text_main: {
    color: "black",
  },
}));

function FormSignUp(props) {
  const classes = useStyles();
  const { onChange, onSubmit, errors } = props;

  return (
    <div>
      <Container>
        <CssBaseline>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              className={classes.text_main}
              component="h1"
              variant="h5"
            >
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={onChange}
                    // Kiểm tra có lỗi validate không, nếu có báo lỗi và hiển thị lỗi
                    error={errors.firstName !== undefined}
                    helperText={errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={onChange}
                    error={errors.lastName !== undefined}                    
                    helperText={errors.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onChange}
                    error={errors.email !== undefined}
                    helperText={errors.email}
                  />
                  <p>{"" && errors.firstName}</p>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={onChange}
                    error={errors.password !== undefined}
                    helperText={errors.password}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </CssBaseline>
      </Container>
    </div>
  );
}

export default FormSignUp;
