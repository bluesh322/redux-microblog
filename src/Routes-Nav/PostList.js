import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { fetchPostsFromAPI } from "../reducers/actions";
import { Link } from "react-router-dom";

const PostList = () => {
  const posts = useSelector((st) => st.posts);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     async function fetchPost() {
  //         await dispatch(fetchPostsFromAPI());
  //         setIsLoading(false);
  //     }
  // }, [dispatch, id]);


  return Object.keys(posts).length === 0 ? (
    <b>Please add a post!</b>
  ) : (
    <Box mt={2}>
      {Object.values(posts).map(({ id, title, description }) => {
        return (
          <Box m={2}>
            <Card>
              <CardContent>
                <Typography variant="h5">
                  <Link to={`/${id}`}>{title}</Link>
                </Typography>
                <Typography variant="body1">{description}</Typography>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
};

export default PostList;
