import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Tab4.css";
const departments = [
  {
    icon: "/assets/icons/book.svg",
    label: "Экзамены",
    links: [
      {
        title: "ФИПИ",
        url: "https://fipi.ru",
      },
      {
        title: "Результаты ЕГЭ",
        url: "https://checkege.rustest.ru",
      },
      {
        title: "Навигатор подготовки к ЕГЭ",
        url: "https://fipi.ru/navigator-podgotovki",
      },
      {
        title: "Расписание ЕГЭ",
        url: "https://obrnadzor.gov.ru",
      },
    ],
  },

  {
    icon: "/assets/icons/document-text.svg",
    label: "Приёмные комиссии",
    links: [
      {
        title: "Госуслуги — Поступление в вуз онлайн",
        url: "https://www.gosuslugi.ru/vuzonline",
      },
      {
        title: "Единая приёмная комиссия",
        url: "https://epkrf.ru",
      },
      {
        title: "СПбГУ — Приёмная комиссия",
        url: "https://abiturient.spbu.ru",
      },
      {
        title: "ПНИПУ — Абитуриенту",
        url: "https://pstu.ru/abitur",
      },
      {
        title: "ИТМО — Поступление",
        url: "https://abit.itmo.ru",
      },
    ],
  },

  {
    icon: "/assets/icons/cash.svg",
    label: "Льготы",
    links: [
      {
        title: "Льготы при поступлении",
        url: "https://www.gosuslugi.ru/help/faq/university",
      },
      {
        title: "Поступление БВИ",
        url: "https://postupi.online",
      },
      {
        title: "Олимпиады школьников",
        url: "https://rsr-olymp.ru",
      },
      {
        title: "Целевое обучение",
        url: "https://trudvsem.ru/information-pages/target-education",
      },
    ],
  },

  {
    icon: "/assets/icons/business.svg",
    label: "Общежития и ресурсы",
    links: [
      {
        title: "СПбГУ — Общежития",
        url: "https://spbu.ru",
      },
      {
        title: "СПбПУ — Кампус",
        url: "https://spbstu.ru",
      },
      {
        title: "ИТМО — Студенческие общежития",
        url: "https://itmo.ru",
      },
      {
        title: "ПГНИУ — Общежития",
        url: "https://www.psu.ru",
      },
      {
        title: "ПНИПУ — Студгородок",
        url: "https://pstu.ru",
      },
      {
        title: "Навигатор вузов",
        url: "https://tabiturient.ru",
      },
      {
        title: "Поступи Онлайн",
        url: "https://postupi.online",
      },
    ],
  },
];

const Tab4: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <IonPage className="link">
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="title">ПоступайЛегко</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="desktop-main">
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
              <div key={idx} className="dept-item-wrap">
                <div
                  className="dept-item"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <img src={dept.icon} className="dept-icon" alt={dept.label} />
                  <span className="dept-label">{dept.label}</span>
                  <span
                    className={`dept-arrow ${openIndex === idx ? "open" : ""}`}
                  >
                    ›
                  </span>
                </div>

                <div
                  className={`dept-links ${openIndex === idx ? "show" : ""}`}
                >
                  {dept.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      className="dept-link"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
