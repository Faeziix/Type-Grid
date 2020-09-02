const resetBtn = document.querySelector(".reset");
let GridTypes = document.querySelectorAll(".TypeName");
export const TypeNames = [
  "ESTJ",
  "ESTP",
  "ENTJ",
  "ENFJ",
  "ESFJ",
  "ESFP",
  "ENTP",
  "ENFP",
  "ISTJ",
  "ISTP",
  "INTJ",
  "INFJ",
  "ISFJ",
  "ISFP",
  "INTP",
  "INFP",
];

 export let types = {
  Direct: ["ESTJ", "ESTP", "ENTJ", "ENFJ", "ISTJ", "ISTP", "INTJ", "INFJ"],
  Informative: ["ESFJ", "ESFP", "ENTP", "ENFP", "ISFJ", "ISFP", "INTP", "INFP"],
  Initiating: ["ESTJ", "ESTP", "ENTJ", "ENFJ", "ESFJ", "ESFP", "ENTP", "ENFP"],
  Responding: ["ISTJ", "ISTP", "INTJ", "INFJ", "ISFJ", "ISFP", "INTP", "INFP"],
  Control: ["ESTJ", "ESTP", "ENTJ", "ENFJ", "ISFJ", "ISFP", "INTP", "INFP"],
  Movement: ["ESFJ", "ESFP", "ENTP", "ENFP", "ISTJ", "ISTP", "INTJ", "INFJ"],
  Affiliative: ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ENFJ", "ENFP", "INFJ", "INFP"],
  Pragmatic: ["ESTP", "ESFP", "ISTP", "ISFP", "ENTJ", "ENTP", "INTJ", "INTP"],
  Abstract: ["ENTJ", "ENTP", "INTJ", "INTP", "ENFJ", "ENFP", "INFJ", "INFP"],
  Concrete: ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ESTP", "ESFP", "ISTP", "ISFP"],
  Systematic: ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ENTJ", "ENTP", "INTJ", "INTP"],
  Interest: ["ESTP", "ESFP", "ISTP", "ISFP", "ENFJ", "ENFP", "INFJ", "INFP"],
  "Se-Ni": ["ESTP", "ESFP", "ISTP", "ISFP", "ENTJ", "INTJ", "ENFJ", "INFJ"],
  "Si-Ne": ["ESTJ", "ESFJ", "ISTJ", "ISFJ", "ENTP", "INTP", "ENFP", "INFP"],
  "Ti-Fe": ["ESTP", "ENFJ", "ESFJ", "ENTP", "ISTP", "INFJ", "ISFJ", "INTP"],
  "Te-Fi": ["ESTJ", "ENTJ", "ESFP", "ENFP", "ISTJ", "INTJ", "ISFP", "INFP"],
  Crusader: ["ESFJ", "ENTP", "ISFJ", "INTP"],
  Templar: ["ESTP", "ENFJ", "ISTP", "INFJ"],
  Wayfarer: ["ENTJ", "ESFP", "INTJ", "ISFP"],
  Philosopher: ["ESTJ", "ENFP", "ISTJ", "INFP"],
};

