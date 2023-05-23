import axios from 'axios';

import { useState, useEffect } from 'react';
import { Container, Paper } from '@mui/material';

import { LoginForm } from '../components/Form';

const LoginPage = () => {

    const [output, setOutput] = useState([]);

    useEffect(() => {
        //Error
        axios.get('http://localhost:4000/login')
            .then(res => {
                setOutput(res.data);
                console.log(res.data);
            });

        output.map(element => {
            console.log(element._id);
        })
    }, []);

    return (
        <Container maxWidth="xl" className='d-flex justify-content-center'>
            <Paper elevation={4} className='p-4' style={{marginTop: "14em", marginBottom: "14em", width: "48em"}}>
                <LoginForm />
            </Paper>
        </Container>
    )
}

export default LoginPage;