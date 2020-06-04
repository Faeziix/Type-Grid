const IS = {
  Structure: ["Control", "Initiating", "Direct"],
  Starter: ["Informative", "Initiating", "Movement"],
  Finisher: ["Movement", "Responding", "Direct"],
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
  templar: ["Se-Ni", "Ti-Fe"],
  Wayferer: ["Se-Ni", "Te-Fi"],
  Philosopher: ["Si-Ne", "Te-Fi"],
};

let TypesData = [
  {
    id: 1,
    type: "ESTJ",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Guardian,
    CF: Q.Philosopher,
    Quadra: "Philosopher",
  },
  {
    id: 2,
    type: "ESTP",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Artisan,
    CF: Q.templar,
    Quadra: "Templar",
  },
  {
    id: 3,
    type: "ENTJ",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Intellectual,
    CF: Q.Wayferer,
    Quadra: "Wayferer",
  },
  {
    id: 4,
    type: "ENFJ",
    InteractionStyle: IS.Structure,
    Temperament: Temps.Idealist,
    CF: Q.templar,
    Quadra: "Templar",
  },
  {
    id: 5,
    type: "ESFJ",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Guardian,
    CF: Q.Crusader,
    Quadra: "Crusader",
  },
  {
    id: 6,
    type: "ESFP",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Artisan,
    CF: Q.Wayferer,
    Quadra: "Wayferer",
  },
  {
    id: 7,
    type: "ENTP",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Intellectual,
    CF: Q.Crusader,
    Quadra: "Crusader",
  },
  {
    id: 8,
    type: "ENFP",
    InteractionStyle: IS.Starter,
    Temperament: Temps.Idealist,
    CF: Q.Philosopher,
    Quadra: "Philosopher",
  },
  {
    id: 9,
    type: "ISTJ",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Guardian,
    CF: Q.Philosopher,
    Quadra: "Philosopher",
  },
  {
    id: 10,
    type: "ISTP",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Artisan,
    CF: Q.templar,
    Quadra: "Templar",
  },
  {
    id: 11,
    type: "INTJ",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Intellectual,
    CF: Q.Wayferer,
    Quadra: "Wayferer",
  },
  {
    id: 12,
    type: "INFJ",
    InteractionStyle: IS.Finisher,
    Temperament: Temps.Idealist,
    CF: Q.templar,
    Quadra: "Templar",
  },
  {
    id: 13,
    type: "ISFJ",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Guardian,
    CF: Q.Crusader,
    Quadra: "Crusader",
  },
  {
    id: 14,
    type: "ISFP",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Artisan,
    CF: Q.Wayferer,
    Quadra: "Wayferer",
  },
  {
    id: 15,
    type: "INTP",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Intellectual,
    CF: Q.Crusader,
    Quadra: "Crusader",
  },
  {
    id: 16,
    type: "INFP",
    InteractionStyle: IS.BehindTheScene,
    Temperament: Temps.Idealist,
    CF: Q.Philosopher,
    Quadra: "Philosopher",
  },
];

export default TypesData;
