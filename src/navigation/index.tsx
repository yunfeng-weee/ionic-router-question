/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import Test1 from "../pages/pages/test1";
import Test2 from "../pages/pages/test2";
import Test3 from "../pages/pages/test3";
import Test4 from "../pages/pages/test4";
import Test5 from "../pages/pages/test5";
import Test6 from "../pages/pages/test6";

export default function Router() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/test/test1" />
        </Route>
        <Route exact path="/test/test1">
          <Test1/>
        </Route>
        <Route exact path="/test/test2/:location">
          <Test2/>
        </Route>
        <Route exact path="/test/test3/:location">
          <Test3/>
        </Route>
        <Route exact path="/test/test4/:location">
          <Test4/>
        </Route>
        <Route exact path="/test/test5/:location">
          <Test5/>
        </Route>
        <Route exact path="/test/test6/:location">
          <Test6/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
