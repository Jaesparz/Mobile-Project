import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { barbellOutline, peopleOutline, nutritionOutline, timeOutline } from "ionicons/icons";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const offers = [
    {
      title: "Entrenamiento personalizado",
      desc: "Planes diseñados por entrenadores certificados para cada objetivo.",
      icon: barbellOutline,
    },
    {
      title: "Clases colectivas",
      desc: "Yoga, funcional y más, con horarios que se adaptan a tu rutina.",
      icon: peopleOutline,
    },
    {
      title: "Seguimiento y nutrición",
      desc: "Asesoría integral para maximizar tus resultados.",
      icon: nutritionOutline,
    },
  ];

  const testimonials = [
    {
      quote:
        "Alpha Gym me cambió la vida. Programas claros y entrenadores excelentes.",
      name: "Jaren Alvarez",
    },
    {
      quote: "Ambiente familiar y resultados rápidos.",
      name: "Keyla Marcillo",
    },
    {
      quote:
        "Me encanta la variedad de máquinas y la flexibilidad de horarios.",
      name: "Camily Torres",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="home">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* HERO */}
        <section className="home__hero">
          <IonChip className="home__pill">Tu mejor versión te espera</IonChip>

          <IonText>
            <h1 className="home__title">ALPHA GYM</h1>
          </IonText>

          <IonText className="home__lead">
            Transforma tu cuerpo, transforma tu vida. Prueba{" "}
            <span className="home__accent">2 días completamente gratis</span>.
          </IonText>

          <div className="home__cta">
            <IonButton className="btnPrimary">Prueba 2 días</IonButton>
            <IonButton
              className="btnOutline"
              fill="outline"
              routerLink="/tabs/tab3"
            >
              Ver planes
            </IonButton>
          </div>

          <IonGrid className="home__features">
            <IonRow>
              <IonCol size="12" sizeMd="4">
                <div className="feature">
                  <IonIcon icon={timeOutline} />
                  <IonText>Acceso 24/7</IonText>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="4">
                <div className="feature">
                  <IonIcon icon={barbellOutline} />
                  <IonText>Equipos Pro</IonText>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="4">
                <div className="feature">
                  <IonIcon icon={peopleOutline} />
                  <IonText>Entrenadores certificados</IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* QUÉ OFRECEMOS */}
        <section className="home__section">
          <IonText>
            <h2 className="sectionTitle">Qué ofrecemos</h2>
          </IonText>
          <IonText className="sectionSubtitle">
            Planes flexibles, equipo profesional y clases diarias para todos los niveles.
          </IonText>

          <IonGrid>
            <IonRow>
              {offers.map((o) => (
                <IonCol key={o.title} size="12" sizeMd="4">
                  <IonCard className="card">
                    <IonCardHeader>
                      <IonIcon icon={o.icon} className="card__icon" />
                      <IonCardTitle>{o.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{o.desc}</IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* TESTIMONIOS */}
        <section className="home__section">
          <IonText>
            <h2 className="sectionTitle">Testimonios</h2>
          </IonText>
          <IonText className="sectionSubtitle">
            Historias reales, resultados reales.
          </IonText>

          <IonGrid>
            <IonRow>
              {testimonials.map((t) => (
                <IonCol key={t.name} size="12" sizeMd="4">
                  <IonCard className="card">
                    <IonCardContent>
                      <p className="quote">“{t.quote}”</p>
                      <p className="author">— {t.name}</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* CTA FINAL */}
        <section className="home__section">
          <IonCard className="card card--cta">
            <IonCardHeader>
              <IonCardTitle>¿Listo para empezar?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Revisa los planes o solicita tu prueba de 2 días gratis.
              <div className="home__cta">
                <IonButton className="btnPrimary" routerLink="/tabs/tab3">
                  Ver planes
                </IonButton>
                <IonButton className="btnOutline" fill="outline" routerLink="/tabs/tab4">
                  Contacto
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

