import { SnackbarProps } from "@mui/material";

export enum SNACKBAR_TYPES {
    ERROR = 'error',
    SUCCESS = 'success',
}

export interface ISnackbarProps extends SnackbarProps {
    type?: SNACKBAR_TYPES,
    message?: string
    submessage?: string
}