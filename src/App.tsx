import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab4 from "./pages/Tab4";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";
import "./theme/tabbar.css";
import CustomTabBar from "./components/CustomTabBar";
import DesktopTabBar from "./components/DesktopTabBar";

setupIonicReact();

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHideSplash(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setLoading(false);
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
        <div className="mobile-only">
          <CustomTabBar />
        </div>
        <div className="desktop-only">
          <DesktopTabBar />
        </div>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
