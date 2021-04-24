import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NewPostForm from "../../components/Posts/NewPostForm";
import PostList from "../../components/Posts/PostList"
import Post from "../../components/Posts/Post";

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <PostList></PostList>
      </Route>
      <Route exact path="/new">
        <NewPostForm ></NewPostForm>
      </Route>
      <Route exact path="/:postId">
        <Post></Post>
      </Route>
      <Route>
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default Routes;
