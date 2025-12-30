import React, { useState } from "react";
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
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  barbellOutline,
  peopleOutline,
  nutritionOutline,
  timeOutline,
  trophyOutline,
  heartOutline,
  flashOutline,
  chevronForwardOutline,
  chevronBackOutline,
  starOutline,
} from "ionicons/icons";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

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

  const stats = [
    { number: "5000+", label: "Miembros activos" },
    { number: "15+", label: "Años de experiencia" },
    { number: "98%", label: "Satisfacción" },
    { number: "24/7", label: "Acceso" },
  ];

  const instructors = [
    {
      name: "Carlos Mendoza",
      specialty: "Entrenador Personal Certificado",
      experience: "10+ años",
      image: "public/i1.png",
    },
    {
      name: "María Rodríguez",
      specialty: "Instructora de Yoga & Pilates",
      experience: "8+ años",
      image: "public/i2.png",
    },
    {
      name: "Jorge Silva",
      specialty: "Especialista en Fuerza",
      experience: "12+ años",
      image: "public/i3.png",
    },
    {
      name: "Ana Gómez",
      specialty: "Nutricionista Deportiva",
      experience: "7+ años",
      image: "public/i4.png",
    },
  ];

  const galleryImages = [
    "public/ag1.png",
    "public/ag2.png",
    "public/ag4.png",
    "public/ag5.png",
    "public/ag6.png",
    
  ];

  const testimonials = [
    {
      quote:
        "Alpha Gym me cambió la vida. Programas claros y entrenadores excelentes.",
      name: "Jaren Alvarez",
      rating: 5,
    },
    {
      quote: "Ambiente familiar y resultados rápidos.",
      name: "Keyla Marcillo",
      rating: 5,
    },
    {
      quote:
        "Me encanta la variedad de máquinas y la flexibilidad de horarios.",
      name: "Camily Torres",
      rating: 5,
    },
  ];

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

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

          <IonText>
            <h1 className="home__title">ALPHA GYM</h1>
          </IonText>

          <IonText className="home__lead">
            Transforma tu cuerpo, transforma tu vida. Prueba{" "}
            <span className="home__accent">2 días completamente gratis</span>.
          </IonText>

          <div className="home__cta">
            <IonButton className="btnPrimary" routerLink="/tab4">
              Prueba 2 días
            </IonButton>
            <IonButton
              className="btnOutline"
              fill="outline"
              routerLink="/tab3"
            >
              Ver planes
            </IonButton>
          </div>

          <IonGrid className="home__features">
            <IonRow>
              <IonCol size="12" sizeMd="3">
                <div className="feature">
                  <IonIcon icon={timeOutline} />
                  <IonText>Acceso 24/7</IonText>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="3">
                <div className="feature">
                  <IonIcon icon={barbellOutline} />
                  <IonText>Equipos Pro</IonText>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="3">
                <div className="feature">
                  <IonIcon icon={peopleOutline} />
                  <IonText>Entrenadores certificados</IonText>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="3">
                <div className="feature">
                  <IonIcon icon={nutritionOutline} />
                  <IonText>Nutrición integral</IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* ESTADÍSTICAS */}
        <section className="home__stats">
          <IonGrid>
            <IonRow>
              {stats.map((stat, idx) => (
                <IonCol key={idx} size="6" sizeMd="3">
                  <div className="statCard">
                    <div className="statCard__number">{stat.number}</div>
                    <div className="statCard__label">{stat.label}</div>
                  </div>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="home__section home__about">
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol size="12" sizeMd="6">
                <div className="about__content">
                  <IonText>
                    <h2 className="sectionTitle">¿Quiénes somos?</h2>
                  </IonText>
                  <IonText className="about__text">
                    <p>
                      Somos más que un gimnasio. Desde 2009, Alpha Gym ha sido el
                      hogar de miles de personas que buscan transformar sus vidas a
                      través del fitness y el bienestar integral.
                    </p>
                    <p>
                      Nuestro equipo de entrenadores certificados y nutricionistas
                      expertos trabaja contigo para diseñar planes personalizados
                      que se adaptan a tus metas, horarios y estilo de vida.
                    </p>
                  </IonText>

                  <div className="about__values">
                    <div className="valueItem">
                      <IonIcon icon={trophyOutline} />
                      <div>
                        <h4>Excelencia</h4>
                        <p>Equipos de última generación</p>
                      </div>
                    </div>
                    <div className="valueItem">
                      <IonIcon icon={heartOutline} />
                      <div>
                        <h4>Comunidad</h4>
                        <p>Ambiente familiar y motivador</p>
                      </div>
                    </div>
                    <div className="valueItem">
                      <IonIcon icon={flashOutline} />
                      <div>
                        <h4>Resultados</h4>
                        <p>Programas comprobados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </IonCol>
              <IonCol size="12" sizeMd="6">
                <div className="about__image">
                  <IonImg src="public/ag7.png" alt="Equipo Alpha Gym" />
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* GALERÍA DE INSTALACIONES */}
        <section className="home__section home__gallery">
          <IonText>
            <h2 className="sectionTitle">Nuestras instalaciones</h2>
          </IonText>
         

          <div className="gallery">
            <button className="gallery__btn gallery__btn--prev" onClick={prevGalleryImage}>
              <IonIcon icon={chevronBackOutline} />
            </button>

            <div className="gallery__main">
              <IonImg
                src={galleryImages[currentGalleryIndex]}
                alt={`Instalación ${currentGalleryIndex + 1}`}
              />
            </div>

            <button className="gallery__btn gallery__btn--next" onClick={nextGalleryImage}>
              <IonIcon icon={chevronForwardOutline} />
            </button>

            <div className="gallery__dots">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`gallery__dot ${
                    idx === currentGalleryIndex ? "gallery__dot--active" : ""
                  }`}
                  onClick={() => setCurrentGalleryIndex(idx)}
                />
              ))}
            </div>

            <IonGrid className="gallery__grid">
              <IonRow>
                {galleryImages.slice(0, 4).map((img, idx) => (
                  <IonCol key={idx} size="6" sizeMd="3">
                    <div
                      className={`gallery__thumb ${
                        idx === currentGalleryIndex ? "gallery__thumb--active" : ""
                      }`}
                      onClick={() => setCurrentGalleryIndex(idx)}
                    >
                      <IonImg src={img} alt={`Thumbnail ${idx + 1}`} />
                    </div>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </div>
        </section>

        {/* QUÉ OFRECEMOS */}
        <section className="home__section">
          <IonText>
            <h2 className="sectionTitle">Qué ofrecemos</h2>
          </IonText>
          <IonText className="sectionSubtitle">
            Planes flexibles, equipo profesional y clases diarias para todos los
            niveles.
          </IonText>

          <IonGrid>
            <IonRow>
              {offers.map((o) => (
                <IonCol key={o.title} size="12" sizeMd="4">
                  <IonCard className="card offerCard">
                    <IonCardHeader>
                      <div className="offerCard__iconWrapper">
                        <IonIcon icon={o.icon} className="card__icon" />
                      </div>
                      <IonCardTitle>{o.title}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{o.desc}</IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* INSTRUCTORES */}
        <section className="home__section home__instructors">
          <IonText>
            <h2 className="sectionTitle">Nuestros instructores</h2>
          </IonText>
          <IonText className="sectionSubtitle">
            Profesionales certificados comprometidos con tus resultados.
          </IonText>

          <IonGrid>
            <IonRow>
              {instructors.map((instructor) => (
                <IonCol key={instructor.name} size="12" sizeMd="6" sizeLg="3">
                  <IonCard className="card instructorCard">
                    <div className="instructorCard__image">
                      <IonImg src={instructor.image} alt={instructor.name} />
                      <div className="instructorCard__overlay">
                        <IonChip className="experienceChip">
                          {instructor.experience}
                        </IonChip>
                      </div>
                    </div>
                    <IonCardContent>
                      <h3 className="instructorCard__name">{instructor.name}</h3>
                      <p className="instructorCard__specialty">
                        {instructor.specialty}
                      </p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* TESTIMONIOS */}
        <section className="home__section home__testimonials">
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
                  <IonCard className="card testimonialCard">
                    <IonCardContent>
                      <div className="testimonialCard__rating">
                        {[...Array(t.rating)].map((_, i) => (
                          <IonIcon key={i} icon={starOutline} />
                        ))}
                      </div>
                      <p className="quote">{t.quote}</p>
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
                <IonButton className="btnPrimary" routerLink="/tab3">
                  Ver planes
                </IonButton>
                <IonButton
                  className="btnOutline"
                  fill="outline"
                  routerLink="/tab4"
                >
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