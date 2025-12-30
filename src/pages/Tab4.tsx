import React, { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTextarea,
  IonText,
  IonTitle,
  IonToolbar,
  IonToast,
} from "@ionic/react";
import {
  locationOutline,
  callOutline,
  mailOutline,
  timeOutline,
  logoWhatsapp,
  logoInstagram,
  logoFacebook,
} from "ionicons/icons";
import "./Tab4.css";

const Tab4: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí integrarías con tu backend o servicio de email
    console.log({ name, email, phone, message });
    setShowToast(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const contactInfo = [
    {
      icon: locationOutline,
      title: "Dirección",
      content: "Av. Principal 123, Guayaquil",
      link: "https://maps.google.com/?q=-2.1894128,-79.8875535",
    },
    {
      icon: callOutline,
      title: "Teléfono",
      content: "+593 99 123 4567",
      link: "tel:+593991234567",
    },
    {
      icon: mailOutline,
      title: "Email",
      content: "info@alphagym.com",
      link: "mailto:info@alphagym.com",
    },
    {
      icon: timeOutline,
      title: "Horarios",
      content: "Lun - Dom: 24/7",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: logoWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/593991234567",
      color: "#25D366",
    },
    {
      icon: logoInstagram,
      name: "Instagram",
      url: "https://instagram.com/alphagym",
      color: "#E4405F",
    },
    {
      icon: logoFacebook,
      name: "Facebook",
      url: "https://facebook.com/alphagym",
      color: "#1877F2",
    },
  ];

  // Coordenadas del gimnasio (ejemplo: Guayaquil)
  const gymLocation = {
    lat: -2.1894128,
    lng: -79.8875535,
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacto</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="contact">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contacto</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* HERO */}
        <section className="contact__hero">
          <IonText>
            <h1 className="contact__title">¡Hablemos!</h1>
          </IonText>
          <IonText className="contact__subtitle">
            Estamos aquí para responder todas tus preguntas.
          </IonText>
        </section>

        {/* GRID PRINCIPAL */}
        <section className="contact__main">
          <IonGrid>
            <IonRow>
              {/* INFORMACIÓN DE CONTACTO */}
              <IonCol size="12" sizeLg="5">
                <div className="contact__info">
                  <IonText>
                    <h2 className="infoTitle">Información</h2>
                  </IonText>

                  <div className="infoCards">
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="infoCard">
                        <div className="infoCard__icon">
                          <IonIcon icon={info.icon} />
                        </div>
                        <div className="infoCard__content">
                          <h3>{info.title}</h3>
                          {info.link ? (
                            <a href={info.link} target="_blank" rel="noreferrer">
                              {info.content}
                            </a>
                          ) : (
                            <p>{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* REDES SOCIALES */}
                  <div className="socialLinks">
                    <IonText>
                      <h3 className="socialTitle">Síguenos</h3>
                    </IonText>
                    <div className="socialButtons">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="socialBtn"
                          style={{ "--social-color": social.color } as React.CSSProperties}
                        >
                          <IonIcon icon={social.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </IonCol>

              {/* FORMULARIO DE CONTACTO */}
              <IonCol size="12" sizeLg="7">
                <IonCard className="formCard">
                  <IonCardHeader>
                    <IonCardTitle>Envíanos un mensaje</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <form onSubmit={handleSubmit}>
                      <IonItem className="formItem" lines="none">
                        <IonLabel position="stacked">Nombre completo *</IonLabel>
                        <IonInput
                          value={name}
                          onIonInput={(e) => setName(e.detail.value!)}
                          placeholder="Tu nombre"
                          required
                        />
                      </IonItem>

                      <IonItem className="formItem" lines="none">
                        <IonLabel position="stacked">Email *</IonLabel>
                        <IonInput
                          type="email"
                          value={email}
                          onIonInput={(e) => setEmail(e.detail.value!)}
                          placeholder="tu@email.com"
                          required
                        />
                      </IonItem>

                      <IonItem className="formItem" lines="none">
                        <IonLabel position="stacked">Teléfono</IonLabel>
                        <IonInput
                          type="tel"
                          value={phone}
                          onIonInput={(e) => setPhone(e.detail.value!)}
                          placeholder="+593 99 123 4567"
                        />
                      </IonItem>

                      <IonItem className="formItem" lines="none">
                        <IonLabel position="stacked">Mensaje *</IonLabel>
                        <IonTextarea
                          value={message}
                          onIonInput={(e) => setMessage(e.detail.value!)}
                          placeholder="Cuéntanos cómo podemos ayudarte..."
                          rows={5}
                          required
                        />
                      </IonItem>

                      <IonButton
                        expand="block"
                        type="submit"
                        className="btnPrimary"
                      >
                        Enviar mensaje
                      </IonButton>
                    </form>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* MAPA */}
        <section className="contact__map">
          <IonText>
            <h2 className="mapTitle">Encuéntranos</h2>
          </IonText>
          <div className="mapContainer">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0!2d${gymLocation.lng}!3d${gymLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTEnMjEuOSJTIDc5wrA1MycxNS4yIlc!5e0!3m2!1ses!2sec!4v1234567890123!5m2!1ses!2sec`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Alpha Gym"
            />
          </div>
        </section>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="¡Mensaje enviado! Nos pondremos en contacto pronto."
          duration={3000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;