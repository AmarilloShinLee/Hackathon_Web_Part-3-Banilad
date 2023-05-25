import { Container, Paper, Stack } from '@mui/material';

import { RegistrationForm } from "../components/Form"
import { Navbar } from "../components/NavBar"

const RegistrationPage = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl" className='d-flex justify-content-center'>
                <Paper elevation={4} className='p-4' style={{marginTop: "2em", marginBottom: "2em", width: "40em"}}>
                    <RegistrationForm />
                </Paper>
            </Container>
        </>
        
    )
}

export default RegistrationPage;    