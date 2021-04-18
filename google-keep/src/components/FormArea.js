import { Fab, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function FormArea({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function clickHandler() {
    addNote(note);
    setNote({
      title: "",
      content: "",
    });
  }
  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }
  return (
    <Paper style={{ margin: "10px 10%", padding: "2px 50px" }}>
      <form>
        <TextField
          onChange={changeHandler}
          name="title"
          value={note.title}
          label="title"
          fullWidth
          autoComplete="off"
        />
        <TextField
          onChange={changeHandler}
          name="content"
          label="content"
          value={note.content}
          multiline
          rows={4}
          fullWidth
          autoComplete="off"
        />
        <Fab
          onClick={clickHandler}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
