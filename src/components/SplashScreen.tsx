import "./SplashScreen.css";

const SplashScreen: React.FC<{ hide?: boolean }> = ({ hide }) => {
  return (
    <div className={`splash-screen ${hide ? "hide" : ""}`}>
      <img src="/assets/icons/splashscreen.svg" className="splash-logo" />
      <div className="spltxt">
        <p className="splash-text">ПоступайЛегко</p>
        <p className="splash-descr">-помощник абитуриента</p>
      </div>
    </div>
  );
};

export default SplashScreen;
