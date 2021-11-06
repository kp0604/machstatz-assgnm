import React, { useContext } from "react";
import { Box, Typography, Grid} from "@mui/material";
import UserCard from "./userCard";
import  {GetDataContext} from '../contexts/getDataContext'


const Users = () => {
 
const {userData} =useContext(GetDataContext)
   
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} p={4}>
      <Typography variant="h4" bgcolor="white" color="black" component="h4" textAlign="center" mb={4}>
        Users
      </Typography>
      <Grid
        container
        spacing={2}
        
      >
        {userData ? (
          userData.map((user) => (
            <Grid item xs={12} sm={12} md={3} lg={4}>
              <UserCard user={user} />
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
