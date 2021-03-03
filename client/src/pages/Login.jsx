import React from 'react';

// Material UI
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({}));

const Login = () => {
  const classes = useStyles()

  return (
    <form>
      <TextField
        label='ユーザー名'
        required="true"
        placeholder='User Name'
        className={classes.input}
      />
      <TextField
        label='Email'
        type='email'
        required="true"
        className={classes.input}
      />
      <TextField
        label='Password'
        type='text'
        required
        value='Password'
        className={classes.input}
      />
    </form>
  );
};

export default Login;
