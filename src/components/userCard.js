import React,{ useContext} from "react";
import { Paper, Typography, Avatar, Stack, IconButton } from "@mui/material";
import { green } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { GetDataContext } from "../contexts/getDataContext";

const UserCard = (props) => {

  const { getData } = useContext(GetDataContext);

  const handleClick = (delUser) => {
    console.log(delUser);
    async function delData() {
      try {
        const res = await axios.delete(
          "http://3.6.93.159:7853/machstatz/delete_existing_user",
          { params: { email: delUser } }
        );
        const data = res.data;
        console.log(data);
        getData()
        // alert(data.message);
      } catch (error) {
        console.log(error);
      }
    }
    delData();
  };

  return (
    <Paper elevation={4}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" p={2}>
        
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: green[500] }}>
            {props.user.fist_name[0]}
          </Avatar>
          <Typography>{props.user.fist_name}</Typography>
        </Stack>
        <IconButton
          aria-label="delete"
          onClick={() => {
            handleClick(props.user.email);
          }}
        >
          <DeleteIcon color="error" />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default UserCard;
