import { Container, Divider, Button, Toolbar, Typography, AppBar, Box, styled } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const navBarTheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#11cb5f',
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

const Navbar = () => {
    return(
        <ThemeProvider theme={navBarTheme}>
            <AppBar color='primary' position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography variant='h5'>LOGO NAME</Typography>
                        <Box sx={{flexGrow: 1}} />
                        {/* Needs color */}
                        <Button href='/login' color="inherit">SIGN UP</Button>
                        <Button href='/sign_up' color="inherit">LOGIN</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export { Navbar };