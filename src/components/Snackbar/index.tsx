import React, { memo } from 'react';
import { Snackbar as SnackbarBase, Alert, Slide } from '@mui/material';
import { ISnackbarProps, SNACKBAR_TYPES } from './types';
import { stylesObj } from './styles';

const Snackbar = ({type = SNACKBAR_TYPES.SUCCESS, message = '', submessage, ...rest}: ISnackbarProps) => {
  return (
      <SnackbarBase
        anchorOrigin={stylesObj.anchorOrigin}
        sx={stylesObj.base}
        slots={{transition: (props) => <Slide {...props} direction='down' />} }
        {...rest}
      >
        <Alert severity={type} variant='filled' sx={stylesObj.alert}>
          {message}
          {submessage && <><br />{submessage}</>}
        </Alert>
      </SnackbarBase>
  );
}

export default memo(Snackbar)