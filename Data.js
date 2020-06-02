const IS = {
  Structure: ["Direct", "Initiating", "Control"],
  Starter: ["Informative", "Initiating", "Movement"],
  Finisher: ["Direct", "Responding", "Movement"],
  BehindTheScene: ["Informative", "Responding", "Control"],
};

const Temps = {
  Guardian: ["Affiliative", "Concrete", "Systematic"],
  Artisan: ["Pragmatic", "Concrete", "Intrest"],
  Intellectual: ["Pragmatic", "Abstract", "Systematic"],
  Idealist: ["Affiliative", "Abstract", "Intrest"],
};

const Q = {
  Crusader: ["Si-Ne", "Ti-Fe"],
  Temperamentlar: ["Se-Ni", "Ti-Fe"],
  Wayferer: ["Se-Ni", "Te-Fi"],
  Philosopher: ["Si-Ne", "Te-Fi"],
};
const TypesData = [
  {
    id: 1,
    type: "ESTJ",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Guardian,
    Quadra: Q.Philosopher,
  },
  {
    id: 2,
    type: "ESTP",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Artisan,
    Quadra: Q.Temperamentlar,
  },
  {
    id: 3,
    type: "ENTJ",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Intellectual,
    Quadra: Q.Wayferer,
  },
  {
    id: 4,
    type: "ENFJ",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Idealist,
    Quadra: Q.Temperamentlar,
  },
  {
    id: 5,
    type: "ESFJ",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Guardian,
    Quadra: Q.Crusader,
  },
  {
    id: 6,
    type: "ESFP",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Artisan,
    Quadra: Q.Wayferer,
  },
  {
    id: 7,
    type: "ENTP",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Intellectual,
    Quadra: Q.Crusader,
  },
  {
    id: 8,
    type: "ENFP",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Idealist,
    Quadra: Q.Philosopher,
  },
  {
    id: 9,
    type: "ISTJ",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Guardian,
    Quadra: Q.Philosopher,
  },
  {
    id: 10,
    type: "ISTP",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Artisan,
    Quadra: Q.Temperamentlar,
  },
  {
    id: 11,
    type: "INTJ",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Intellectual,
    Quadra: Q.Wayferer,
  },
  {
    id: 12,
    type: "INFJ",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Idealist,
    Quadra: Q.Temperamentlar,
  },
  {
    id: 13,
    type: "ISFJ",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Guardian,
    Quadra: Q.Crusader,
  },
  {
    id: 14,
    type: "ISFP",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Artisan,
    Quadra: Q.Wayferer,
  },
  {
    id: 15,
    type: "INTP",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Intellectual,
    Quadra: Q.Crusader,
  },
  {
    id: 16,
    type: "INFP",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Idealist,
    Quadra: Q.Philosopher,
  },
];

export default TypesData;