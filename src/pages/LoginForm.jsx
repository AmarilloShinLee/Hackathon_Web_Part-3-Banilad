import axios from 'axios';

import { useState, useEffect } from 'react';
import { Button, Container, Stack, Paper, TextField, Select, MenuItem, FormControl, InputLabel, Drawer, Box } from '@mui/material';

import { LoginForm } from '../components/Form';
import { Navbar } from '../components/NavBar';

const LoginPage = () => {

    const [id, setId] = useState();
    const [itemDelete, setItemDelete] = useState(false);

    const [search, setSearch] = useState("");
    const [searchType, setSearchType] = useState("");

    const [output, setOutput] = useState([]);

    //

    // useEffect(() => {
    //     axios.get('http://172.16.222.220:4000/users/login')
    //         .then(res => {
    //             setOutput(res.data);
    //         });
    // }, [itemDelete]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setOutput(output.filter((el) => {
            const name = `${el.firstname} ${el.middlename} ${el.lastname}`

            console.log();

            if (searchType === "name")
                return search === name;

            if (searchType === "age")
                return Number.parseInt(search) === el.age;

            if (searchType === "weight")
                return Number.parseInt(search) === el.weight;

            if (searchType === "height")
                return Number.parseInt(search) === el.height;
        }))
    }

    const handleDelete = (id, index) => {
        setItemDelete(true);

        const userID = {id};

        console.log(userID);

        //Delete request
        axios.delete('http://172.16.222.220:4000/users/delete', userID)
            .catch(err => console.log(err))

        output.splice(index, 1);
    }

    return (
        // <Container maxWidth="xl" className='d-flex justify-content-center flex-column'>
        //     <Paper elevation={4} className='p-4' style={{marginTop: "2em", marginBottom: "2em"}}>
        //         <form onSubmit={handleSubmit}>
        //             <Stack direction="row" spacing={2}>
        //                 <TextField onChange={(e) => setSearch(e.target.value)} style={{width: "48em"}} label="Search Input"/>

        //                 <FormControl style={{width: "12em"}}>
        //                     <InputLabel >Type</InputLabel>
        //                     <Select
        //                         labelId="demo-simple-select-label"
        //                         id="demo-simple-select"
        //                         value={searchType}
        //                         label="Name"
        //                         onChange={(e) => setSearchType(e.target.value)}
        //                     >
        //                         <MenuItem value="name">Name</MenuItem>
        //                         <MenuItem value="age">Age</MenuItem>
        //                         <MenuItem value="weight">Weight</MenuItem>
        //                         <MenuItem value="height">Height</MenuItem>
        //                     </Select>
        //                 </FormControl>

        //                 <Button variant='contained' type="submit">SUBMIT</Button>
        //             </Stack>
        //         </form>
        //     </Paper>

        //         {output.map((element, index) => {
        //             return (
        //                 <Paper elevation={4} className='p-4' style={{marginTop: "1em", marginBottom: "1em"}}>
        //                     <h4>{element.firstname} {element.middlename} {element.lastname}</h4>
        //                     <p>Age: <b>{element.age}</b></p>
        //                     <p>Weight: <b>{element.weight}</b></p>
        //                     <p>Height: <b>{element.height}</b></p>

        //                     <Button onClick={(e) => handleDelete(element._id, index)} variant='contained' color='error'>Delete</Button>
        //                 </Paper>
        //             )
        //         })}
        // </Container>
        <>
            {/* <Drawer variant='permanent' sx={{bgColor: 'black'}} anchor='right' PaperProps={{sx: {width: "750px", background: 'linear-gradient(180deg, #33344C 34.9%, #3E3973 100%)'}}}>
                
            </Drawer>
            <h2>Login Page</h2> */}
            <Navbar />
            
            <Container maxWidth='sm'>
                <Paper style={{marginTop: "14em", marginBottom: "14em", width: "40em"}}>
                    <LoginForm />
                </Paper>
            </Container>
        </>
    )
}

export default LoginPage;