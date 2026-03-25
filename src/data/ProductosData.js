const base = import.meta.env.BASE_URL;
export const mates = [
  {
    id: 1,
    img: `${base}img/imperial-alpaca.jpg`,
    tag: "Premium",
    nombre: "Imperial Alpaca",
    desc: "Terminación en alpaca con acabado impecable y muy buen peso en mano.",
    precio: 25000
  },
  {
    id: 2,
    img: `${base}img/Imperial-PREMIUM.jpg`,
    tag: "Exclusivo",
    nombre: "Imperial Premium",
    desc: "Diseño refinado con los más altos estándares de calidad y presentación.",
    precio: 30500
  },
  {
    id: 3,
    img: `${base}img/Camionero-ACERO.jpg`,
    tag: "Acero",
    nombre: "Camionero Acero",
    desc: "El favorito del viajero. Robusto, con tapa y tamaño generoso. Aguanta cualquier aventura.",
    precio: 13300
  },
  {
    id: 4,
    img: `${base}img/camionero-algarrobo.png`,
    tag: "Madera",
    nombre: "Camionero Algarrobo",
    desc: "Mate de algarrobo clásico y de estilo tradicional.",
    precio: 16000
  }
];

export const accesoriosCanastas = [
  
  {
    id: 1,
    img: `${base}img/bombilla-inox.png`,
    tag: "Accesorio",
    nombre: "Bombilla Acero Inoxidable",
    desc: "Bombilla de acero inoxidable duradera y fácil de limpiar.",
    precio: 5000
  },
  {
    id: 2,
    img: `${base}img/canasta-simple.png`,
    tag: "Canasta",
    nombre: "Canasta Simple",
    desc: "Canasta matera simple, práctica y funcional.",
    precio: 15000
  }
  
];
export const combos = [
{
    id: 1,
    img: `${base}img/termobala.jpeg`,
    tag: "Termo",
    nombre: "Termo Bala",
    desc: "Termo compacto y práctico para acompañar tu mate en cualquier momento.",
    precio: 10000
  },
  {
    id: 2,
    img: `${base}img/combo-matero-black.png`,
    tag: "Combo",
    nombre: "Combo Matero",
    desc: "Kit completo para el matero exigente. Ideal para regalo.",
    precio: 60000
  }]
