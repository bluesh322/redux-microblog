import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NewPostForm from "./NewPostForm";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList"

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/">
        <PostList></PostList>
      </Route>
      <Route exact path="/new">
        <NewPostForm ></NewPostForm>
      </Route>
      <Route>
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default Routes;
