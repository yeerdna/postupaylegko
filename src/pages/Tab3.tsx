import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";
import { useState } from "react";
import "./Tab3.css";
const faqData = [
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
  {
    question: "Вопрос",
    answer: "Ответ",
  },
];
const tab3: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="title">ПоступайЛегко</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="hero-wrap ">
          <div className="hero-section">
            <img
              src="/assets/icons/507B8F18-1998-4051-8B9D-A49088A42260 1.svg"
              alt="sova"
              className="hero-image"
            />
            <div className="hero-text">
              <h1>Популярные вопросы и ответы на них</h1>
            </div>
          </div>
        </div>
        <div className="faq-container">
          <input
            type="text"
            placeholder="Введите ключевое слово..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faq-search"
          />

          <div className="faq-card">
            <div className="faq-scroll">
              {filteredFaq.map((item, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span>{item.question}</span>
                    <span
                      className={`arrow ${openIndex === index ? "open" : ""}`}
                    >
                      ▼
                    </span>
                  </div>

                  <div
                    className={`faq-answer ${openIndex === index ? "show" : ""}`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default tab3;
