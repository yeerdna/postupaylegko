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
      { title: "Банк заданий ЕГЭ", url: "https://fipi.ru/ege" },
      { title: "Результаты ЕГЭ", url: "https://checkege.rustest.ru/" },
    ],
  },
  {
    icon: "/assets/icons/document-text.svg",
    label: "Приёмные комиссии",
    links: [
      {
        title: "Госуслуги (поступление)",
        url: "https://www.gosuslugi.ru/help/faq/university/2619",
      },
      { title: "Вузы России", url: "https://vuzopedia.ru/vuz" },
    ],
  },
  {
    icon: "/assets/icons/cash.svg",
    label: "Льготы",
    links: [
      {
        title: "Льготы при поступлении",
        url: "https://postupi.online/journal/postuplenie-v-vuz/lgoti-pri-postuplenii-kakie-bivaut-i-kak-imi-vospolzovatsya/",
      },
    ],
  },
  {
    icon: "/assets/icons/business.svg",
    label: "Вузы и ресурсы",
    links: [
      { title: "Вузы России", url: "https://vuzopedia.ru/vuz" },
      {
        title: "Вузы Санкт-Петербурга",
        url: "https://tabiturient.ru/city/spb/",
      },
      { title: "Вузы (Пермь)", url: "https://perm.postupi.online/vuzi/" },

      { title: "Высшая школа экономики", url: "https://ba.hse.ru/" },
      { title: "МГТУ им. Баумана", url: "https://bmstu.ru/" },
      { title: "МИФИ", url: "https://mephi.ru/" },
      { title: "ИТМО", url: "https://itmo.ru/" },
      { title: "СПбПУ", url: "https://www.spbstu.ru/" },
      { title: "ЛЭТИ", url: "https://etu.ru/" },
      { title: "УрФУ", url: "https://urfu.ru/ru/" },
      { title: "УГНТУ", url: "https://ugntu2025.ru/" },
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
