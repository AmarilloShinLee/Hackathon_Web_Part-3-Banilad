import axios from 'axios';
import buttonStyle from "./Form.module.css";

import { useState } from "react";

import { Stack, TextField, Button, FormGroup, InputAdornment, Radio, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText,
    Menu, MenuItem, Select, InputLabel, Grid, Paper } from "@mui/material";
import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const LoginForm = () => {
    // To be used later

    // const [loginCredentials, setLoginCredentials] = useState([
    //     {id: "username", value: "", error: false, helperText: ""},
    //     {id: "password", value: "", error: false, helperText: ""}
    // ]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState({error: false, helperText: ""});
    const [passwordError, setPasswordError] = useState({error: false, helperText: ""});

    const inputs = [
        {label: "Email", id: "email", type: "email"},
        {label: "Password", id: "password", type: "password"},
    ];

    const handleErrors = (e) => {
        setEmailError({error: false, helperText: ""});
        setPasswordError({error: false, helperText: ""});
            
        let valid = true;

        if (email === '') {
            setEmailError({error: true, helperText: "Email required"});
            valid = false;
        }

        if (password === '') {
            setPasswordError({error: true, helperText: "Password required"});
            valid = false;
        }

        return valid;
    }

    const handleInputs = (e, formControl) => {
        if (formControl.id === "email") setEmail(e.target.value);
        if (formControl.id === "password") setPassword(e.target.value);
    }

    const handleValue = (formControl) => {
        if (formControl.id === "email") return email;
        if (formControl.id === "password") return password;
    }

    const getError = (formControl) => {
        if (formControl.id === "email")
            return emailError;

        if (formControl.id === "password")
            return passwordError;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!handleErrors(e)) {
            console.log("Something is wrong");
            return
        };

        const user = {email, password};

        // THIS SHOULD WORK, WHY IT DIDN'T?!
        // const registerFormData = new FormData();

        // registerFormData.append('username', user.username);
        // registerFormData.append('password', user.password);

        console.log(user);

        axios.post('http://localhost:4000/login', user)
            .then(res => {
                console.log(res.data);

                if (!res.data.user) return;
                
                // if (res.data.userType === 'user')
                //     window.location.href = '/user';

                // if (res.data.userType === 'admin')
                //     window.location.href = '/admin';

                window.location.href = '/employee/newsfeed';
            })
            .catch(err => console.log(err))

        // axios.post('http://192.168.94.164:4000/users/sign_up/add', user)
        //     .then(res => {  
        //         console.log(res.data);

        //         alert("Login Successful!");

        //         setFirstname('');
        //         setMiddlename('');
        //         setLastname('');
        //         setGender('');
        //         // setAge('');
        //         // setWeight('');
        //         // setHeight('');
        //         setBirthdate('');

        //         setFullName('');
        //         setEmail('');
        //         // setUsername('');
        //         setPassword('');
        //         setConfirmPassword('');
        //         setUserType('');

        //         window.location.href = "/login";
        //     })
        //     .catch(err => {
        //         console.log(err.data);
        //         alert(`Something is wrong:\n${err.data}`);
        //         return;
        //     })

        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={2} padding='2em'>
                <h2 className='d-flex justify-content-center'>Login</h2>
                {inputs.map((formControl) => {
                    return(
                        <TextField value={handleValue(formControl)} key={formControl.id} onChange={(e) => handleInputs(e, formControl)} id={formControl.id} label={formControl.label} type={formControl.type} error={getError(formControl).error} helperText={getError(formControl).helperText}/>
                    );
                })}
                <Button variant="contained" className="p-3" sx={{backgroundColor: "black"}} type="submit">SIGN IN</Button>

                <p>Don't have an account? <Button variant="outline" href="/sign_up">SIGN UP</Button></p>
                
            </Stack>
        </form>
    );
}

const RegistrationFormUserDetails = () => {

    // Please Update to array (LATER)
    // const [registerCredentials, setRegisterCredentials] = useState([
    //     {id: "firstname", value: "", error: false, helperText: ""}
    // ]);

    //Zombie Code
    /*
    
    //Sets
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const [username, setUsername] = useState("");
    
    //Error
    const [ageError, setAgeError] = useState({error: false, helperText: ""});
    
    const [weightError, setWeightError] = useState({error: false, helperText: ""});
    const [heightError, setHeightError] = useState({error: false, helperText: ""});

    const [userNameError, setUserNameError] = useState({error: false, helperText: ""});


    //Inputs

    {id: "gender", label: "Gender", type: "text", endAdornment: null},
    {id: "age", label: "Age", type: "text", endAdornment: null},
    {id: "weight", label: "Weight", type: "text", endAdornment: "kg"},
    {id: "height", label: "Height", type: "text", endAdornment: "cm"},
    {id: "username", label: "Username", type: "text", endAdornment: null},
    */

    const [id, setId] = useState(new Object("646ebd14b3dc44baa051d8be"));

    const [firstname, setFirstname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [lastname, setLastname] = useState("");
    const [gender, setGender] = useState("");

    const [fullname, setFullName] = useState("");
    const [birthDate, setBirthdate] = useState("");
    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("");

    const [salaryRange, setSalaryRange] = useState("");

    // Error States
    const [firstNameError, setFirstNameError] = useState({error: false, helperText: ""});
    const [middleNameError, setMiddleNameError] = useState({error: false, helperText: ""});
    const [lastNameError, setLastNameError] = useState({error: false, helperText: ""});

    const [genderError, setGenderError] = useState({error: false, helperText: ""});

    const [fullNameError, setFullNameError] = useState({error: false, helperText: ""});
    const [birthdateError, setBirthdateError] = useState({error: false, helperText: ""});
    const [emailError, setEmailError] = useState({error: false, helperText: ""});

    const [passwordError, setPasswordError] = useState({error: false, helperText: ""});
    const [confirmPasswordError, setConfirmPasswordError] = useState({error: false, helperText: ""});
    const [userTypeError, setUserTypeError] = useState({error: false, helperText: ""});

    const [salaryRangeError, setSalaryRangeError] = useState({error: false, helperText: ""});

    const inputs = [
        // {id: "firstname", label: "First name", type: "text", endAdornment: null},
        // {id: "middlename", label: "Middle name", type: "text", endAdornment: null},
        // {id: "lastname", label: "Last name", type: "text", endAdornment: null},

        {id: "fullname", label: "Full name", type: "text", endAdornment: null},
        
        // {id: "birthdate", label: "Birth date", type: "text", endAdornment: null},
        {id: "email", label: "Email", type: "email", endAdornment: null},
        
        {id: "password", label: "Password", type: "password", endAdornment: null},
        {id: "confirmPassword", label: "Confirm Password", type: "password", endAdornment: null},
        {id: "userType", label: "User Type", type: "text", endAdornment: null},

        // {id: "salaryRange", label: "Salary Range", type: "select", endAdornment: null}
    ];

    const genderValue = [
        {value: "male", label: "Male"},
        {value: "female", label: "Female"}
    ];
    const userTypeValue = [
        {value: "employee", label: "Employee"},
        {value: "employer", label: "Employer"}
    ];

    const salaryRangeValue = [
        "PHP10,000 - PHP19,999",
        "PHP20,000 - PHP29,999",
        "PHP30,000 - PHP39,999",
        "PHP40,000 - PHP49,999",
        "PHP50,000 - PHP59,999",
        "PHP60,000 - PHP69,999",
        "PHP70,000 - PHP79,999",
        "PHP80,000 - PHP89,999",
        "PHP90,000 - PHP99,999"
    ];

    const handleErrors = (e) => {
        setFirstNameError({error: false, helperText: ""});
        setMiddleNameError({error: false, helperText: ""});
        setLastNameError({error: false, helperText: ""});
        setGenderError({error: false, helperText: ""});
        // setAgeError({error: false, helperText: ""});
        // setWeightError({error: false, helperText: ""});
        // setHeightError({error: false, helperText: ""});
        setBirthdateError({error: false, helperText: ""});
        setEmailError({error: false, helperText: ""});
        // setUserNameError({error: false, helperText: ""});
        setPasswordError({error: false, helperText: ""});
        setConfirmPasswordError({error: false, helperText: ""});
        setUserTypeError({error: false, helperText: ""});

        let valid = true;

        // if (firstname === '') {
        //     setFirstNameError({error: true, helperText: "First name required"});
        //     valid = false;
        // }

        // if (!firstname.match(/^[a-z A-Z]+$/)) {
        //     setFirstNameError({error: true, helperText: "First name must not have special characters"});
        //     valid = false;
        // }

        // if (middlename === '') {
        //     setMiddleNameError({error: true, helperText: "Middle name required"});
        //     valid = false;
        // }

        // if (!middlename.match(/^[a-z A-Z]+$/)) {
        //     setFirstNameError({error: true, helperText: "First name must not have special characters"});
        //     valid = false;
        // }

        // if (lastname === '') {
        //     setLastNameError({error: true, helperText: "Last name required"});
        //     valid = false;
        // }

        // if (!lastname.match(/^[a-z A-Z]+$/)) {
        //     setFirstNameError({error: true, helperText: "First name must not have special characters"});
        //     valid = false;
        // }

        if (fullname === '') {
            setFullNameError({error: true, helperText: "Full name is required"});
            valid = false;
        }

        // if (!fullname.match(/^[a-z A-Z]+$/)) {
        //     setFullNameError({error: true, helperText: "Full name must not have special characters"});
        //     valid = false;
        // }

        // if (gender === '') {
        //     setGenderError({error: true, helperText: "Gender required"});
        //     valid = false;
        // }

        // if (age === '') {
        //     setAgeError({error: true, helperText: "Age required"});
        //     valid = false;
        // }

        // if (!age.match(/^[0-9]*$/)) {
        //     setAgeError({error: true, helperText: "Age input is not a number"});
        //     valid = false;
        // }

        // if (age < 18) {
        //     setAgeError({error: true, helperText: "Age must be equal to more than 18 years old"});
        //     valid = false;
        // }

        // if (weight === '') {
        //     setWeightError({error: true, helperText: "Weight required"});
        //     valid = false;
        // }

        // if (!weight.match(/^(\d)*(\.)?([0-9]{2})?$/)) {
        //     setWeightError({error: true, helperText: "Weight input is invalid."});
        //     valid = false;
        // }

        // if (height === '') {
        //     setHeightError({error: true, helperText: "Height required"});
        //     valid = false;
        // }

        // if (!height.match(/^(\d)*(\.)?([0-9]{2})?$/)) {
        //     setHeightError({error: true, helperText: "Height input is invalid"});
        //     valid = false;
        // }

        // if (birthDate === '') {
        //     setBirthdateError({error: true, helperText: "Birthdate required"});
        //     valid = false;
        // }

        // const currentYear = new Date();
        // // console.log(currentYear.getFullYear() - birthDate.$y < 18);
        // if (currentYear.getFullYear() - birthDate.$y < 18) {
        //     setBirthdateError({error: true, helperText: "Invalid birthdate: Age is less than 18 years"});
        //     valid = false;
        // }

        if (email === '') {
            setEmailError({error: true, helperText: "Email required"});
            valid = false;
        }

        if (email.length < 6) {
            setEmailError({error: true, helperText: "Email must be more than 7 characters long"});
            valid = false;
        }

        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            setEmailError({error: true, helperText: "Invalid email"});
            valid = false;
        }
            
        // if (username === '') {
        //     setUserNameError({error: true, helperText: "Username required"});
        //     valid = false;
        // }

        // if (username.match(/\s/)) {
        //     setUserNameError({error: true, helperText: "Username must not contain whitespaces"});
        //     valid = false;
        // }

        if (password === '') {
            setPasswordError({error: true, helperText: "Password required"});
            valid = false;
        }

        if (password.match(/\s/)) {
            setPasswordError({error: true, helperText: "Password must not contain whitespaces"});
            valid = false;
        }

        if (password.length < 10 || password.length > 30) {
            setPasswordError({error: true, helperText: "Password must have 8-20 characters"});
            valid = false;
        }

        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,30}$/)) {
            setPasswordError({error: true, helperText: "Password must contain at least one digit, one uppercase letter, one lowercase letter, and one special character"});
            valid = false;
        }

        if (confirmPassword === '' || confirmPassword !== password) {
            setConfirmPasswordError({error: true, helperText: "Password is not the same"});
            valid = false;
        }

        if (userType === '') {
            setUserTypeError({error: true, helperText: "Select a user type"});
            valid = false;
        }

        // if (salaryRange === '') {
        //     setSalaryRangeError({error: true, helperText: "Salary range is required"});
        //     valid = false;
        // }

        return valid;
    }

    const getError = (formControl) => {
        // if (formControl.id === "firstname")
        //     return firstNameError.error;

        // if (formControl.id === "middlename")
        //     return middleNameError.error;

        // if (formControl.id === "lastname")
        //     return lastNameError.error;

        // if (formControl.id === "gender")
        //     return genderError.error; 

        // Try validation bruv
        // if (formControl.id === "age")
        //     return ageError.error; 

        // // Validation to float and double
        // if (formControl.id === "weight")
        //     return weightError.error;

        // // Validation to float and double
        // if (formControl.id === "height")
        //     return heightError.error;

        // if (formControl.id === "birthdate")
        //     return birthdateError.error;

        if (formControl.id === "fullname")
            return fullNameError.error;

        if (formControl.id === "email")
            return emailError.error;

        // if (formControl.id === "username")
        //     return userNameError.error;

        if (formControl.id === "password")
            return passwordError.error;

        if (formControl.id === "confirmPassword")
            return confirmPasswordError.error;

        if (formControl.id === "userType")
            return userTypeError.error;

        // if (formControl.id === "salaryRange")
        //     return salaryRangeError.error;
    }

    const getHelperText = (formControl) => {
        // if (formControl.id === "firstname")
        //     return firstNameError.helperText;

        // if (formControl.id === "middlename")
        //     return middleNameError.helperText;

        // if (formControl.id === "lastname")
        //     return lastNameError.helperText;

        // // Try validation bruv
        // if (formControl.id === "gender")
        //     return genderError.helperText; 

        // Try validation bruv
        // if (formControl.id === "age")
        //     return ageError.helperText; 

        // // Validation to float and double
        // if (formControl.id === "weight")
        //     return weightError.helperText;

        // // Validation to float and double
        // if (formControl.id === "height")
        //     return heightError.helperText;

        if (formControl.id === "birthdate")
            return birthdateError.helperText;

        if (formControl.id === "fullname")
            return fullNameError.helperText;

        if (formControl.id === "email")
            return emailError.helperText;

        // if (formControl.id === "username")
        //     return userNameError.helperText;

        if (formControl.id === "password")
            return passwordError.helperText;

        if (formControl.id === "confirmPassword")
            return confirmPasswordError.helperText;

        if (formControl.id === "userType")
            return userTypeError.helperText;

        // if (formControl.id === "salaryRange")
        //     return salaryRangeError.helperText;
    }

    const handleInputs = (e, formControl) => {
        if (formControl.id === "firstname") setFirstname(e.target.value);
        if (formControl.id === "middlename") setMiddlename(e.target.value);
        if (formControl.id === "lastname") setLastname(e.target.value);
        if (formControl.id === "gender") setGender(e.target.value);

        // New Values
        // if (formControl.id === "age") setAge(e.target.value);
        // if (formControl.id === "weight") setWeight(e.target.value);
        // if (formControl.id === "height") setHeight(e.target.value);

        if (formControl.id === "birthdate") setBirthdate(e);

        if (formControl.id === "fullname") setFullName(e.target.value);
        if (formControl.id === "email") setEmail(e.target.value);
        // if (formControl.id === "username") setUsername(e.target.value);
        if (formControl.id === "password") setPassword(e.target.value);
        if (formControl.id === "confirmPassword") setConfirmPassword(e.target.value);
        if (formControl.id === "userType") setUserType(e.target.value);
    }

    const handleValue = (formControl) => {
        if (formControl.id === "firstname") return firstname;
        if (formControl.id === "middlename") return middlename;
        if (formControl.id === "lastname") return lastname;
        if (formControl.id === "gender") return gender;

        // New Values
        // if (formControl.id === "age") return age;
        // if (formControl.id === "weight") return weight;
        // if (formControl.id === "height") return height;

        if (formControl.id === "birthdate") return birthDate;

        if (formControl.id === "fullname") return fullname;
        if (formControl.id === "email") return email;
        // if (formControl.id === "username") return username;
        if (formControl.id === "password") return password;
        if (formControl.id === "confirmPassword") return confirmPassword;
        if (formControl.id === "userType") return userType;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //const birthdate = new Date(birthDate.$y, birthDate.$M, birthDate.$D);

        const user = {id, fullname, email, password}

        if (!handleErrors(e)) { 
            console.log("Something is wrong");
            return;
        }

        console.log(user);

        // axios.put('http://192.168.94.164:4000/users/update/:id', user)
        //     .then(res => {
        //         alert("Update successful!")
        //         console.log(res.data);
        //     })
        //     .catch(err => {
        //         alert(`Error: ${err}`)
        //         console.log(err);
        //     })

        // const user = {firstname, middlename, lastname, age, weight, height}; //birthdate, email, username, password

        // THIS SHOULD WORK, WHY IT DIDN'T?!
        // const registerFormData = new FormData();

        // registerFormData.append('firstname', user.firstname);
        // registerFormData.append('middlename', user.middlename);
        // registerFormData.append('lastname', user.lastname);
        // registerFormData.append('birthdate', user.birthdate);
        // registerFormData.append('email', user.email);
        // registerFormData.append('username', user.username);
        // registerFormData.append('password', user.password);

        // console.log(user);

        // (inhales) BRO
        axios.post('http://192.168.94.164:4000/users/sign_up/add', user)
            .then(res => {  
                console.log(res.data);

                alert("Login Successful!");

                setFirstname('');
                setMiddlename('');
                setLastname('');
                setGender('');
                // setAge('');
                // setWeight('');
                // setHeight('');
                setBirthdate('');

                setFullName('');
                setEmail('');
                // setUsername('');
                setPassword('');
                setConfirmPassword('');
                setUserType('');

                window.location.href = "/login";
            })
            .catch(err => {
                console.log(err.data);
                alert(`Something is wrong:\n${err.data}`);
                return;
            })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Registration</h2>
            <Stack spacing={2}>
                {inputs.map((formControl, index) => {
                    if (formControl.id === 'birthdate')
                        return (
                            <LocalizationProvider key={`lp-${formControl.id}`} dateAdapter={AdapterDayjs}>
                                <DatePicker value={handleValue(formControl)} key={formControl.id} onChange={(e) => handleInputs(e, formControl)} slotProps={{textField: {helperText: getHelperText(formControl), label: formControl.label, error: getError(formControl)}}} /> {/*  */}
                            </LocalizationProvider>
                        )   
                    
                    if (formControl.id === 'gender')
                        return(
                            <FormControl error={getError(formControl)}>
                                <FormLabel id={formControl.id}>{formControl.label}</FormLabel>
                                <RadioGroup
                                    row
                                    onChange={(e) => handleInputs(e, formControl)}
                                    value={handleValue(formControl)}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group">
                                    {genderValue.map((el) => <FormControlLabel value={el.value} control={<Radio />} label={el.label}/>)}
                                </RadioGroup>
                                <FormHelperText>{getHelperText(formControl)}</FormHelperText>
                            </FormControl>
                        )

                    if (formControl.id === 'salaryRange')
                        return(
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">{formControl.label}</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id={formControl.id}
                                    value={handleValue(formControl)}
                                    label={formControl.label}
                                    onChange={(e) => handleInputs(e, formControl)}
                                >
                                    {salaryRangeValue.map((el) => {
                                            return(<MenuItem value={el}>{el}</MenuItem>)
                                        })}
                                </Select>
                            </FormControl>
                        )
                    
                    if (formControl.id === 'userType')
                        return(
                            <FormControl error={getError(formControl)}>
                                <FormLabel id={formControl.id}>{formControl.label}</FormLabel>
                                <RadioGroup
                                    row
                                    onChange={(e) => handleInputs(e, formControl)}
                                    value={handleValue(formControl)}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group">
                                    {userTypeValue.map((el) => <FormControlLabel value={el.value} control={<Radio />} label={el.label} />)}
                                </RadioGroup>
                                <FormHelperText>{getHelperText(formControl)}</FormHelperText>
                            </FormControl>
                        )

                    return(
                        <FormGroup>
                            <TextField value={handleValue(formControl)} onChange={(e) => handleInputs(e, formControl)} id={formControl.id} label={formControl.label} type={formControl.type} InputProps={{ endAdornment: <InputAdornment>{formControl.endAdornment}</InputAdornment>}} error={getError(formControl)} onError={(e) => handleErrors(e)} helperText={getHelperText(formControl)}/>
                        </FormGroup>
                    )
                })}
                {/* <Button variant="contained" className={`p-3 ${buttonStyle.primaryButton}`} color='primary' type="submit" sx={{bgcolor: "#000000", "&:hover": {bgcolor: "#FFFFFF", color: "#000"}}} >SUBMIT</Button> */}

                {/* <p>Already have an account? <Button variant="outline" className="p-1" href="/login">SIGN IN</Button></p> */}
            </Stack>
        </form>
    );
}

const RegistrationFormFields = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

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

    return (
        <form> {/* onSubmit={(e) => handleSubmit(e)} */}
            <h2>Choose Field</h2>
            <Grid spacing={2}>
                {fields.map((el) => {
                    <Grid item xs={8}>
                        <Item>{el}</Item>
                    </Grid>
                })}
            </Grid>
        </form>
    );
 
}

const RegistrationFormPosition = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const position = [
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

    return (
        <form > {/*onSubmit={(e) => handleSubmit(e)}*/}
            <h2>Choose Position</h2>
            <Grid spacing={2}>
                {position.map((el) => {
                    <Grid item xs={8}>
                        <Item>{el}</Item>
                    </Grid>
                })}
            </Grid>
        </form>
    );
}

export { RegistrationFormUserDetails, RegistrationFormFields, RegistrationFormPosition, LoginForm } //LoginForm