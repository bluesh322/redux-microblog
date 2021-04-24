import { useDispatch } from "react-redux";
import React from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Close } from "@material-ui/icons";
import { removeCommentFromAPI } from "../../reducers/actions";

const Comment = ({ id, text }) => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const remove = () => {
    dispatch(removeCommentFromAPI(postId, id));
  };
  return (
    <Box>
      <Typography variant="body1">
        <IconButton onClick={remove}>
          <Close color="secondary"></Close>
        </IconButton>
        {text}
      </Typography>
    </Box>
  );
};

export default Comment;
