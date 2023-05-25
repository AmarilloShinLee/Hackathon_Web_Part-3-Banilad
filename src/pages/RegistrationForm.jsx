import { useState, axios } from 'react'
import { Container, Paper, Stack, Box, Grid, Drawer, Stepper, Step, StepLabel, Button } from '@mui/material';
import { TextField, FormGroup, InputAdornment, Radio, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText,
    Menu, MenuItem, Select, InputLabel } from "@mui/material";
import { Typography, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { RegistrationFormUserDetails } from "../components/Form"
import { Navbar } from "../components/NavBar"
import { Sidebar } from '../components/SideBar';

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

const RegistrationPage = () => {

    const submitTest = (e) => {
        console.log("Hello World!");
    }

    const [state, setState] = useState(0);

    const steps = [
        'User Details',
        'Career Select',
        'Position Select',
    ];      

    const submitDetails = (e) => {
        setState(state - 10);
    }

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
        <>
            <Box>
                <Grid container>
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
                                {/* <RegistrationFormUserDetails onChange={submitTest} /> */}
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

                                        <Button onChange={(e) => console.log(e.target.value)} variant='contained' color='primary' onClick={(e) => setState(state + 10)}>
                                        <Typography variant="h3">NEXT</Typography>
                                        </Button>

                                        <Button variant='contained' color='secondary' onClick={(e) => setState(state - 10)}>
                                        <Typography variant="h3">BACK</Typography>
                                        </Button>

                                    </ThemeProvider>
                                </Stack>

                            </Box>
                        </Drawer>
                    </Grid>
                </Grid>
            </Box>
        </>
        
    )
}

export default RegistrationPage;    