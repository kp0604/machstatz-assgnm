import React from "react";
import { Paper, Typography, Avatar, Stack, IconButton } from "@mui/material";
import { green } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const UserCard = (props) => {
  const handleClick = (delUser) => {
    console.log(delUser);
    async function delData() {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      try {
        const res = await axios.delete(
          "http://3.6.93.159:7853/machstatz/delete_existing_user/",config,
          delUser
        );
        const data = res.data;
        console.log(data);
        alert(data.message);
      } catch (error) {
        console.log(error);
      }
    }
    delData();
  };

  return (
    <Paper variant="outlined" sx={{ padding: 2, minWidth: 200 }} elevation={4}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
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
          <DeleteIcon color="error"  />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default UserCard;
