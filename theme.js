import { createTheme } from '@mui/material';

const reset = {
    styleOverrides: {
        root: {
            all: 'unset',
        },
    },
};

const theme = createTheme({
    components: {
        MuiTable: {
            ...reset,
        },
    },

    typography: {
        fontFamily: 'inherit',
        color: 'inherit',
        lineHeight: 'inherit',
    },

    spacing: 4,
});

export default theme;
