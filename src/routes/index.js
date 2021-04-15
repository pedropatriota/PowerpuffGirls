import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const tvShowPage = lazy(() => import("../pages/tvShow"));
const detailPage = lazy(() => import("../pages/detailEpisode"));

const Routes = () => (
  <Suspense fallback="Loding...">
    <Switch>
      <Route path="/" exact component={tvShowPage} />
      <Route path="/episode/:id" component={detailPage} />
    </Switch>
  </Suspense>
);

export default Routes;
