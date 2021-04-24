import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 } from "uuid";
import { TextField, Button } from "@material-ui/core";
import { sendPostToAPI } from "../../reducers/actions";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const INITIAL_STATE = {
  title: "",
  description: "",
  body: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    margin: theme.spacing(1),
  },
  btn: {
    margin: theme.spacing(1),
  },
}));

const NewPostForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const dispatch = useDispatch();

  const add = (newPost) => {
    dispatch(sendPostToAPI(newPost));
  };

  const cancel = () => {
    history.push("/");
  };

  function handleSubmit(e) {
    e.preventDefault();
    add({ ...formData, id: v4() });
    setFormData(INITIAL_STATE);
    history.push("/");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <h2>Add a Post</h2>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="title"
          variant="outlined"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={classes.textField}
        ></TextField>
        <TextField
          fullWidth
          label="description"
          variant="outlined"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={classes.textField}
        ></TextField>
        <TextField
          fullWidth
          label="body"
          variant="outlined"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
          multiline
          rows={10}
          className={classes.textField}
        ></TextField>
        <Button onClick={handleSubmit} className={classes.btn} variant="contained" color="primary">
          Add Post
        </Button>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={cancel}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default NewPostForm;
