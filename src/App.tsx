import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
import "./theme/variables.css";
import "./theme/tabbar.css";
import CustomTabBar from "./components/CustomTabBar";

setupIonicReact();

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHideSplash(true); // запускаем fade
    }, 2000);

    const timer2 = setTimeout(() => {
      setLoading(false); // убираем splash
    }, 2600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <IonApp>
      {loading && <SplashScreen hide={hideSplash} />}

      <IonReactRouter>
        <IonRouterOutlet animated={false}>
          <Route path="/tab1" component={Tab1} exact />
          <Route path="/tab2" component={Tab2} exact />
          <Route path="/tab3" component={Tab3} exact />
          <Route path="/tab4" component={Tab4} exact />
          <Route exact path="/" render={() => <Redirect to="/tab1" />} />
        </IonRouterOutlet>

        <CustomTabBar />
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
