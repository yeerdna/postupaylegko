import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab4.css";
const departments = [
  { icon: "/assets/icons/book.svg", label: "Экзамены", link: "/kadr" },
  {
    icon: "/assets/icons/document-text.svg",
    label: "Приёмные комиссии",
    link: "/study",
  },
  { icon: "/assets/icons/cash.svg", label: "Льготы", link: "/docs" },
  {
    icon: "/assets/icons/business.svg",
    label: "Общежития",
    link: "/support",
  },
];

const Tab4: React.FC = () => {
  return (
    <IonPage className="link">
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="title">ПоступайЛегко</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="hero-wrap">
          <div className="hero-section">
            <div className="hero-text">
              <h1>Полезные ссылки</h1>
            </div>

            <img
              src="/assets/icons/507B8F18-1998-4051-8B9D-A49088A42260 3.svg"
              alt="sova"
              className="hero-image"
            />
          </div>
        </div>
        <div className="dept-card">
          {departments.map((dept, idx) => (
            <a href={dept.link} key={idx} className="dept-item">
              <img src={dept.icon} className="dept-icon" alt={dept.label} />

              <span className="dept-label">{dept.label}</span>

              <span className="dept-arrow">›</span>
            </a>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
