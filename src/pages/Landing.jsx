import { React, useEffect, useState } from 'react';

import { Paper, Container, Grid, Box, Drawer, Stack, Button, ThemeProvider, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import { Navbar } from '../components/NavBar'
import { Sidebar } from '../components/SideBar'
import { light } from '@mui/material/styles/createPalette';

import RalewayWoff2 from '../assets/fonts/Raleway-Regular.ttf';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
        dark: '#000',
        contrastText: '#FFF',
        //light: '#0f0f0f'
      },
      nextButton: {
        main: '#FEFEFE',
        contrastText: '#000',
      }
    },
  });

const fontTheme = createTheme({
    typography: {
        fontFamily: 'Raleway, Arial',
        fontSize: 18
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Raleway';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
      },
});

const LandingPage = () => {
    return (
        <>
            <Box>
                <ThemeProvider theme={fontTheme}>
                    <Grid container>
                        <Grid xs={8}>

                            <Box sx={{bgcolor: "#AEAEAE", width: "48em", marginLeft: "8em", marginTop: "20em", padding: "3em", borderRadius: "50px", background: "rgba(147, 148, 158, 0.46);"}}>
                                <h1>Test</h1>
                                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae neque viverra, lobortis ligula eu, aliquet magna. Vivamus consequat mauris ut mauris vehicula posuere. Suspendisse sollicitudin neque sit amet ante tempus ultrices. Pellentesque in dapibus leo, sed pulvinar neque. Nunc gravida nibh ut urna iaculis, nec rutrum ante rhoncus. Duis convallis eros arcu, vitae euismod ante pretium eu. Suspendisse aliquet sapien nec justo congue tempus. Donec placerat leo eget ligula maximus, ac rhoncus velit aliquam. Vivamus auctor mauris id finibus dapibus.</Typography>
                                <Stack direction="row" spacing={2}>

                                    <ThemeProvider theme={theme}>
                                        <Button variant='contained' color='primary' href='/login'>SIGN IN</Button>
                                        <Button variant='contained' color='secondary' href='/sign_up'>SIGN UP</Button>
                                    </ThemeProvider>
                                    
                                </Stack>
                            </Box>

                        </Grid>
                        <Grid xs={4}>
                            <Sidebar/>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Box>
            {/* <Container maxWidth="xl">
                <Paper elevation={4}  className='p-4' style={{marginTop: "16em"}}>
                    <h2>This is a Landing page!</h2>
                </Paper>
            </Container> */}
        </>
    )
}

export default LandingPage;