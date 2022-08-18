import { Switch } from "react-router-dom";
import { Route } from "./Route";

import { useAuth } from "../contexts/Auth";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { PageNotFound } from "../pages/PageNotFound";

export const Routes = () => {
  const { accessToken } = useAuth();

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};
