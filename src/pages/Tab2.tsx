import React, { useMemo, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  cartOutline,
  flashOutline,
  starOutline,
  trendingUpOutline,
} from "ionicons/icons";
import "./Tab2.css";

type Category = "Todas" | "Suplementos" | "Maquinas" | "Accesorios" | "Ropa" | "Quemadores de Grasa";

type Product = {
  id: string;
  name: string;
  price: number;
  category: Exclude<Category, "Todas">;
  image: string;
  url: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
  discount?: number;
  brand?: string;
};

const Tab2: React.FC = () => {
  const categories: Category[] = [
    "Todas",
    "Suplementos",
    "Maquinas",
    "Accesorios",
    "Ropa",
    "Quemadores de Grasa",
  ];

  const products: Product[] = [
    {
      id: "p1",
      name: "Proteína Whey Ultra Premium",
      price: 85.99,
      category: "Suplementos",
      image: "public/p1.png",
      url: "https://www.amazon.com/",
      rating: 4.8,
      reviews: 1247,
      featured: true,
      brand: "Optimum Nutrition",
    },
    {
      id: "p2",
      name: "BCAA Aminoácidos Esenciales",
      price: 45.5,
      category: "Suplementos",
      image: "/assets/products/bcaa.jpg",
      url: "https://www.amazon.com/",
      rating: 4.6,
      reviews: 892,
      brand: "Scivation",
    },
    {
      id: "p3",
      name: "Pre-Workout Explosivo",
      price: 39.99,
      category: "Suplementos",
      image: "/assets/products/preworkout.jpg",
      url: "https://www.amazon.com/",
      rating: 4.7,
      reviews: 654,
      discount: 15,
      brand: "C4",
    },
    {
      id: "p4",
      name: "Creatina Monohidratada 500g",
      price: 29.99,
      category: "Suplementos",
      image: "/assets/products/creatine.jpg",
      url: "https://www.amazon.com/",
      rating: 4.9,
      reviews: 2103,
      brand: "MyProtein",
    },
    {
      id: "p5",
      name: "Cinta de Correr Profesional",
      price: 999,
      category: "Maquinas",
      image: "public/p2.png",
      url: "https://www.amazon.com/",
      rating: 4.5,
      reviews: 234,
      featured: true,
      brand: "NordicTrack",
    },
    {
      id: "p6",
      name: "Bicicleta Estática Premium",
      price: 749,
      category: "Maquinas",
      image: "/assets/products/bike.jpg",
      url: "https://www.amazon.com/",
      rating: 4.6,
      reviews: 178,
      brand: "Peloton",
    },
    {
      id: "p7",
      name: "Set de Mancuernas Ajustables",
      price: 299,
      category: "Maquinas",
      image: "/assets/products/dumbbells.jpg",
      url: "https://www.amazon.com/",
      rating: 4.8,
      reviews: 567,
      discount: 20,
      brand: "Bowflex",
    },
    {
      id: "p8",
      name: "Guantes de Entrenamiento Pro",
      price: 24.99,
      category: "Accesorios",
      image: "/assets/products/gloves.jpg",
      url: "https://www.amazon.com/",
      rating: 4.4,
      reviews: 423,
      brand: "Harbinger",
    },
    {
      id: "p9",
      name: "Cinturón Lumbar de Fuerza",
      price: 34.99,
      category: "Accesorios",
      image: "/assets/products/belt.jpg",
      url: "https://www.amazon.com/",
      rating: 4.7,
      reviews: 312,
      brand: "Rogue",
    },
    {
      id: "p10",
      name: "Shaker Profesional 700ml",
      price: 12.99,
      category: "Accesorios",
      image: "/assets/products/shaker.jpg",
      url: "https://www.amazon.com/",
      rating: 4.3,
      reviews: 891,
      brand: "BlenderBottle",
    },
    {
      id: "p11",
      name: "Camiseta Dry-Fit Premium",
      price: 29.99,
      category: "Ropa",
      image: "/assets/products/shirt.jpg",
      url: "https://www.amazon.com/",
      rating: 4.5,
      reviews: 234,
      brand: "Nike",
    },
    {
      id: "p12",
      name: "Shorts de Entrenamiento",
      price: 34.99,
      category: "Ropa",
      image: "/assets/products/shorts.jpg",
      url: "https://www.amazon.com/",
      rating: 4.6,
      reviews: 189,
      brand: "Under Armour",
    },
    {
      id: "p13",
      name: "Quemador de Grasa Termogénico",
      price: 49.99,
      category: "Quemadores de Grasa",
      image: "public/p3.png",
      url: "https://www.amazon.com/",
      rating: 4.4,
      reviews: 456,
      featured: true,
      brand: "Hydroxycut",
    },
    {
      id: "p14",
      name: "L-Carnitina Líquida 3000mg",
      price: 39.99,
      category: "Quemadores de Grasa",
      image: "/assets/products/carnitine.jpg",
      url: "https://www.amazon.com/",
      rating: 4.5,
      reviews: 321,
      discount: 10,
      brand: "Evlution",
    },
  ];

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("Todas");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return products.filter((p) => {
      const matchesCategory = category === "Todas" || p.category === category;
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.brand?.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category, products]);

  const featuredProducts = useMemo(
    () => products.filter((p) => p.featured),
    [products]
  );

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

        {/* HERO */}
        <section className="shop__hero">
          <IonText>
            <h1 className="shop__title">Tienda Alpha Gym</h1>
          </IonText>
          <IonText className="shop__subtitle">
            Los mejores productos para alcanzar tus metas fitness
          </IonText>
        </section>

        {/* PRODUCTOS DESTACADOS */}
        {category === "Todas" && (
          <section className="shop__featured">
            <div className="featured__header">
              <IonIcon icon={trendingUpOutline} />
              <IonText>
                <h2>Productos destacados</h2>
              </IonText>
            </div>

            <div className="featured__scroll">
              {featuredProducts.map((p) => (
                <IonCard key={p.id} className="featuredCard">
                  <div className="featuredCard__badge">
                    <IonIcon icon={flashOutline} />
                    <span>Destacado</span>
                  </div>

                  <div className="featuredCard__image">
                    <IonImg src={p.image} alt={p.name} />
                  </div>

                  <IonCardContent>
                    <IonChip className="categoryChip">{p.category}</IonChip>
                    <h3 className="featuredCard__name">{p.name}</h3>
                    <div className="featuredCard__rating">
                      <IonIcon icon={starOutline} />
                      <span>
                        {p.rating} ({p.reviews})
                      </span>
                    </div>
                    <div className="featuredCard__price">${p.price}</div>
                    <IonButton
                      expand="block"
                      className="btnPrimary"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      size="small"
                    >
                      <IonIcon icon={cartOutline} slot="start" />
                      Ver producto
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              ))}
            </div>
          </section>
        )}

        {/* BÚSQUEDA */}
        <section className="shop__search">
          <IonSearchbar
            value={query}
            placeholder="Buscar productos o marcas..."
            onIonInput={(e) => setQuery(e.detail.value ?? "")}
            className="searchBar"
          />
        </section>

        {/* CATEGORÍAS */}
        <section className="shop__categories">
          <IonSegment
            value={category}
            onIonChange={(e) => setCategory(e.detail.value as Category)}
            scrollable={true}
            className="categorySegment"
          >
            {categories.map((c) => (
              <IonSegmentButton key={c} value={c}>
                <IonText>{c}</IonText>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </section>

        {/* CONTADOR DE RESULTADOS */}
        <section className="shop__results">
          <IonText className="resultsText">
            {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
            {category !== "Todas" && ` en ${category}`}
          </IonText>
        </section>

        {/* GRID PRODUCTOS */}
        <section className="shop__grid">
          <IonGrid>
            <IonRow>
              {filtered.map((p) => (
                <IonCol key={p.id} size="12" sizeMd="6" sizeLg="4">
                  <IonCard className="productCard">
                    {p.discount && (
                      <div className="productCard__discount">-{p.discount}%</div>
                    )}

                    <div className="productCard__image">
                      <IonImg src={p.image} alt={p.name} />
                    </div>

                    <IonCardContent>
                      <IonChip className="brandChip">{p.brand}</IonChip>
                      <IonText>
                        <h3 className="productName">{p.name}</h3>
                      </IonText>

                      <div className="productRating">
                        <IonIcon icon={starOutline} />
                        <span>
                          {p.rating} <span className="reviews">({p.reviews} reseñas)</span>
                        </span>
                      </div>

                      <div className="productPriceContainer">
                        {p.discount && (
                          <span className="productPrice--old">
                            ${(p.price / (1 - p.discount / 100)).toFixed(2)}
                          </span>
                        )}
                        <IonText className="productPrice">${p.price}</IonText>
                      </div>

                      <IonButton
                        expand="block"
                        className="btnPrimary"
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IonIcon icon={cartOutline} slot="start" />
                        Ver en Amazon
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}

              {filtered.length === 0 && (
                <IonCol size="12">
                  <div className="emptyState">
                    <IonIcon icon={cartOutline} className="emptyState__icon" />
                    <IonText className="emptyState__title">
                      No se encontraron productos
                    </IonText>
                    <IonText className="emptyState__text">
                      Intenta con otra búsqueda o categoría
                    </IonText>
                    <IonButton
                      className="btnOutline"
                      fill="outline"
                      onClick={() => {
                        setQuery("");
                        setCategory("Todas");
                      }}
                    >
                      Limpiar filtros
                    </IonButton>
                  </div>
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