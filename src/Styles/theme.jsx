import { createTheme } from "@mui/material";
import "@fontsource/montserrat";
import "@fontsource/palanquin";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#FFFFFF'
        },
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
        fontFamily: 'Montserrat',
        h1: {
            fontSize: '100px'
        },
        h2: {
            fontSize: '50px',
            fontWeight: '800'
        },
        h3: {
            fontSize: '38px',
            fontWeight: '800'
        },
        h4: {
            fontSize: '32px',
            fontWeight: '700'
        },
        h5: {
            color: 'rgb(0,0,0,0.6)',
            fontSize: '30px',
            fontFamily: 'Palanquin'
        },
        body1: {
            fontSize: '30px'
        },
        body2: {
            fontSize: '24px'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '25px',
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: "0px 4px 4px rgb(0,0,0,0.25)",
                    textTransform: 'unset'
                },
                sizeLarge: {
                    fontSize: '36px',
                    height: '83px',
                    width: '440px'
                },
                sizeMedium: {
                    fontSize: '26px',
                    height: '64px',
                    padding: '20px 30px',
                },
                sizeSmall: {
                    fontSize: '24px',
                    height: '59px',
                    width: '234px'
                },
                containedSecondary: {
                    color: '#000000',
                    backgroundColor: 'rgb(0,0,0,0)',
                    boxShadow: 'none'
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(0,0,0,0.1)',
                    borderRadius: '30px'
                },
                indicator: {
                    backgroundColor: 'transparent'
                },
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    minWidth: '50%',
                    textTransform:'none',
                    fontSize: '30px',
                    padding: '14px',
                    "&.Mui-selected": {
                        backgroundColor: '#AEDDF4',
                        borderRadius: '25px'
                      }
                }  
            }
        }
    }
});