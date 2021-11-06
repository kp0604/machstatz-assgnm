import UserForm from "./components/userForm";
import { Grid, AppBar, Typography } from "@mui/material";
import Users from "./components/users";
import { GetDataContext } from "./contexts/getDataContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // // console.log(userData);
      const res = await axios.get(
        "http://3.6.93.159:7853/machstatz/get_all_users"
      );
      const data = res.data;
      setUserData(() => data);
      // // // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GetDataContext.Provider value={{ userData, getData }}>
        <AppBar position="static" color="transparent" sx={{ padding :2}}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Typography
                variant="h4"
                color="black"
                component="h4"
                textAlign="center"
              >
                Users
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Typography variant="h4" component="h4" textAlign="center">
                Add User
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
        <Grid
          container
          // columns={2}
          // xs={{xs:2,sm:2,md:2,lg:2}}
          // sm={2}
          // md={2}
          // lg={2}
          width="100vw"
          height="100vh"
        >
          <Grid
            item
            // width="70vw"
            xs={12}
            sm={12}
            md={12}
            lg={8}
            bgcolor="whitesmoke"
          >
            <Users />
          </Grid>
          <Grid
            item
            // width="30vw"
            xs={12}
            sm={12}
            md={12}
            lg={4}
          >
            <UserForm />
          </Grid>
        </Grid>
      </GetDataContext.Provider>
    </div>
  );
}

export default App;
