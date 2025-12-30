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
import {
  checkmarkCircle,
  flashOutline,
  trophyOutline,
  rocketOutline
} from "ionicons/icons";
import "./Tab3.css";

type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  badge?: string;
  features: string[];
  icon: string;
  recommended?: boolean;
};

const Tab3: React.FC = () => {
  const plans: Plan[] = [
    {
      id: "basico",
      name: "Básico",
      price: 25,
      period: "mes",
      icon: flashOutline,
      features: [
        "Acceso al área de pesas",
        "Horario: 6am - 10pm",
        "Casilleros disponibles",
        "WiFi gratuito",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: 45,
      period: "mes",
      badge: "Más popular",
      icon: trophyOutline,
      recommended: true,
      features: [
        "Todo lo del plan Básico",
        "Acceso 24/7",
        "Clases colectivas ilimitadas",
        "1 sesión de entrenamiento personalizado/mes",
        "Asesoría nutricional básica",
      ],
    },
    {
      id: "elite",
      name: "Elite",
      price: 75,
      period: "mes",
      badge: "Máximos resultados",
      icon: rocketOutline,
      features: [
        "Todo lo del plan Premium",
        "4 sesiones de entrenamiento personalizado/mes",
        "Plan nutricional completo personalizado",
        "Evaluaciones físicas mensuales",
        "Acceso prioritario a todas las clases",
        "Zona VIP con amenidades exclusivas",
      ],
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Planes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="plans">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Planes</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* HERO */}
        <section className="plans__hero">
          <IonText>
            <h1 className="plans__title">Elige tu plan</h1>
          </IonText>
          <IonText className="plans__subtitle">
            Membresías flexibles diseñadas para alcanzar tus metas.
          </IonText>
        </section>

        {/* GRID DE PLANES */}
        <section className="plans__grid">
          <IonGrid>
            <IonRow>
              {plans.map((plan) => (
                <IonCol key={plan.id} size="12" sizeMd="4">
                  <IonCard
                    className={`planCard ${plan.recommended ? "planCard--recommended" : ""}`}
                  >
                    {plan.badge && (
                      <div className="planCard__badgeWrap">
                        <IonChip className="planCard__badge">{plan.badge}</IonChip>
                      </div>
                    )}

                    <IonCardHeader>
                      <div className="planCard__icon">
                        <IonIcon icon={plan.icon} />
                      </div>
                      <IonCardTitle className="planCard__name">
                        {plan.name}
                      </IonCardTitle>
                      <div className="planCard__price">
                        <span className="price__amount">${plan.price}</span>
                        <span className="price__period">/{plan.period}</span>
                      </div>
                    </IonCardHeader>

                    <IonCardContent>
                      <ul className="planCard__features">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="feature">
                            <IonIcon icon={checkmarkCircle} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <IonButton
                        expand="block"
                        className={plan.recommended ? "btnPrimary" : "btnOutline"}
                        fill={plan.recommended ? "solid" : "outline"}
                        routerLink="/tab4"
                      >
                        Seleccionar plan
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* FAQ / INFO ADICIONAL */}
        <section className="plans__info">
          <IonCard className="card">
            <IonCardHeader>
              <IonCardTitle>¿Tienes dudas?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Todos nuestros planes incluyen acceso a duchas, casilleros y WiFi.
                No hay cargos ocultos ni contratos a largo plazo.
              </p>
              <p>
                <strong>Promoción actual:</strong> Prueba gratuita de 2 días
                para nuevos miembros.
              </p>
              <IonButton
                className="btnOutline"
                fill="outline"
                routerLink="/tab4"
              >
                Contáctanos
              </IonButton>
            </IonCardContent>
          </IonCard>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;