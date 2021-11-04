import UserForm from "./components/userForm";
import { Grid } from "@mui/material";
import Users from "./components/users";
// import {gray} from '@mui/material/colors'
// import React, { useEffect } from "react";


function App() {
  

  return (
    <div>
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
          // xs={10}
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
          // xs={10}
          sm={12}
          md={12}
          lg={4}
        >
          <UserForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
