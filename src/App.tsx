import { IonApp, setupConfig } from "@ionic/react";

/* Theme variables */
import "./theme/shared.scss";
import "./theme/variables.scss";

import Router from "./navigation";
import { Provider } from "react-redux";

import { persistor, store } from "./stores";

setupConfig({
  backButtonText: "",
  rippleEffect: false,
});

const App: React.FC = () => (
  <Provider store={store}>
      <IonApp>
        <Router />
      </IonApp>
  </Provider>
);

export default App;
