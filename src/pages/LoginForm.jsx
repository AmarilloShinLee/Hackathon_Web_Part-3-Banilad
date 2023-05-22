import { Container, Paper } from '@mui/material';

const LoginPage = () => {
    return (
        <Container maxWidth="xl" className='d-flex justify-content-center'>
            <Paper elevation={4} className='p-4' style={{marginTop: "14em", width: "48em"}}>
                <h2>This is a login!</h2>
            </Paper>
        </Container>
    )
}

export default LoginPage;