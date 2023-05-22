import { Container, Paper, Stack } from '@mui/material';

import { RegistrationForm } from "../components/Form"

const RegistrationPage = () => {
    return (
        <Container maxWidth="xl" className='d-flex justify-content-center'>
            <Paper elevation={4} className='p-4' style={{marginTop: "4em", width: "32em"}}>
                <RegistrationForm />
            </Paper>
        </Container>
    )
}

export default RegistrationPage;