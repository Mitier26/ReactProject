import { createTheme } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';
import { globalColors } from './globalColors';

export let theme = createTheme({
    palette: {
        primary: {
            main: globalColors.green['300'],
            light: '#B5eeB5',
            dark: '#31bf49',
            contrastText: '#fff',
        },
        secondary: {
            main: '#66b8ff',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large',
                color: 'primary',
                disableRipple: true,
            },
            styleOverrides: {
                root: {
                    fontSize: '2rem',
                    // backgroundColor: 'red',
                    marginTop: '20px',
                    '&:hover': { backgroundColor: 'orange' },
                    '@media (max-width:600px)': {
                        backgroundColor: 'gray',
                    },
                },
            },
        },
    },
});
