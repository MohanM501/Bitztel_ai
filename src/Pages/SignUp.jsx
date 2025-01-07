import { Box, Paper, TextField,Button} from "@mui/material";
import React, { useState } from "react";

const SignUp = () => {
  const [validatePassword, setValidatePassword] = useState(true);
  const [fields,setFields]=useState({name:"",email:"",password:"",confirmPassword:""});

  const handleChanges=(e)=>{

    let {name,value}=e.target;
    setFields({...fields,[name]:value});

  }

  const fetchSubmit=(data)=>{
    let Jdata=JSON.stringify(data);
     console.log(Jdata,"jsondata");
      fetch(`bffapi.biztel.ai:8080/api/auth/signup`,
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
        alert("Unsuccessful signup fetch request");
      })
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("singUp submit",fields);
    if(!fields.email.includes("@")){
        alert("Not a valid email");
    }else if(fields.password.length<8){
      alert("password length should be atleast 8 digits");
      setValidatePassword(false);
    }else if(fields.password!=fields.confirmPassword){
      alert("confirm password is not matching the password");
      setValidatePassword(false);
    }else{
      fetchSubmit(fields)
    }
  }


  return (
    <div>
      <Paper elevation={3} sx={{ maxWidth: 400, margin: "auto", padding: 4, mt: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
      <Box sx={{ m: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
          name="name"
          onChange={handleChanges}
        />
      </Box>
      <Box sx={{ m: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
          name="email"
          onChange={handleChanges}
        />
      </Box>
      <Box sx={{ m: "30px" }}>
        {validatePassword ? (
          <TextField
            id="outlined-password-input"
            type="password"
            label="Enter password"
            variant="outlined"
            name="password"
            autoComplete="current-password"
            onChange={handleChanges}
          />
        ) : (
          <TextField
            error
            id="outlined-error"
            label="Error"
            type="password"
            defaultValue="Enter correct password"
            onChange={()=>setValidatePassword(true)}
          />
        )}
      </Box>
      <Box>
      <TextField
            id="outlined-basic"
            type="password"
            label="Confirm password"
            variant="outlined"
            name="confirmPassword"
            onChange={handleChanges}
          />
      </Box>

      <Button
            type="submit"
            variant="contained"
            sx={{ fontSize: { xs: "10px", sm: "14px" },mt:2 }}
            
          >
            Sign Up
          </Button>
          </Box>
      </Paper>
    </div>
  );
};

export default SignUp;
