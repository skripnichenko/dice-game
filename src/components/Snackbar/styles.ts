import { SnackbarOrigin, SxProps } from "@mui/material";

export const stylesObj = {
    alert: {width: '100%'},
    anchorOrigin: { vertical: 'top', horizontal: 'center', width: '100%' },
    base: {width: '100%', maxWidth: '500px'}
} satisfies Record<string, SxProps | SnackbarOrigin>