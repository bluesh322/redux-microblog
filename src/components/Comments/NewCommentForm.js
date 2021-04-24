import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { sendCommentToAPI } from "../../reducers/actions";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { useParams } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";

const INITIAL_STATE = {
  text: "",
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

const NewCommentForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { postId } = useParams();

  const dispatch = useDispatch();

  const add = (newComment) => {
    dispatch(sendCommentToAPI(postId, newComment));
  };

  function handleSubmit(e) {
    e.preventDefault();
    add(formData.text);
    setFormData(INITIAL_STATE);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  }
  return (
    <div>
      <h3>Add a comment</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="text"
          variant="outlined"
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          className={classes.textField}
        ></TextField>

        <Button
          onClick={handleSubmit}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Add Comment
        </Button>
      </form>
    </div>
  );
};


export default NewCommentForm;