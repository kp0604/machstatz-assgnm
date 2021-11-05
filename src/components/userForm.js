import { React, useState } from "react";
import axios from "axios";
import {
  Typography,
  Box,
  TextField,
  Grid,
  Select,
  Stack,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  IconButton,
  Button,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const UserForm = () => {
  const initialUserObj = {
    email: "",
    fist_name: "",
    last_name: "",
    pwd: "",
    username: "",
  };
  const [userObj, setUserObj] = useState(initialUserObj)


  const [togglePass, settogglePass] = useState(false);
  
  // const handleChangePassVal = (prop) => (event) => {
  //   setValuePass({ ...valuePass, [prop]: event.target.value });
  // };

  const handleClickShow = () => {
    settogglePass((prev)=>!prev);
  };

  const handleMouseDownpwd = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userObj)
    const { fist_name, last_name, pwd, email, username } = userObj;
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    if (fist_name && last_name && pwd && email && username) {
     
      axios
        .post("http://3.6.93.159:7853/machstatz/add_new_user",config,userObj)
        .then(function (response) {
          console.log(response);
          alert("User Added Successfully")
        })
        .catch(function (error) {
          console.log(error);
          alert("Couldn't add user'")
        });
      handleReset()
    }
    else {
      alert("enter all");
    }
  };

  const handleChangeInput = (e) => {
    const {name,value}=e.target
    setUserObj( {...userObj, [name]: value})
  }

  const handleReset = () => {
    setUserObj(initialUserObj)
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      bgcolor="white"
      p={2}
    >
      <Typography variant="h4" component="h4" textAlign="center">
        Add User
      </Typography>

      <form noValidate onSubmit={handleSubmit} onReset={handleReset}>
        <Stack
          direction="column"
          justifyContent="center"
          spacing={2}
          mt={2}
          mb={2}
          p={4}
        >
          <TextField
            fullWidth
            variant="outlined"
            value={userObj.fist_name}
            label="First name"
            name="fist_name"
            onChange={handleChangeInput}
          />

          <TextField
            fullWidth
            variant="outlined"
            value={userObj.last_name}
            label="Last name"
            name="last_name"
            onChange={handleChangeInput}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Profile</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Profile"
            >
              <MenuItem value={"Engineer"}>Engineer</MenuItem>
              <MenuItem value={"Doctor"}>Doctor</MenuItem>
              <MenuItem value={"Pilot"}>Pilot</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            variant="outlined"
            label="Username"
            value={userObj.username}
            name="username"
            onChange={handleChangeInput}
          />

          <TextField
            fullWidth
            variant="outlined"
            label="Email Address"
            value={userObj.email}
            type="email"
            name="email"
            onChange={handleChangeInput}
          />

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-pwd">Password</InputLabel>

            <OutlinedInput
              id="outlined-adornment-pwd"
              type={togglePass ? "text" : "password"}
              value={userObj.pwd}
              name="pwd"
              onChange={handleChangeInput}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle pwd visibility"
                    onClick={handleClickShow}
                    onMouseDown={handleMouseDownpwd}
                    edge="end"
                  >
                    {togglePass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Stack direction="row" justifyContent="center" spacing={4}>
            <Button sx={{ width: 100 }} variant="contained" color="error" type="reset">
              Cancel
            </Button>
            <Button
              sx={{ width: 100 }}
              variant="contained"
              bgcolor="success"
              type="submit"
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default UserForm;
