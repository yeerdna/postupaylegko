import { IonIcon, useIonRouter } from "@ionic/react";
import { useLocation } from "react-router-dom";
import React from "react";
import "../theme/tabbar.css";

const CustomTabBar: React.FC = () => {
  const location = useLocation();
  const router = useIonRouter();
  const tabs = [
    { href: "/tab1", icon: "/assets/icons/House02.svg", label: "Главная" },
    { href: "/tab2", icon: "/assets/icons/Check.svg", label: "Чек-лист" },
    {
      href: "/tab3",
      icon: "/assets/icons/QuestionOutlined.svg",
      label: "Вопросы",
    },
    { href: "/tab4", icon: "/assets/icons/ListNested.svg", label: "Ссылки" },
  ];

  return (
    <div className="custom-tab-panel">
      {tabs.map((tab) => (
        <div
          key={tab.href}
          className={`tab-button ${
            location.pathname === tab.href ? "active" : ""
          }`}
          onClick={() => router.push(tab.href)}
        >
          <IonIcon icon={tab.icon} />
          <span>{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomTabBar;
