import { useSelector } from "react-redux";
import React from "react";
import { v4 } from "uuid";
import { Box, List, ListItem } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Comment from "../Comments/Comment";

const CommentList = () => {
  const { postId } = useParams();
  const {comments} = useSelector((st) => st.posts[postId]);
  return (
    <Box mt={2}>
      <List>
        {comments.map(({ id, text }) => {
          return (
            <ListItem key={id}>
              <Comment key={String(id)} id={id} text={text}></Comment>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default CommentList;
