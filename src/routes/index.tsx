import { Switch, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";

export const Routes = () => (
  <Switch>
    <Route path="/" component={SignIn} />
  </Switch>
);
