import React, { useMemo, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

type Category = "Suplementos" | "Maquinas" | "Accesorios" | "Ropa" | "Quemadores de Grasa";

type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string; // idealmente /assets/...
  url: string;   // link externo
};

const Tab2: React.FC = () => {
  const categories: Category[] = [
    "Suplementos",
    "Maquinas",
    "Accesorios",
    "Ropa",
    "Quemadores de Grasa",
  ];

  // Mock inicial (luego lo reemplazas por fetch JSON)
  const products: Product[] = [
    {
      id: "p1",
      name: "Proteína Whey Ultra",
      price: 85.99,
      category: "Suplementos",
      image: "/assets/products/whey.jpg",
      url: "https://www.amazon.com/",
    },
    {
      id: "p2",
      name: "BCAA Aminoácidos",
      price: 45.5,
      category: "Suplementos",
      image: "/assets/products/bcaa.jpg",
      url: "https://www.amazon.com/",
    },
    {
      id: "p3",
      name: "Cinta de correr Pro",
      price: 999,
      category: "Maquinas",
      image: "/assets/products/treadmill.jpg",
      url: "https://www.amazon.com/",
    },
  ];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "Todas">("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((p) => {
      const matchesCategory = category === "Todas" || p.category === category;
      const matchesQuery = q.length === 0 || p.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tienda</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="shop">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tienda</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* CONTROLES */}
        <section className="shop__controls">
          <IonSearchbar
            value={query}
            placeholder="Buscar producto..."
            onIonInput={(e) => setQuery(e.detail.value ?? "")}
          />

          <IonSelect
            value={category}
            placeholder="Seleccione una categoría"
            onIonChange={(e) => setCategory(e.detail.value)}
          >
            <IonSelectOption value="Todas">Todas</IonSelectOption>
            {categories.map((c) => (
              <IonSelectOption key={c} value={c}>
                {c}
              </IonSelectOption>
            ))}
          </IonSelect>
        </section>

        {/* GRID PRODUCTOS */}
        <section className="shop__grid">
          <IonGrid>
            <IonRow>
              {filtered.map((p) => (
                <IonCol key={p.id} size="12" sizeMd="6">
                  <IonCard className="productCard">
                    <IonImg src={p.image} alt={p.name} />

                    <IonCardContent>
                      <IonText>
                        <h3 className="productName">{p.name}</h3>
                      </IonText>

                      <IonText className="productPrice">
                        ${p.price}
                      </IonText>

                      <IonButton
                        expand="block"
                        className="btnPrimary"
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ver en Amazon
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}

              {filtered.length === 0 && (
                <IonCol size="12">
                  <IonText className="emptyState">
                    No hay productos con esos filtros.
                  </IonText>
                </IonCol>
              )}
            </IonRow>
          </IonGrid>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
