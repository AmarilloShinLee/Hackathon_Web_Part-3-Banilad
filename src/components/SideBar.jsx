import { useState } from 'react'
import { Drawer, Box, Slider, Stack, Button, ThemeProvider, Stepper, Step, StepLabel, Typography } from "@mui/material"

import { createTheme  } from "@mui/material/styles"

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

const Sidebar = (onChange) => {

    const [state, setState] = useState(0);

    const steps = [
        'User Details',
        'Career Select',
        'Position Select',
      ];      

    return(
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

                        <Button onChange={(e) => onChange} variant='contained' color='primary' onClick={(e) => setState(state + 10)}>
                          <Typography variant="h3">NEXT</Typography>
                        </Button>

                        <Button variant='contained' color='secondary' onClick={(e) => setState(state - 10)}>
                          <Typography variant="h3">BACK</Typography>
                        </Button>

                    </ThemeProvider>
                </Stack>

            </Box>
        </Drawer>
    )
}

export { Sidebar }