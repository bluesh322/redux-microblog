import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Grid, IconButton } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import NewCommentForm from "../Comments/NewCommentForm";
import CommentList from "../Comments/CommentList";
import {
  fetchPostFromAPI,
  removePostFromAPI,
  updatePostInAPI,
} from "../../reducers/actions";
import { Edit, Delete } from "@material-ui/icons";
import UpdatePostForm from "../Posts/UpdatePostForm";

const Post = () => {
  const { postId } = useParams();
  const post = useSelector((st) => st.posts[postId]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function fetchPost() {
      await dispatch(fetchPostFromAPI(postId));
      setIsLoading(false);
    }
    fetchPost();
    
  }, [dispatch, postId]);

  const toggleEdit = () => {
    setIsEditing((edit) => !edit);
  };

  const save = (post) => {
    dispatch(updatePostInAPI(post));
    toggleEdit();
  };

  const deletePost = () => {
    dispatch(removePostFromAPI(postId));
    history.push("/");
  };

  if (isLoading) {
    return <b>Loading ...</b>;
  }
  return (
    <Box>
      {isEditing ? (
        <UpdatePostForm post={post} save={save}></UpdatePostForm>
      ) : (
        <Box mt={2}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <Typography variant="h2">{post.title}</Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={toggleEdit}>
                  <Edit color="primary"></Edit>
                </IconButton>
                <IconButton onClick={deletePost}>
                  <Delete color="secondary"></Delete>
                </IconButton>
              </Grid>
            </Grid>
            <Typography variant="h4">{post.description}</Typography>
            <Typography variant="body1">{post.body}</Typography>
          </Paper>
          <CommentList></CommentList>
          <Box my={1}>
            <NewCommentForm id={postId}></NewCommentForm>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Post;
