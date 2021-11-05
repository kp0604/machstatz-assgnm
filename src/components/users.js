import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import UserCard from "./userCard";
import axios from "axios";

const Users = () => {
  const [userData, setUserData] = useState();
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};
    useEffect(
        () => {
            async function getData() {
                try {
                    console.log(userData);
                    const res = await axios.get(
                        "http://3.6.93.159:7853/machstatz/get_all_users",config
                    );
                    const data = res.data;
                    setUserData(() => data);
                    console.log(data);
                }
                catch (error) {
                    console.log(error)
                }
            }
            getData()
        }
          ,
    []
  );

  
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} p={2}>
      <Typography variant="h4" component="h4" textAlign="center">
        Users
      </Typography>
      <Grid container spacing={3} p={5}>
        {(userData) ? (
          userData.map((user) => (
            <Grid item>
                  <UserCard user={user}/>
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography variant="h5" component="h5">
              Loading...
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Users;
