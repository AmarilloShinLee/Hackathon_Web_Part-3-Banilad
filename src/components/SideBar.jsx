import { useState } from 'react'
import { Drawer, Box, Slider, Stack, Button } from "@mui/material"

const Sidebar = () => {

    const [state, setState] = useState(0);

    return(
        <Drawer anchor='right' variant='permanent' PaperProps={{sx: {justifyContent: "center", background: "linear-gradient(180deg, #64AA62 16.67%, #3A7338 100%)", color: "white"}}}>
            <Box sx={{border: "1px solid black", padding: "2em", width: "39em"}}>
                <h2>Lorem Ipsum</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl tortor, pretium ut ultrices in, aliquam at dui. Nulla quis massa sit amet libero ultrices interdum in nec leo. Nunc nec ante nec dui volutpat porta quis eu dolor. Nulla eleifend urna a porttitor posuere. Aliquam consequat pretium leo non scelerisque. Phasellus condimentum tortor a libero euismod, vel eleifend justo maximus. Ut eget ante dui. Nulla molestie sapien a ullamcorper tempus. Mauris porttitor venenatis nulla, ac tincidunt nisl auctor at.
                </p>
                <Slider sx={{width: "8em"}} defaultValue={0} value={state} step={10} marks min={0} max={20} disabled/>
                <Stack direction="row">
                    <Button variant='contained' color='primary' onClick={(e) => setState(state + 10)}>NEXT</Button>
                    <Button variant='contained' color='secondary' onClick={(e) => setState(state - 10)}>BACK</Button>
                </Stack>
            </Box>
        </Drawer>
    )
}

export { Sidebar }