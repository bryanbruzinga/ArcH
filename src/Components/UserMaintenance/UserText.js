import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { IconButton } from "@material-ui/core";
import { ReactComponent as Search } from "../../Assets/search.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "15rem",
    },
  },
}));

function handleSubmit(event) {
  event.preventDefault();
}

export default function UserText() {
  const classes = useStyles();

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          id="standard-textarea"
          label="Consulta"
          placeholder="Consultar dados"
        />
        <IconButton
          type="submit"
          styles={{ height: "20px", width: "20px", cursor: "pointer" }}
          aria-label="search"
        >
          <Search />
        </IconButton>
      </div>
    </form>
  );
}
