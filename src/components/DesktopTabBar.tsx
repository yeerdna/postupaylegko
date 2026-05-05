import React from "react";
import { useIonRouter } from "@ionic/react";
import { useLocation } from "react-router-dom";
import "./DesktopTabBar.css";

const DesktopTabBar: React.FC = () => {
  const router = useIonRouter();
  const location = useLocation();

  const tabs = [
    {
      href: "/tab1",
      label: "Главная",
      icon: "/assets/icons/House02.svg",
    },
    {
      href: "/tab2",
      label: "Чек-лист",
      icon: "/assets/icons/Check.svg",
    },
    {
      href: "/tab3",
      label: "Вопросы",
      icon: "/assets/icons/QuestionOutlined.svg",
    },
    {
      href: "/tab4",
      label: "Ссылки",
      icon: "/assets/icons/ListNested.svg",
    },
  ];

  return (
    <div className="desktop-tabbar">
      {tabs.map((tab) => (
        <div
          key={tab.href}
          className={`desktop-tab ${location.pathname === tab.href ? "active" : ""}`}
          onClick={() => router.push(tab.href)}
        >
          <img src={tab.icon} alt={tab.label} className="desktop-tab-icon" />
          <span className="desktop-tab-label">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DesktopTabBar;
