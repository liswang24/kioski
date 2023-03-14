import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        pink: {
            main: '#EC7E78'
        },
        yellow: {
            main: '#FAE190',
        },
        purple: {
            main: '#DCC7F7',
        },
        blue: {
            main: '#AEDDF4',
        },
        green: {
            main: '#91E4AF',
        }
    },
    typography: {
        // TODO: import fonts
        fontFamily: 'Raleway, Arial',
        h1: {
            fontSize: '100px'
        }
    },
    components: {
        // TODO: hover states
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '25px',
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: 'bold'
                },
                sizeLarge: {
                    fontSize: '36px',
                    height: '83px',
                    width: '440px'
                },
                sizeSmall: {
                    fontSize: '24px',
                    height: '59px',
                    width: '234px'
                }
            }
        }
    }
});