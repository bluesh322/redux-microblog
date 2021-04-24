import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  fetchAllPostsFromAPI,
  sendVoteToAPI,
} from "../../reducers/actions";
import { Link } from "react-router-dom";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";

const PostList = () => {
  const posts = useSelector((st) => st.posts);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const vote = (id, direction) => {
    console.log("id", id, "direction", direction)
    dispatch(sendVoteToAPI(id, direction, posts[id]));
  };

  useEffect(() => {
    async function fetchPosts() {
      dispatch(fetchAllPostsFromAPI());
      setIsLoading(false);
    }
    fetchPosts();
  }, [dispatch]);

  if (isLoading) {
    return <b>Loading ...</b>;
  }

  return Object.keys(posts).length === 0 ? (
    <b>Please add a post!</b>
  ) : (
    <div>
      {Object.values(posts).map(({ id, title, description, votes }) => {
        return (
          <Box key={id} mt={1}>
            <Card >
              <CardContent>
                <Typography variant="h5">
                  <Link to={`/${id}`}>{title}</Link>
                </Typography>
                <Typography variant="body1">{description}</Typography>
                <Typography variant="body1">{votes} votes</Typography>
                <IconButton id={id} onClick={evt => vote(id, "up")}>
                  <ArrowUpward color="primary"></ArrowUpward>
                </IconButton>
                <IconButton id={id} onClick={evt => vote(id, "down")}>
                  <ArrowDownward color="secondary"></ArrowDownward>
                </IconButton>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </div>
  );
};

export default PostList;
