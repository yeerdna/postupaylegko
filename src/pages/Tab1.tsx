import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
} from "@ionic/react";
import "./Tab1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
const Tab1: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="title">ПоступайЛегко</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="desktop-main">
          <div className="hero-wrap">
            <div className="hero-sectionm">
              <img
                src="/assets/icons/507B8F18-1998-4051-8B9D-A49088A42260 1.svg"
                alt="sova"
                className="hero-image"
              />
              <div className="hero-text">
                <h1 className="hero-title">
                  ПоступайЛегко - помощник абитуриента
                </h1>
              </div>
            </div>
            <p className="hero-desc">
              Поступление - проще, чем кажется. <br />
              <b>ПоступайЛегко</b> помогает разобраться в приёма, сроках и
              документах. Понятные шаги, краткие ответы и только проверенная
              информация - все в одном месте.
            </p>
          </div>
          <div className="slider-wrapper">
            {activeIndex === 1 && (
              <button
                className="nav-button left"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                ◀
              </button>
            )}
            <div className="slider-cont">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide">
                    <div className="slide-cont">
                      <img
                        src="/assets/icons/507B8F18-1998-4051-8B9D-A49088A42260 2.svg"
                        alt=""
                      />
                      <div className="slide-txt">
                        <h2>
                          Что вы найдете в <br /> приложении?
                        </h2>
                      </div>
                    </div>
                    <p>
                      <b>Вопросы и ответы</b> <br /> Краткие и понятные ответы
                      на самые частые <br /> вопросы абитуриентов: <br />{" "}
                      документы, ЕГЭ, сроки, приёмные комиссии, зачисление.
                    </p>
                    <p>
                      <b>Пошаговый план поступления</b> <br />
                      Чек-лист, который проведёт вас через все этапы: от выбора
                      направления до зачисления в ВУЗ.
                    </p>
                    <p>
                      <b>Полезные ссылки</b> <br />
                      Официальные сайты и ресурсы: экзамены, приёмные комиссии,
                      льготы, общежития.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slide">
                    <div className="slide-cont">
                      <img
                        src="/assets/icons/507B8F18-1998-4051-8B9D-A49088A42260 2.svg"
                        alt=""
                      />
                      <div className="slide-txt">
                        <h2>О проекте</h2>
                      </div>
                    </div>
                    <p className="secslide">
                      <b>ПоступайЛегко</b> - практико-ориентированный проект,
                      созданный для того, чтобы сделать процесс поступления
                      понятным и последовательным. Мы собираем информацию из
                      официальных источников и объясняем её простыми словами.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Кнопка ВПРАВО */}
            {activeIndex === 0 && (
              <button
                className="nav-button right"
                onClick={() => swiperRef.current?.slideNext()}
              >
                ▶
              </button>
            )}
          </div>

          <p className="lasttxt">
            <b>Начните прямо сейчас</b> <br />
            Разберитесь в поступлении шаг за шагом - спокойно и уверенно.{" "}
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
