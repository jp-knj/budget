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
        placeholder='トミタ ケンジ'
        className={classes.input}
      />
      <TextField
        label='メールアドレス'
        type='email'
        required="true"
        placeholder='sample@email.com'
        className={classes.input}
      />
      <TextField
        label='パスワード'
        type='password'
        required='true'
        className={classes.input}
      />
    </form>
  );
};

export default Login;
