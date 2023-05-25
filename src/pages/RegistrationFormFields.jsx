import { useState } from 'react'
import { Container, Paper, Stack, Box, Grid, Drawer, Stepper, Step, StepLabel, Button } from '@mui/material';
import { Typography, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';

import { RegistrationFormFields } from "../components/Form"
import { Navbar } from "../components/NavBar"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const buttonTheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#B98538',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#C0A883',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '90px',
            width: '128px'
          }
        }
      }
    }
});

buttonTheme.typography.h3 = {
  fontSize: '1.2rem',
  padding: '0.5em',
}

const RegistrationPageFields = () => {

    const submitTest = (e) => {
        console.log("Hello World!");
    }

    const [state, setState] = useState(0);

    const steps = [
        'User Details',
        'Career Select',
        'Position Select',
    ]; 

    const fields = [
        "Computer Programming",
        "Engineering", 
        "Health Administration",
        "Biochemistry",
        "Mechanical Engineering",
        "Chemical Engineer",
        "Physical Chemistry",
        "Mechanical Engineer",
        "Chemical Engineer"
    ];

    const submitDetails = (e) => {


        setState(state - 10);
    }

    return (
        <>
            {/* <Navbar />
            <Container maxWidth="xl" className='d-flex justify-content-center'>
                <Paper elevation={4} className='p-4' style={{marginTop: "2em", marginBottom: "2em", width: "40em"}}>
                    <RegistrationFormFields />
                </Paper>
            </Container> */}

            <Box>
                <Grid container>
                        <form>
                        <Grid xs={8}>

                            {/* <Box sx={{bgcolor: "#AEAEAE", width: "48em", marginLeft: "8em", marginTop: "20em", padding: "3em", borderRadius: "50px", background: "rgba(147, 148, 158, 0.46);"}}>
                                <h1>Test</h1>
                                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae neque viverra, lobortis ligula eu, aliquet magna. Vivamus consequat mauris ut mauris vehicula posuere. Suspendisse sollicitudin neque sit amet ante tempus ultrices. Pellentesque in dapibus leo, sed pulvinar neque. Nunc gravida nibh ut urna iaculis, nec rutrum ante rhoncus. Duis convallis eros arcu, vitae euismod ante pretium eu. Suspendisse aliquet sapien nec justo congue tempus. Donec placerat leo eget ligula maximus, ac rhoncus velit aliquam. Vivamus auctor mauris id finibus dapibus.</Typography>
                                <Stack direction="row" spacing={2}>

                                    <ThemeProvider theme={theme}>
                                        <Button variant='contained' color='primary' href='/login'>SIGN IN</Button>
                                        <Button variant='contained' color='secondary' href='/sign_up'>SIGN UP</Button>
                                    </ThemeProvider>
                                    
                                </Stack>
                            </Box> */}

                            <Container maxWidth="xl" className='d-flex justify-content-center'>
                                <Paper elevation={4} className='p-4' style={{marginTop: "16em", marginBottom: "2em", width: "40em"}}>
                                    {/* <RegistrationFormFields /> */}
                                    {/* onSubmit={(e) => handleSubmit(e)} */}
                                    <h2>Choose Field</h2>
                                    <Grid container spacing={2}>
                                        {fields.map((el) => {
                                            <Grid item>
                                                {el}
                                            </Grid>
                                        })}
                                    </Grid>
                                </Paper>
                            </Container>

                        </Grid>
                        <Grid xs={4}>
                            <Drawer anchor='right' variant='permanent' PaperProps={{sx: {justifyContent: "center", background: "linear-gradient(180deg, #64AA62 16.67%, #3A7338 100%)", color: "white"}}}>
                                <Box sx={{padding: "2em", width: "39em"}}>
                                    <h2>Lorem Ipsum</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl tortor, pretium ut ultrices in, aliquam at dui. Nulla quis massa sit amet libero ultrices interdum in nec leo. Nunc nec ante nec dui volutpat porta quis eu dolor. Nulla eleifend urna a porttitor posuere. Aliquam consequat pretium leo non scelerisque. Phasellus condimentum tortor a libero euismod, vel eleifend justo maximus. Ut eget ante dui. Nulla molestie sapien a ullamcorper tempus. Mauris porttitor venenatis nulla, ac tincidunt nisl auctor at.
                                    </p>
                                    {/* <Slider sx={{width: "8em"}} defaultValue={0} value={state} step={10} marks min={0} max={20} disabled/> */}

                                    <Stepper activeStep={1} alternativeLabel>
                                        {steps.map((label) => (
                                            <Step sx={{'& .MuiStepLabel-root .Mui-active': {color: '#CD9A37'}, '& .MuiStepLabel-root .Mui-completed': {color: '#C0A883'}}} key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>

                                    <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
                                        <ThemeProvider theme={buttonTheme}>

                                            <Button onSubmit={submitDetails}  variant='contained' color='primary'>
                                                <Typography variant="h3">NEXT</Typography>
                                            </Button>

                                            <Button variant='contained' color='secondary'>
                                                <Typography variant="h3">BACK</Typography>
                                            </Button>

                                        </ThemeProvider>
                                    </Stack>

                                </Box>
                            </Drawer>
                        </Grid>
                        </form>
                </Grid>
            </Box>
        </>
        
    )
}

export default RegistrationPageFields;    