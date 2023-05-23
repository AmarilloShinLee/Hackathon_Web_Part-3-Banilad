import axios from 'axios'

import { useState } from "react";

import { Stack, TextField, Button } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const LoginForm = () => {
//     // To be used later

//     // const [loginCredentials, setLoginCredentials] = useState([
//     //     {id: "username", value: "", error: false, helperText: ""},
//     //     {id: "password", value: "", error: false, helperText: ""}
//     // ]);

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const [userNameError, setUserNameError] = useState({error: false, helperText: ""});
//     const [passwordError, setPasswordError] = useState({error: false, helperText: ""});

//     const inputs = [
//         {label: "Username", id: "Username", type: "text"},
//         {label: "Password", id: "Password", type: "password"},
//     ];

//     const handleErrors = (e) => {
//         setUserNameError({error: false, helperText: ""});
//         setPasswordError({error: false, helperText: ""});
            
//         let valid = true;

//         if (username === '') {
//             setUserNameError({error: true, helperText: "Username required"});
//             valid = false;
//         }

//         if (password === '') {
//             setPasswordError({error: true, helperText: "Password required"});
//             valid = false;
//         }

//         return valid;
//     }

//     const handleInputs = (e, formControl) => {
//         if (formControl.id === "Username") setUsername(e.target.value);
//         if (formControl.id === "Password") setPassword(e.target.value);
//     }

//     const handleValue = (formControl) => {
//         if (formControl.id === "Username") return username;
//         if (formControl.id === "Password") return password;
//     }

//     const getError = (formControl) => {
//         if (formControl.id === "Username")
//             return userNameError;

//         if (formControl.id === "Password")
//             return passwordError;
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         if (!handleErrors(e)) return;

//         const user = {username, password};

//         // THIS SHOULD WORK, WHY IT DIDN'T?!
//         // const registerFormData = new FormData();

//         // registerFormData.append('username', user.username);
//         // registerFormData.append('password', user.password);

//         console.log(user);

//         // axios.post('http://localhost:4000/sign_up/add', user)
//         //     .then(res => console.log(res.data))

//         setUsername('');
//         setPassword('');
//     }

//     return (
//         <form onSubmit={(e) => handleSubmit(e)}>
//             <Stack spacing={2}>
//                 <h2>Login</h2>
//                 {inputs.map((formControl) => {
//                     return(
//                         <TextField value={handleValue(formControl)} key={formControl.id} onChange={(e) => handleInputs(e, formControl)} id={formControl.id} label={formControl.label} type={formControl.type} error={getError(formControl).error} helperText={getError(formControl).helperText}/>
//                     );
//                 })}
//                 <Button variant="contained" className="p-3" sx={{backgroundColor: "black"}} type="submit">SUBMIT</Button>
//             </Stack>
//         </form>
//     );
// }

const RegistrationForm = () => {

    // Please Update to array

    // const [registerCredentials, setRegisterCredentials] = useState([
    //     {id: "firstname", value: "", error: false, helperText: ""},
    //     {id: "middlename", value: "", error: false, helperText: ""}
    // ]);

    // Refactor to array pls
    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0.00);
    const [height, setHeight] =useState(0.00);

    // const [birthDate, setBirthdate] = useState("");
    // const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState({error: false, helperText: ""});
    const [middleNameError, setMiddleNameError] = useState({error: false, helperText: ""});
    const [lastNameError, setLastNameError] = useState({error: false, helperText: ""});
    const [ageError, setAgeError] = useState({error: false, helperText: ""});
    const [weightError, setWeightError] = useState({error: false, helperText: ""});
    const [heightError, setHeightError] =useState({error: false, helperText: ""});

    // const [birthdateError, setBirthdateError] = useState({error: false, helperText: ""});
    // const [emailError, setEmailError] = useState({error: false, helperText: ""});
    // const [userNameError, setUserNameError] = useState({error: false, helperText: ""});
    // const [passwordError, setPasswordError] = useState({error: false, helperText: ""});
    // const [confirmPasswordError, setConfirmPasswordError] = useState({error: false, helperText: ""});

    const inputs = [
        {label: "First name", id: "Firstname", type: "text"},
        {label: "Middle name", id: "Middlename", type: "text"},
        {label: "Last name", id: "Lastname", type: "text"},
        {label: "Age", id: "age", type: "text"},
        {label: "Weight", id: "weight", type: "text"},
        {label: "Height", id: "height", type: "text"},
        // {label: "Email", id: "Email", type: "email"},
        // {label: "Username", id: "Username", type: "text"},
        // {label: "Password", id: "Password", type: "password"},
        // {label: "Confirm Password", id: "ConfirmPassword", type: "password"},
    ];

    const handleErrors = (e) => {
        setFirstNameError({error: false, helperText: ""});
        setMiddleNameError({error: false, helperText: ""});
        setLastNameError({error: false, helperText: ""});
        setAgeError({error: false, helperText: ""});
        setWeightError({error: false, helperText: ""});
        setHeightError({error: false, helperText: ""});
        // setBirthdateError({error: false, helperText: ""});
        // setEmailError({error: false, helperText: ""});
        // setUserNameError({error: false, helperText: ""});
        // setPasswordError({error: false, helperText: ""});
        // setConfirmPasswordError({error: false, helperText: ""});

        let valid = true;

        if (firstname === '') {
            setFirstNameError({error: true, helperText: "First name required"});
            valid = false;
        }

        if (middlename === '') {
            setMiddleNameError({error: true, helperText: "Middle name required"});
            valid = false;
        }

        if (lastname === '') {
            setLastNameError({error: true, helperText: "Last name required"});
            valid = false;
        }

        if (age === '') {
            setAgeError({error: true, helperText: "Age required"});
            valid = false;
        }

        if (weight === '') {
            setWeightError({error: true, helperText: "Width required"});
            valid = false;
        }

        if (height === '') {
            setHeightError({error: true, helperText: "Height required"});
            valid = false;
        }

        // if (birthDate === '') {
        //     setBirthdateError({error: true, helperText: "Birthdate required"});
        //     valid = false;
        // }

        // if (email === '') {
        //     setEmailError({error: true, helperText: "Email required"});
        //     valid = false;
        // }
            
        // if (username === '') {
        //     setUserNameError({error: true, helperText: "Username required"});
        //     valid = false;
        // }

        // if (password === '') {
        //     setPasswordError({error: true, helperText: "Password required"});
        //     valid = false;
        // }

        // if (confirmPassword === '' || confirmPassword !== password) {
        //     setConfirmPasswordError({error: true, helperText: "Password is not the same"});
        //     valid = false;
        // }

        return valid;
    }

    const getError = (formControl) => {
        if (formControl.id === "Firstname")
            return firstNameError;

        if (formControl.id === "Middlename")
            return middleNameError;

        if (formControl.id === "Lastname")
            return lastNameError;

        // Try validation bruv
        if (formControl.id === "age")
            return ageError; 

        if (formControl.id === "weight")
            return weightError;

        if (formControl.id === "height")
            return heightError;

        // if (formControl.id === "Birthdate")
        //     return birthdateError;

        // if (formControl.id === "Email")
        //     return emailError;

        // if (formControl.id === "Username")
        //     return userNameError;

        // if (formControl.id === "Password")
        //     return passwordError;

        // if (formControl.id === "ConfirmPassword")
        //     return confirmPasswordError;
    }

    const handleInputs = (e, formControl) => {
        if (formControl.id === "Firstname") setFirstname(e.target.value);
        if (formControl.id === "Middlename") setMiddlename(e.target.value);
        if (formControl.id === "Lastname") setLastname(e.target.value);
        if (formControl.id === "age") setAge(e.target.value);
        if (formControl.id === "weight") setWeight(e.target.value);
        if (formControl.id === "height") setHeight(e.target.value);

        // if (formControl.id === "Birthdate") setBirthdate(e.target.value);
        // if (formControl.id === "Email") setEmail(e.target.value);
        // if (formControl.id === "Username") setUsername(e.target.value);
        // if (formControl.id === "Password") setPassword(e.target.value);
        // if (formControl.id === "ConfirmPassword") setConfirmPassword(e.target.value);
    }

    const handleValue = (formControl) => {
        if (formControl.id === "Firstname") return firstname;
        if (formControl.id === "Middlename") return middlename;
        if (formControl.id === "Lastname") return lastname;
        if (formControl.id === "Age") return age;
        if (formControl.id === "Weight") return weight;
        if (formControl.id === "Height") return height;

        // if (formControl.id === "Birthdate") return birthDate;
        // if (formControl.id === "Email") return email;
        // if (formControl.id === "Username") return username;
        // if (formControl.id === "Password") return password;
        // if (formControl.id === "ConfirmPassword") return confirmPassword;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!handleErrors(e)) return;

        // const birthdate = new Date(birthDate.$y, birthDate.$M, birthDate.$D);

        const user = {firstname, middlename, lastname, age, weight, height}; //birthdate, email, username, password

        // THIS SHOULD WORK, WHY IT DIDN'T?!
        // const registerFormData = new FormData();

        // registerFormData.append('firstname', user.firstname);
        // registerFormData.append('middlename', user.middlename);
        // registerFormData.append('lastname', user.lastname);
        // registerFormData.append('birthdate', user.birthdate);
        // registerFormData.append('email', user.email);
        // registerFormData.append('username', user.username);
        // registerFormData.append('password', user.password);

        // axios.post('http://localhost:4000/sign_up/add', user)
        //     .then(res => console.log(res.data))

        console.log(user);

        setFirstname('');
        setMiddlename('');
        setLastname('');
        setAge('');
        setWeight('');
        setHeight('');
        // setBirthdate('');
        // setEmail('');
        // setUsername('');
        // setPassword('');
        // setConfirmPassword('');
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={2}>
                <h2>Registration</h2>
                {inputs.map((formControl) => {
                    // We don't need no birthdate
                    // if (formControl.id === 'Birthdate')
                    //     return (
                    //         <LocalizationProvider key={`lp-${formControl.id}`} dateAdapter={AdapterDayjs}>
                    //             <DatePicker value={handleValue(formControl)} key={formControl.id} onChange={(e) => setBirthdate(e)} slotProps={{textField: {helperText: getError(formControl).helperText, label: formControl.label, error: getError(formControl).error}}}/>
                    //         </LocalizationProvider>
                    //     )
                    
                    return(
                        <TextField value={handleValue(formControl)} key={formControl.id} onChange={(e) => handleInputs(e, formControl)} id={formControl.id} label={formControl.label} type={formControl.type} />
                    )
                })}
                <Button variant="contained" className="p-3" sx={{backgroundColor: "black"}} type="submit">SUBMIT</Button>
            </Stack>
        </form>
    );
}

export { RegistrationForm } //LoginForm