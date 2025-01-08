import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

const LoginPage = () => {
  const [loginCred,setLoginCred]=useState({email:"",password:""});
 

  const postFetchAPI=(data)=>{
    let Jdata=JSON.stringify(data);
     console.log(Jdata,"jsondata");
      fetch(`bffapi.biztel.ai:8080/api/auth/login`,
        {
          method:"POST",
          body:Jdata,
          headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }
      )
      .then(resp=>resp.json())
      .then(json=>console.log(json,"json post request success"))
      .catch(error=>{
        console.log("Fetch Post Error",error);
        alert("Unsuccessful login fetch request");
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginCred,"loginCred");
    postFetchAPI(loginCred);

  };
  const handleChanges=(e)=>{
    const {name,value}=e.target;
    setLoginCred({...loginCred,[name]:value});
  };
  return (
    <div>
      <Paper
        elevation={3}
        sx={{ maxWidth: 400, margin: "auto", padding: 4, mt: 4 }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ m: "30px" }}>
            <TextField
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              name="email"
              onChange={handleChanges}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-password-input"
              type="password"
              label="Enter password"
              variant="outlined"
              name="password"
              autoComplete="current-password"
              onChange={handleChanges}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontSize: { xs: "10px", sm: "14px" }, mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default LoginPage;
