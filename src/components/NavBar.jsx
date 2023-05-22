import { Container, Divider, Button, Toolbar, Typography, AppBar, Box } from '@mui/material'

const Navbar = () => {
    return(
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant='h4'>LOGO NAME</Typography>
                    <Box sx={{flexGrow: 1}} />
                    <Button href='/login' color="inherit">Login</Button>
                    <Button href='/sign_up' color="inherit">Registration</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export { Navbar };