import UserForm from "./components/userForm";
import { Grid} from "@mui/material";
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
        
        <Grid
          container
          width="100vw"
          height="100vh"
        >
          <Grid
            item
            
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
