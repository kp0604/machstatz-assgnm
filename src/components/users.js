import React, { useContext } from "react";
import { Box, Typography, Grid} from "@mui/material";
import UserCard from "./userCard";
import  {GetDataContext} from '../contexts/getDataContext'


const Users = () => {
 
const {userData} =useContext(GetDataContext)
   
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }} p={6}>
      <Grid
        container
        spacing={2}
        // columnSpacing={{md: 2,lg:2 }}
        // rowSpacing={{ xs: 2, md: 2, lg: 2 }}
        // rows={{xs:12,sm:12,md:12,lg:12}}
        // columns={{ xs: 12, sm: 12, md: 12,lg:12 }}
        // p={2}
        // mt={1}
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
