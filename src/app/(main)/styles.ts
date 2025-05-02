import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const stylesObj = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: '600px',
        width: '100%',
        margin: '0 auto',
        paddingY: '120px',
        alignItems: 'center'
    },
    scoreContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        padding: '50px',
        marginBottom: '20px',
        textAlign: 'center',
    },
    upperBlock: {maxWidth: '300px', width: '100%'},
    button: {width: '100%', marginY: '20px'},
    radioGroup: {justifyContent: 'center', marginBottom: '40px'},
    header: {fontWeight: 'bold'},
    result: (isTrue: unknown) => ({color: isTrue === true ? 'success.main' : 'error.main'})
} satisfies Record<string, SxProps<Theme> | ((...args: unknown[]) => SxProps<Theme>)>;