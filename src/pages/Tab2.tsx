import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonIcon,
} from "@ionic/react";
import "./Tab2.css";
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="title">ПоступайЛегко</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="desktop-main">
          <div className="hero-wrap">
            <div className="hero-section">
              <img
                src="/assets/icons/3.svg"
                alt="sova"
                className="hero-image1"
              />
              <div className="hero-text">
                <h1>
                  Чек-лист по <br />
                  поступлению в ВУЗ мечты
                </h1>
              </div>
            </div>
          </div>
          <div className="cards-wrapper">
            <div className="simple-card">
              <p>
                План помогает не забыть выжные шаги - от выбора направления до
                зачисления.
              </p>
            </div>
            <div className="content-col">
              <IonAccordionGroup>
                <IonAccordion value="1">
                  <IonItem slot="header" lines="none">
                    <IonCheckbox slot="start" />
                    <IonLabel>Выбор направления и университета</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <ul>
                      <li>Определите интересующие специальности и сферы</li>
                      <li>Изучите проходные баллы прошлых лет</li>
                      <li>Сравните вузы: бюджетные места, общежития, льготы</li>
                    </ul>
                  </div>
                </IonAccordion>
                <IonAccordion value="2">
                  <IonItem slot="header" lines="none">
                    <IonCheckbox slot="start" />
                    <IonLabel>ЕГЭ и вступительный испытания</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <ul>
                      <li>
                        Проверьте, какие экзамены нужны на выбранное направление
                      </li>
                      <li>Сравните свои баллы с минимальными и проходными</li>
                      <li>
                        Уточните, есть ли дополнительные творческие или
                        профильные испытания
                      </li>
                    </ul>
                  </div>
                </IonAccordion>
                <IonAccordion value="3">
                  <IonItem slot="header" lines="none">
                    <IonCheckbox slot="start" />
                    <IonLabel>Подготовка и подача документов</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <ul>
                      <li>
                        Соберите пакет документов (паспорт, аттестат, снилс и
                        т.д.)
                      </li>
                      <li>
                        Выберите способ подачи: онлайн, лично, через «Госуслуги»
                      </li>
                      <li>
                        Проверьте, не пропустили ли вы оригинал документа и
                        согласие на зачисление.
                      </li>
                    </ul>
                  </div>
                </IonAccordion>
                <IonAccordion value="4">
                  <IonItem slot="header" lines="none">
                    <IonCheckbox slot="start" />
                    <IonLabel>Сроки, конкурсы и зачисление</IonLabel>
                  </IonItem>
                  <div className="accordion-content" slot="content">
                    <ul>
                      <li>
                        Отслеживайте сроки приёмной комиссии и этапы зачисления
                      </li>
                      <li>
                        Следите за конкурсными списками и своим местом в
                        рейтинге
                      </li>
                      <li>
                        Уточните вопросы по общежитию и стипендии после
                        зачисления
                      </li>
                    </ul>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
