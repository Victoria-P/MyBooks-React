import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Books from "./books";
import NotFound from "./notFound";
import AdminPage from "./adminPage";
import LoginForm from "./auth/loginForm";
import RegisterForm from "./auth/registerForm";
import Logout from "./auth/logout";
import AdminBookCard from "./adminBookCard";

const Router = () => {
  return (
    <main className="container">
      <div className="content">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />

          <Route
            path="/favourite-books"
            render={(props) => <Books {...props} favourite={true} />}
          />
          <Route path="/books" component={Books} />

          <Route path="/admin/new-book" component={AdminBookCard} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" component={Books} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
};

export default Router;
